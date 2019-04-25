 import firebase from "firebase";
 import firebase from "firebase/firestore";

 // Initialize Firebase
 const config = {
   apiKey: "AIzaSyDhPkbN1SKoM02xns-deTWBxESD3AHIDLM",
   authDomain: "social-media-portal-with-vue.firebaseapp.com",
   databaseURL: "https://social-media-portal-with-vue.firebaseio.com",
   projectId: "social-media-portal-with-vue",
   storageBucket: "social-media-portal-with-vue.appspot.com",
   messagingSenderId: "263684587892"
 };

 const firebaseApp = firebase.initializeApp(config);

 export default firebaseApp.firestore();
