# VISHNUVARDHAN Life Dashboard

A real, functional MVP life tracking dashboard built with React + Firebase. Track your daily progress in AI/ML, Design, and Fitness with Google Sign-in and persistent data storage.

## Features (Real & Working)

- Google Authentication - Secure login with Firebase Auth
- Daily Habit Tracking - Log hours spent on AI/ML, Design, and Fitness
- Real-time Charts - Visualize progress with Chart.js
- Persistent Storage - All data saved to Firestore
- Auto-load Past Data - Automatically fetch your history after login

## Quick Start (3 Easy Steps)

### Step 1: Set Up Firebase Project

1. Go to Firebase Console (https://console.firebase.google.com/)
2. Click "Create Project"
3. Enable:
   - Authentication -> Google sign-in method
   - Firestore Database -> Start in Test Mode
4. Copy your Firebase config from Project Settings -> Web app config

### Step 2: Add Firebase Config to Code

Open Dashboard.jsx and replace:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 3: Install & Run

```bash
npm install
npm start
```

## Tech Stack

- Frontend: React + Tailwind CSS
- Backend: Firebase (Auth + Firestore)
- Charts: Chart.js
- Deployment: Ready for Vercel/Netlify

## How It Works

1. Login: Click "Login with Google" button
2. Log Data: Enter hours for each category (AI/ML, Design, Fitness)
3. Save: Click "Save Today" to store in Firestore
4. Visualize: Charts automatically update showing your progress

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to Vercel for auto-deployment.

## Next Features (Phase 2)

- 21-day & 90-day roadmaps
- Daily streak & heatmap calendar
- Custom categories (10+ topics per day)
- AI weekly summaries
- Mobile-first UI
- AI suggestions based on habits

## License

MIT License - Feel free to use and modify

---

Built by VISHNUVARDHAN ROY
