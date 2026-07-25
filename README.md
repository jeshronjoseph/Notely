# Notely

A simple full-stack notes app — create, view, edit, and delete notes. Built with the MERN stack (MongoDB, Express, React, Node.js).

**Live demo:** https://notely-bdez.onrender.com/

## Tech stack
- Frontend: React + Vite, Tailwind/DaisyUI
- Backend: Express, Mongoose
- Rate limiting: Upstash Redis

## Setup

1. Clone the repo
   ```
   git clone https://github.com/jeshronjoseph/Notely.git
   cd Notely
   ```

2. Create `backend/.env` with:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_token
   PORT=5001
   ```

3. Install dependencies:
   ```
   npm install --prefix backend
   npm install --prefix frontend
   npm install
   ```

4. Run both frontend and backend together:
   ```
   npm run dev
   ```

5. Open `http://localhost:5173`

## Deployment
Backend deployed on Render, frontend served from the same build.

