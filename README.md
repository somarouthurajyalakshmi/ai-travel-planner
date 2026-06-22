# AI Travel Planner 🗺️✨

## Overview
An intelligent full-stack travel planning application that uses AI to generate personalized itineraries, recommend destinations, and provide real-time travel insights.

## Features
- 🤖 AI-powered trip recommendations
- 📍 Interactive itinerary builder
- 🌤️ Real-time weather & travel alerts
- 🗓️ Day-wise detailed planning
- 💰 Budget optimization
- 🖼️ Beautiful destination gallery
- 🔐 User authentication & saved trips

## Tech Stack

**Frontend:**
- React / Next.js
- TypeScript
- Tailwind CSS
- Axios / TanStack Query

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication

**AI Integration:**
- Google Gemini API (or OpenAI)


## Project Structure
ai-travel-planner/
├── frontend/          # React + Next.js frontend
├── backend/           # Node.js + Express backend
├── README.md
└── .gitignore

## Environment Variables
Create a `.env` file in the **backend** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_key_here
GEMINI_API_KEY=your_gemini_api_key_here

## HOW TO RUN LOCALLY 

# Clone the repo
git clone <your-repo-url>
cd ai-travel-planner

# Install dependencies
npm install

# Start Backend (Terminal 1)
cd backend
npm run dev

# Start Frontend (Terminal 2)
cd frontend
npm run dev