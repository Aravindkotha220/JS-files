
//  Firebase SDKs 

  // Import Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

  // ✅ Replace with your Firebase config
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  };

  {/* // Initialize Firebase */}
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Login Function
  window.login = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("message");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        msg.style.color = "green";
        msg.innerText = "Login successful! Redirecting...";
        // Redirect or do something
        setTimeout(() => window.location.href = "dashboard.html", 1000);
      })
      .catch((error) => {
        msg.style.color = "red";
        msg.innerText = error.message;
      });
  };