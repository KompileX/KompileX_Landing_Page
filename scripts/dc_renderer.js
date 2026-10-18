const fs = require('fs');

function renderTemplate(templateHtml, vals) {
  // Extract body after </helmet> and before <script
  const bodyMatch = templateHtml.match(/<body>([\s\S]*?)<script/);
  if (!bodyMatch) throw new Error('No body found');
  let content = bodyMatch[1].split('</helmet>')[1] || bodyMatch[1];

  // Helper to resolve property path like 'b.h' in context stack
  function resolveVal(path, contextStack) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    for (let i = contextStack.length - 1; i >= 0; i--) {
      const ctx = contextStack[i];
      if (path in ctx) return ctx[path];
      const parts = path.split('.');
      if (parts[0] in ctx) {
        let curr = ctx[parts[0]];
        for (let j = 1; j < parts.length; j++) {
          if (curr != null && typeof curr === 'object') {
            curr = curr[parts[j]];
          } else {
            curr = undefined;
            break;
          }
        }
        if (curr !== undefined) return curr;
      }
    }
    return '';
  }

  // Recursive block processor
  function processBlock(tpl, contextStack) {
    let out = '';
    let pos = 0;

    while (pos < tpl.length) {
      // Find next tag <sc-for or <sc-if or interpolation {{...}}
      const forIdx = tpl.indexOf('<sc-for', pos);
      const ifIdx = tpl.indexOf('<sc-if', pos);
      const varIdx = tpl.indexOf('{{', pos);

      // Find the earliest match
      let nextType = null;
      let nextIdx = tpl.length;

      if (forIdx !== -1 && forIdx < nextIdx) { nextType = 'for'; nextIdx = forIdx; }
      if (ifIdx !== -1 && ifIdx < nextIdx) { nextType = 'if'; nextIdx = ifIdx; }
      if (varIdx !== -1 && varIdx < nextIdx) { nextType = 'var'; nextIdx = varIdx; }

      if (!nextType) {
        out += tpl.substring(pos);
        break;
      }

      out += tpl.substring(pos, nextIdx);

      if (nextType === 'var') {
        const endVar = tpl.indexOf('}}', nextIdx);
        if (endVar === -1) {
          out += tpl.substring(nextIdx);
          break;
        }
        const varExpr = tpl.substring(nextIdx + 2, endVar).trim();
        const val = resolveVal(varExpr, contextStack);
        out += (val != null ? val : '');
        pos = endVar + 2;
      } else if (nextType === 'if') {
        // Parse <sc-if value="{{expr}}" ...> ... </sc-if>
        const openEnd = tpl.indexOf('>', nextIdx);
        const openTag = tpl.substring(nextIdx, openEnd);
        const valMatch = openTag.match(/value="\{\{([^}]+)\}\}"/);
        const expr = valMatch ? valMatch[1] : '';
        const isTrue = Boolean(resolveVal(expr, contextStack));

        // Find matching </sc-if>
        let depth = 1;
        let scan = openEnd + 1;
        while (depth > 0 && scan < tpl.length) {
          const nextOpen = tpl.indexOf('<sc-if', scan);
          const nextClose = tpl.indexOf('</sc-if>', scan);
          if (nextClose === -1) break;
          if (nextOpen !== -1 && nextOpen < nextClose) {
            depth++;
            scan = nextOpen + 6;
          } else {
            depth--;
            if (depth === 0) {
              const inner = tpl.substring(openEnd + 1, nextClose);
              if (isTrue) {
                out += processBlock(inner, contextStack);
              }
              pos = nextClose + 8;
              break;
            }
            scan = nextClose + 8;
          }
        }
      } else if (nextType === 'for') {
        // Parse <sc-for list="{{listExpr}}" as="varName" ...> ... </sc-for>
        const openEnd = tpl.indexOf('>', nextIdx);
        const openTag = tpl.substring(nextIdx, openEnd);
        const listMatch = openTag.match(/list="\{\{([^}]+)\}\}"/);
        const asMatch = openTag.match(/as="([^"]+)"/);
        const listExpr = listMatch ? listMatch[1] : '';
        const asName = asMatch ? asMatch[1] : 'item';

        const listVal = resolveVal(listExpr, contextStack);
        const arr = Array.isArray(listVal) ? listVal : [];

        // Find matching </sc-for>
        let depth = 1;
        let scan = openEnd + 1;
        while (depth > 0 && scan < tpl.length) {
          const nextOpen = tpl.indexOf('<sc-for', scan);
          const nextClose = tpl.indexOf('</sc-for>', scan);
          if (nextClose === -1) break;
          if (nextOpen !== -1 && nextOpen < nextClose) {
            depth++;
            scan = nextOpen + 7;
          } else {
            depth--;
            if (depth === 0) {
              const inner = tpl.substring(openEnd + 1, nextClose);
              for (const item of arr) {
                const subCtx = {};
                subCtx[asName] = item;
                out += processBlock(inner, [...contextStack, subCtx]);
              }
              pos = nextClose + 9;
              break;
            }
            scan = nextClose + 9;
          }
        }
      }
    }
    return out;
  }

  return processBlock(content, [vals]);
}

module.exports = { renderTemplate };
