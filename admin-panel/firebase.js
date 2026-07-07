import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseconfig={
apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
authDomain: "portfolio-website-56429.firebaseapp.com",
projectId: "portfolio-website-56429",
storageBucket: "portfolio-website-56429.firebasestorage.app",
messagingSenderId: "721748092598",
appId: "1:721748092598:web:5d11a3e50184d30b976817",
measurementId: "G-2L35TT42BW"
};
const app=initializeApp(firebaseconfig);
const auth=getAuth(app);
export {app,auth}