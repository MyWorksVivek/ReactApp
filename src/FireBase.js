import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCf4riPKaiETE2X8_Yxcud8xKHEC4OjQb0",
  authDomain: "clone-with-reactjs-a060d.firebaseapp.com",
  projectId: "clone-with-reactjs-a060d",
  storageBucket: "clone-with-reactjs-a060d.appspot.com",
  messagingSenderId: "339317803736",
  appId: "1:339317803736:web:bf3cfae3554cfb68d9a5ad"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export {db};