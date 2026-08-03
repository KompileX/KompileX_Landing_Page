// ============================================
// KompileX Landing Page - Main Script
// ============================================

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initWaitlistForms();
  initSmoothScroll();
  initScrollAnimations();
  initCounters();
  initFAQAccordion();
  initParallaxEffect();
});

// ==================== THEME TOGGLE ====================

function initThemeToggle(): void {
  const themeToggle = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-icon-dark');
  const lightIcon = document.getElementById('theme-icon-light');
  const html = document.documentElement;

  if (!themeToggle || !darkIcon || !lightIcon) return;

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  function setTheme(theme: string): void {
    if (theme === 'light') {
      html.setAttribute('data-theme', 'light');
      darkIcon?.classList.add('hidden');
      lightIcon?.classList.remove('hidden');
    } else {
      html.removeAttribute('data-theme');
      darkIcon?.classList.remove('hidden');
      lightIcon?.classList.add('hidden');
    }
  }
}

// ==================== MOBILE MENU ====================

function initMobileMenu(): void {
  const menuButton = document.getElementById('mobile-menu-button');
  const nav = document.querySelector('nav');

  if (!menuButton || !nav) return;

  let mobileMenu: HTMLDivElement | null = null;

  menuButton.addEventListener('click', () => {
    if (!mobileMenu) {
      // Create mobile menu
      mobileMenu = document.createElement('div');
      mobileMenu.className = 'fixed inset-0 top-16 z-40 bg-dark/95 backdrop-blur-xl md:hidden';
      mobileMenu.innerHTML = `
        <div class="p-6 space-y-4">
          <a href="#features" class="block py-3 text-lg text-theme-secondary hover:text-theme-primary transition-colors">Features</a>
          <a href="#pricing" class="block py-3 text-lg text-theme-secondary hover:text-theme-primary transition-colors">Pricing</a>
          <a href="#about" class="block py-3 text-lg text-theme-secondary hover:text-theme-primary transition-colors">About Us</a>
          <div class="pt-4 space-y-3" style="border-top: 1px solid var(--border-primary);">
            <a href="#download" class="btn-primary-blue w-full justify-center">Download for Windows</a>
            <a href="#waitlist" class="btn-outline w-full justify-center">Join the Waitlist</a>
          </div>
        </div>
      `;
      document.body.appendChild(mobileMenu);
      document.body.style.overflow = 'hidden';

      // Close menu when clicking links
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu?.remove();
          mobileMenu = null;
          document.body.style.overflow = '';
        });
      });
    } else {
      // Close menu
      mobileMenu.remove();
      mobileMenu = null;
      document.body.style.overflow = '';
    }
  });
}

// ==================== WAITLIST FORM ====================

interface WaitlistResponse {
  success: boolean;
  data?: {
    id: string;
    email: string;
    position: number;
    createdAt: string;
  };
  error?: string;
  message?: string;
}

function initWaitlistForms(): void {
  const forms = document.querySelectorAll<HTMLFormElement>('.waitlist-form');
  forms.forEach(form => {
    form.addEventListener('submit', handleWaitlistSubmit);
  });
}

