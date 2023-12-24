import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB2GKuXz7xiC4oMtCx9An2p5ummC9Kw8ho",
  authDomain: "swift-sell.firebaseapp.com",
  projectId: "swift-sell",
  storageBucket: "swift-sell.appspot.com",
  messagingSenderId: "745704196366",
  appId: "1:745704196366:web:a65cbdf4fba3f545496f5f"
};

const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);
 export default auth;