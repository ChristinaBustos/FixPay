// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7pf5oBCVIx8Pklwgr4xGqEp5C_ZW7aEk",
    authDomain: "examenu2-7f5e6.firebaseapp.com",
    projectId: "examenu2-7f5e6",
    storageBucket: "examenu2-7f5e6.appspot.com",
    messagingSenderId: "161934755642",
    appId: "1:161934755642:web:b796ac631b7523dea9b203"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)})
