
  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

  import { getFirestore} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js"

  import { collection, addDoc } from "firebase/firestore"; 

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyD0X7SzAbN9W91drBuoWAVyE8wOj0WIHkY",

    authDomain: "despessapp-b5758.firebaseapp.com",

    projectId: "despessapp-b5758",

    storageBucket: "despessapp-b5758.firebasestorage.app",

    messagingSenderId: "376063488371",

    appId: "1:376063488371:web:946d6acec2ee8f0f805506"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);


  export const saveDespesa = ( despesa ) => {
    console.log(despesa);
    addDoc( collection(db, "despeses"), despesa);

  };
