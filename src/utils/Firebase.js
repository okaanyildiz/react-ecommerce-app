import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBcSRssncj3AadLXmwz30C5ku3INWd6uN8",
    authDomain: "react-ecommerce-app-85061.firebaseapp.com",
    projectId: "react-ecommerce-app-85061",
    storageBucket: "react-ecommerce-app-85061.appspot.com",
    messagingSenderId: "418285064045",
    appId: "1:418285064045:web:16f1dbb994382166a79464"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

