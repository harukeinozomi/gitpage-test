
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWpLbEqDfPoXzMq-zx2Lp3a34Bdq4cj-A",
    authDomain: "my-te-e00a9.firebaseapp.com",
    databaseURL: "https://my-te-e00a9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-te-e00a9",
    storageBucket: "my-te-e00a9.appspot.com",
    messagingSenderId: "332553501256",
    appId: "1:332553501256:web:d90948f4b148e99754f67d",
    measurementId: "G-1NLNQX87BR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
