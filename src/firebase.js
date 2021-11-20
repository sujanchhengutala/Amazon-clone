
import {initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDJtnVJUr8_O6za1fDcdZFDlRgkYD2WHSM",
    authDomain: "practice-c26ec.firebaseapp.com",
    databaseURL: "https://practice-c26ec-default-rtdb.firebaseio.com",
    projectId: "practice-c26ec",
    storageBucket: "practice-c26ec.appspot.com",
    messagingSenderId: "968700463603",
    appId: "1:968700463603:web:2b0ebbcf30231d95b9ea86",
    measurementId: "G-JP6FRD8M96"
  };
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
