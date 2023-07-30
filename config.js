import firebase from "firebase";
require("@firebase/firestore");

//Pega tu configuración de firebase aquí

const firebaseConfig = {
    apiKey: "AIzaSyCzjQMTJNZEWgbMlOPp5Gv1r1pIpLUzl1o",
    authDomain: "paseoelectronico-9f501.firebaseapp.com",
    projectId: "paseoelectronico-9f501",
    storageBucket: "paseoelectronico-9f501.appspot.com",
    messagingSenderId: "481705343131",
    appId: "1:481705343131:web:1b4a28bb781efdc96a6e3e"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


