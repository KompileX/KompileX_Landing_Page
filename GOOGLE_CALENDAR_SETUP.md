# Google Calendar Integration Setup Guide

This guide explains how to set up the environment variables and credentials to enable the calendar scheduling feature.

---

## 🔐 Required Environment Variables

Add these variables to your `.env.local` file (for local development) and to your hosting provider's settings (e.g., Vercel) for production:

```env
# Google Calendar OAuth 2.0 (Primary - Allows inviting clients)
GOOGLE_CLIENT_ID="your-oauth-client-id"
GOOGLE_CLIENT_SECRET="your-oauth-client-secret"
GOOGLE_REFRESH_TOKEN="your-oauth-refresh-token"
GOOGLE_CALENDAR_ID="your-target-email@gmail.com"

# Google Calendar Service Account (Fallback - Does not allow inviting guests on personal accounts)
GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-account-email@your-project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBAD...-----END PRIVATE KEY-----\n"
```

---

## 🚀 Step-by-Step Setup Instructions

### Part 1: Google Cloud Console Configuration
1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Select your project (or create a new one).
3. **Enable the Google Calendar API**:
   * Search for **Google Calendar API** in the top search bar.
   * Click **Enable**.
4. **Configure the OAuth Consent Screen**:
   * Search for **OAuth consent screen** or go to **Google Auth Platform > Branding**.
   * Choose **External** user type.
   * Fill out the App Name (e.g., `KompileX Chat Bot`) and support email.
   * Under **Audience**, make sure to **Add your email address (`your-target-email@gmail.com`) as a Test User**. (This is critical while the app is in testing mode).
   * Complete the setup.
5. **Create OAuth 2.0 Client ID**:
   * Go to the **Clients** tab (or **Credentials > Create Credentials > OAuth client ID**).
   * Select **Web application** as the application type.
   * Set the name to `KompileX Client`.
   * Under **Authorized redirect URIs**, click **Add URI** and paste this link:
     ```text
     https://developers.google.com/oauthplayground
     ```
   * Click **Create** and save your **Client ID** and **Client Secret**.

---

### Part 2: Generate the Refresh Token
1. Construct your custom authorization link by replacing `YOUR_CLIENT_ID` in the URL below with your actual **Client ID**:
   ```text
   https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar&prompt=consent&response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground
   ```
2. Open this link in your browser.
3. Sign in with the target Google Calendar account (e.g., `kompilex01@gmail.com`).
4. Click **Advanced > Go to KompileX Chat Bot (unsafe)** to bypass the verification warning.
5. Once authorized, Google will redirect you to the Google OAuth Playground.
6. **Look at your browser's address bar** at the top. Copy the value of the `code` parameter in the URL:
   `https://developers.google.com/oauthplayground/?code=4/0ATs...`
   *(⚠️ Do NOT click any buttons on the Playground page itself).*
7. Run the helper script in your project terminal to exchange the code for your **Refresh Token**:
   ```bash
   node scripts/get_refresh_token.js
   ```
   * Paste the code or URL when prompted, and it will output your `GOOGLE_REFRESH_TOKEN` and write it to `.env.local` automatically.

---

### Part 3: Service Account Configuration (Fallback)
If you want to configure the Service Account fallback option (in case the OAuth token expires or is revoked):
1. Go to **Credentials > Create Credentials > Service Account** in the Google Cloud Console.
2. Complete the creation steps.
3. Click on the created service account in the list, go to the **Keys** tab, and click **Add Key > Create new key (JSON)**. Download the file.
4. Copy the `"client_email"` and `"private_key"` from the JSON file into your `.env.local` under `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY`.
5. Open your Google Calendar website, go to your calendar settings, scroll to **"Share with specific people or groups"**, click **Add people**, paste the Service Account email, set permissions to **"Make changes and see all event details"**, and click **Send**.