async function handleWaitlistSubmit(event: Event): Promise<void> {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
  const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  if (!nameInput || !emailInput || !submitButton) return;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || name.length < 2) {
    gooeyToast.error('Invalid Name', {
      description: 'Please enter your name (at least 2 characters).',
      showProgress: true,
      duration: 3000
    });
    return;
  }

  if (!email || !isValidEmail(email)) {
    gooeyToast.error('Invalid Email', {
      description: 'Please enter a valid email address.',
      showProgress: true,
      duration: 3000
    });
    return;
  }

  const originalContent = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.innerHTML = `
    <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  `;

  try {
    const response = await fetch(`${API_BASE}/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, source: 'landing_page' }),
    });

    const data: WaitlistResponse = await response.json();

    if (response.ok && data.success && data.data) {
      nameInput.value = '';
      emailInput.value = '';
      
      // Show success toast with description and action button
      gooeyToast.success(`Welcome, ${name}! 🎉`, {
        description: `You're #${data.data.position} on the waitlist! We'll notify you when KompileX launches.`,
        showProgress: true,
        duration: 6000,
        action: {
          label: 'Share with Friends',
          onClick: () => {
            // Copy share link to clipboard
            const shareUrl = `https://kompilex.ai?ref=${data.data?.id}`;
            navigator.clipboard.writeText(shareUrl).then(() => {
              gooeyToast.info('Link Copied!', {
                description: 'Share KompileX with your friends and move up the waitlist.',
                showProgress: true,
                duration: 3000
              });
            });
          }
        }
      });
    } else {
      const errorMessage = data.error || data.message || 'Something went wrong.';
      if (errorMessage.toLowerCase().includes('already')) {
        gooeyToast.info('Already Registered', {
          description: 'This email is already on the waitlist! Check your inbox for updates.',
          showProgress: true,
          duration: 5000
        });
      } else {
        gooeyToast.error('Registration Failed', {
          description: errorMessage,
          showProgress: true,
          duration: 5000,
          action: {
            label: 'Try Again',
            onClick: () => {
              setTimeout(() => {
                form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
              }, 100);
            }
          }
        });
      }
    }
  } catch (error) {
    console.error('Waitlist submission error:', error);
    gooeyToast.error('Connection Error', {
      description: 'Unable to connect to server. Please check your internet and try again.',
      showProgress: true,
      duration: 5000,
      action: {
        label: 'Retry',
        onClick: () => {
          setTimeout(() => {
            form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
          }, 100);
        }
      }
    });
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = originalContent;
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==================== MORPHING TOAST NOTIFICATIONS ====================

interface ToastOptions {
  description?: string;
  duration?: number;
  showProgress?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface Toast {
  id: number;
  element: HTMLElement;
  timeoutId?: number;
}

class GooeyToast {
  private container: HTMLDivElement | null = null;
  private toasts: Map<number, Toast> = new Map();
  private nextId = 1;

  constructor() {
    this.initContainer();
  }

  private initContainer(): void {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'gooey-toast-container';
      document.body.appendChild(this.container);
    }
  }

  private getIcon(type: 'success' | 'error' | 'warning' | 'info'): string {
    const icons = {
      success: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l3 3L15 6"/>
      </svg>`,
      error: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l8 8M14 6l-8 8"/>
      </svg>`,
      warning: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 4v8m0 4h.01"/>
      </svg>`,
      info: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 8v4m0 4h.01M19 10c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
      </svg>`,
    };
    return icons[type];
  }

  show(
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'info',
    options: ToastOptions = {}
  ): number {
    const id = this.nextId++;
    const duration = options.duration ?? 4000;
    const hasDescription = !!options.description;
    const hasAction = !!options.action;

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `gooey-toast ${type} ${hasDescription || hasAction ? 'expanded' : ''}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');

    // Build toast HTML
    let toastHTML = `
      <div class="gooey-toast-header">
        <div class="gooey-toast-icon">${this.getIcon(type)}</div>
        <div class="gooey-toast-content">
          <p class="gooey-toast-title">${this.escapeHtml(message)}</p>
          ${options.description ? `<p class="gooey-toast-description">${this.escapeHtml(options.description)}</p>` : ''}
        </div>
        <button class="gooey-toast-close" aria-label="Close" data-toast-close>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M4 4l8 8M12 4l-8 8"/>
          </svg>
        </button>
      </div>
    `;

    if (options.action) {
      toastHTML += `
        <div class="gooey-toast-action">
          <button class="gooey-toast-action-btn" data-toast-action>
            ${this.escapeHtml(options.action.label)}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h6m0 0L8 5m3 3l-3 3"/>
            </svg>
          </button>
        </div>
      `;
    }

    if (options.showProgress) {
      toastHTML += `
        <div class="gooey-toast-progress">
          <div class="gooey-toast-progress-bar" style="--duration: ${duration}ms"></div>
        </div>
      `;
    }

    toast.innerHTML = toastHTML;

    // Add event listeners
    const closeBtn = toast.querySelector('[data-toast-close]');
    closeBtn?.addEventListener('click', () => this.dismiss(id));

    if (options.action) {
      const actionBtn = toast.querySelector('[data-toast-action]');
      actionBtn?.addEventListener('click', () => {
        options.action!.onClick();
        this.dismiss(id);
      });
    }

    // Add to container
    this.container?.appendChild(toast);

    // Store toast reference
    const toastData: Toast = { id, element: toast };
    this.toasts.set(id, toastData);

    // Auto-dismiss after duration
    if (duration > 0) {
      toastData.timeoutId = window.setTimeout(() => {
        this.dismiss(id);
      }, duration);
    }

    return id;
  }

  success(message: string, options?: ToastOptions): number {
    return this.show(message, 'success', options);
  }

  error(message: string, options?: ToastOptions): number {
    return this.show(message, 'error', options);
  }

  warning(message: string, options?: ToastOptions): number {
    return this.show(message, 'warning', options);
  }

  info(message: string, options?: ToastOptions): number {
    return this.show(message, 'info', options);
  }

  dismiss(id: number): void {
    const toast = this.toasts.get(id);
    if (!toast) return;

    // Clear timeout
    if (toast.timeoutId) {
      clearTimeout(toast.timeoutId);
    }

    // Animate out
    toast.element.classList.add('removing');

    // Remove from DOM after animation
    setTimeout(() => {
      toast.element.remove();
      this.toasts.delete(id);
    }, 300);
  }

  dismissAll(): void {
    this.toasts.forEach((_, id) => this.dismiss(id));
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Create global toast instance
const gooeyToast = new GooeyToast();


// ==================== SMOOTH SCROLL ====================

function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (!target) return;

      const navHeight = 64;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      history.pushState(null, '', href);
    });
  });
}

// ==================== SCROLL ANIMATIONS ====================

function initScrollAnimations(): void {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        entry.target.classList.remove('opacity-0');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
  });

  // Observe stats items
  document.querySelectorAll('.stats-item').forEach(stat => {
    observer.observe(stat);
  });

  // Observe feature card animates
  document.querySelectorAll('.feature-card-animate').forEach(card => {
    observer.observe(card);
  });

  // Observe use case cards
  document.querySelectorAll('.use-case-card').forEach(card => {
    observer.observe(card);
  });

  // Observe FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    observer.observe(item);
  });
}

// ==================== COUNTER ANIMATION ====================

function initCounters(): void {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target as HTMLElement;
        animateCounter(counter);
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
  });
}

function animateCounter(element: HTMLElement): void {
  const target = parseInt(element.getAttribute('data-target') || '0');
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString();
    }
  };

  updateCounter();
}

// ==================== FAQ ACCORDION ====================

function initFAQAccordion(): void {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = question.classList.contains('active');

      // Close all other FAQs
      faqItems.forEach(otherItem => {
        const otherQuestion = otherItem.querySelector('.faq-question');
        const otherAnswer = otherItem.querySelector('.faq-answer');
        if (otherQuestion && otherAnswer && otherItem !== item) {
          otherQuestion.classList.remove('active');
          otherAnswer.classList.remove('open');
        }
      });

      // Toggle current FAQ
      if (isOpen) {
        question.classList.remove('active');
        answer.classList.remove('open');
      } else {
        question.classList.add('active');
        answer.classList.add('open');
      }
    });
  });
}

// ==================== PARALLAX EFFECT ====================

function initParallaxEffect(): void {
  const heroImage = document.querySelector('.animate-float') as HTMLElement;

  if (!heroImage) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.3;

        // Only apply parallax in the hero section (first 100vh)
        if (scrolled < window.innerHeight) {
          heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }

        ticking = false;
      });

      ticking = true;
    }
  });
}
