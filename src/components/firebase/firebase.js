import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAW3xQQRfdLBuA04FzVRkaqL7MnbXL-FI",
  authDomain: "demo4545-64efb.firebaseapp.com",
  projectId: "demo4545-64efb",
  storageBucket: "demo4545-64efb.appspot.com",
  messagingSenderId: "40469071883",
  appId: "1:40469071883:web:49691b39e3acd591be5f0e"
};

const app = initializeApp(firebaseConfig);
export const authh = getAuth(app);
export default app