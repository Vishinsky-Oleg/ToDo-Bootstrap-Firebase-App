import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA30AjRk4QbNIFkQl0voyObf-YSIW4_Cqo",
    authDomain: "todo-application-78e92.firebaseapp.com",
    projectId: "todo-application-78e92",
    storageBucket: "todo-application-78e92.appspot.com",
    messagingSenderId: "812320243871",
    appId: "1:812320243871:web:6376d3bcf260a0c78ae2aa",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
