# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Express.js REST API for tracking user subscriptions, backed by MongoDB/Mongoose. Includes JWT authentication, Arcjet security middleware, and cookie-based sessions.

## Commands

```bash
npm run dev    # Start with nodemon (development)
npm start      # Start with node (production)
npm run lint   # Run ESLint
```

## Environment

- Environment variables loaded from `.env.{NODE_ENV}.local` (defaults to `development.local`)
- Set `NODE_ENV=production` for production mode
- Required vars: `PORT`, `MONGO_DB_URI`, `JWT_SECRET`, `ARCJET_KEY`

## Architecture

```
app.js → routes → controllers → models
         ↓
    middlewares (auth, arcjet, error)
```

- **Routes**: `/api/v1/auth` (sign-up, sign-in, sign-out), `/api/v1/users`, `/api/v1/subscriptions`
- **Auth**: JWT stored in HTTP-only cookies via `cookie-parser`
- **User model**: name, email, password (bcrypt hashed)
- **Subscription model**: name, price, currency, frequency, category, paymentMethod, status, startDate, renewalDate, user ref

## Key Files

- `app.js` — Express setup, middleware chain, route registration
- `config/env.js` — Environment variable loading with dotenv
- `config/arcjet.js` — Bot detection, rate limiting, shield rules
- `middlewares/auth.middleware.js` — JWT verification from cookies
- `models/subscription.js` — Auto-calculates renewal dates, auto-cancels expired subscriptions