// VISHNUVARDHAN LIFE DASHBOARD – REAL FUNCTIONAL MVP
// Tech: React + Firebase (Auth + Firestore) + Chart.js
// This is a complete starter app structure you can deploy on Vercel

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { Line } from "react-chartjs-2";

// 🔥 Firebase config (REPLACE WITH YOUR OWN)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [logs, setLogs] = useState([]);
  const [ai, setAI] = useState(0);
  const [design, setDesign] = useState(0);
  const [fitness, setFitness] = useState(0);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const saveLog = async () => {
    if (!user) return alert("Login first");
    await addDoc(collection(db, "logs"), {
      uid: user.uid,
      date: new Date().toISOString().slice(0, 10),
      ai,
      design,
      fitness
    });
    fetchLogs();
  };

  const fetchLogs = async () => {
    if (!user) return;
    const q = query(collection(db, "logs"), where("uid", "==", user.uid));
    const snap = await getDocs(q);
    setLogs(snap.docs.map(d => d.data()));
  };

  useEffect(() => {
    fetchLogs();
  }, [user]);

  const chartData = {
    labels: logs.map(l => l.date),
    datasets: [
      { label: "AI/ML", data: logs.map(l => l.ai) },
      { label: "Design", data: logs.map(l => l.design) },
      { label: "Fitness", data: logs.map(l => l.fitness) }
    ]
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🔥 VISHNUVARDHAN Life Dashboard</h1>

      {!user ? (
        <button onClick={login} className="bg-black text-white px-4 py-2">Login with Google</button>
      ) : (
        <div>
          <p className="mb-2">Welcome, {user.displayName}</p>
          <button onClick={logout} className="text-red-500">Logout</button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 my-6">
        <input type="number" placeholder="AI/ML hrs" onChange={e => setAI(+e.target.value)} />
        <input type="number" placeholder="Design hrs" onChange={e => setDesign(+e.target.value)} />
        <input type="number" placeholder="Fitness hrs" onChange={e => setFitness(+e.target.value)} />
      </div>

      <button onClick={saveLog} className="bg-green-600 text-white px-4 py-2">Save Today</button>

      <div className="my-10">
        <Line data={chartData} />
      </div>
    </div>
  );
}
