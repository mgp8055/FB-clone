import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeWZkCn-SV8JURwi6--YBma3GZGQuChko",
    authDomain: "facebook-clone-d9f84.firebaseapp.com",
    projectId: "facebook-clone-d9f84",
    storageBucket: "facebook-clone-d9f84.appspot.com",
    messagingSenderId: "437303445671",
    appId: "1:437303445671:web:b628631b53c676a3d83382",
    measurementId: "G-YWF79N34JF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;