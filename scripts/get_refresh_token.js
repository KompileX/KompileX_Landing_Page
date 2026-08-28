const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return {};
  const env = {};
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const index = trimmed.indexOf('=');
    if (index === -1) return;
    const key = trimmed.substring(0, index).trim();
    let val = trimmed.substring(index + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.substring(1, val.length - 1);
    } else if (val.startsWith("'") && val.endsWith("'")) {
      val = val.substring(1, val.length - 1);
    }
    env[key] = val;
  });
  return env;
}

const env = loadEnv();
const clientId = env.GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID;
const clientSecret = env.GOOGLE_CLIENT_SECRET || process.env.GOOGLE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.log('\nError: GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET is missing from your .env.local file.');
  console.log('\nPlease add them to your .env.local file first before running this script:');
  console.log('GOOGLE_CLIENT_ID="your-client-id"');
  console.log('GOOGLE_CLIENT_SECRET="your-client-secret"');
  console.log('\n(See instruction on how to create them in Google Cloud Console)');
  process.exit(1);
}

// We will use OAuth Playground as redirect URI because it is pre-registered and allows easy copy-paste
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline', // Requests a refresh token
  scope: SCOPES,
  prompt: 'consent' // Forces consent screen to ensure refresh token is always returned
});

console.log('\n=========================================');
console.log('Google Calendar OAuth 2.0 Refresh Token Generator');
console.log('=========================================');
console.log('\n1. Open this URL in your browser and log in with your host email (kompilex01@gmail.com):\n');
console.log(authUrl);
console.log('\n2. Accept the permissions to manage your calendar.');
console.log('3. You will be redirected to the OAuth Playground. Look at the browser URL bar.');
console.log('4. Copy the "code" parameter from the URL in your browser address bar.');
console.log('   (It will look like: code=4/0AfD... in the URL)');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nPaste the copied authorization "code" here: ', (code) => {
  rl.close();
  // Strip any URL prefixes if user pasted the full URL by mistake
  let cleanCode = code.trim();
  if (cleanCode.includes('code=')) {
    const urlParams = new URLSearchParams(cleanCode.split('?')[1] || cleanCode);
    cleanCode = urlParams.get('code') || cleanCode;
  }

  oauth2Client.getToken(cleanCode, (err, tokens) => {
    if (err) {
      console.error('\nError exchanging code for token:', err.response ? err.response.data : err.message);
      return;
    }
    console.log('\n=========================================');
    console.log('Success! Refresh Token Generated.');
    console.log('\nAdd these lines to your .env.local file:\n');
    console.log(`GOOGLE_CLIENT_ID="${clientId}"`);
    console.log(`GOOGLE_CLIENT_SECRET="${clientSecret}"`);
    console.log(`GOOGLE_REFRESH_TOKEN="${tokens.refresh_token}"`);
    console.log('\n=========================================');
  });
});
