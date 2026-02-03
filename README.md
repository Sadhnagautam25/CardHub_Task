# Backend (Cards API)

Simple Express + MongoDB backend for managing "cards" used by the frontend.

## Overview

This service provides basic CRUD endpoints for cards.

## Prerequisites

- Node.js (v16+ recommended)
- A MongoDB connection string (set in `.env` as `MONGO_URI`)

## Install

```bash
cd backend
npm install
```

## Environment

Create a `.env` file in the `backend` folder containing at least:

```env
MONGO_URI=your_mongodb_connection_string
```

## Run

- Development (uses nodemon via npx):

```bash
npm run dev
```

- Or run directly with Node:

```bash
node server.js
```

The server listens on port 3000 (see `server.js`).

## API Endpoints

- POST /api/cards — Create a card. Expects JSON body with fields `image`, `name`, `location`, `title`, `description`, `IsLinkedin`, `IsGithub`. Returns created card (201).
- GET /api/cards — Fetch all cards (200).
- PUT /api/cards/:id — Update card by id. Expects same body fields as POST (200).
- DELETE /api/cards/:id — Delete card by id (204).

Example curl (create):

```bash
curl -X POST http://localhost:3000/api/cards \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","title":"Developer"}'
```

## Project Structure (key files)

- `server.js` — Bootstraps DB connection and starts the server.
- `src/app.js` — Express app and route handlers.
- `src/config/database.js` — MongoDB connection helper (reads `MONGO_URI`).
- `src/models/cards.model.js` — Mongoose schema for cards.
- `public/` — Static assets served by the backend.

## Notes

- Ensure `MONGO_URI` is valid before starting; the server will exit on DB connection failure.
- Development script uses `npx nodemon server.js` (`npm run dev`).

---

If you'd like, I can also add example `.env.example`, or document the card schema in this README.
