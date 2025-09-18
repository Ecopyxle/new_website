# API Routes Note for Static Export

⚠️ **Important**: API routes (`/app/api/*`) will NOT work with static export on Hostinger.

## Current API Routes:
- `/api/chat` - Chat functionality
- `/api/health` - Health check endpoint
- `/api/monitoring/errors` - Error reporting

## Solutions for Hostinger:

### Option 1: Remove API Dependencies (Recommended for Static Hosting)
- Remove or disable chat functionality
- Remove health check calls
- Remove error reporting to API

### Option 2: Use External Services
- **Chat**: Use services like Intercom, Crisp, or Tawk.to
- **Forms**: Use Formspree, Netlify Forms, or similar
- **Analytics**: Use Google Analytics, Hotjar, etc.

### Option 3: Serverless Functions (if Hostinger supports)
- Check if your Hostinger plan supports serverless functions
- Migrate API routes to serverless functions

## Current Implementation:
The build process will ignore API routes, and the static site will work without them.
Any frontend code calling these APIs should be updated to handle the absence gracefully.

## Recommended Changes:
1. Replace chat functionality with a contact form
2. Remove health check monitoring
3. Use client-side error tracking (like Sentry)
4. Add external analytics instead of custom API calls
