import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
// script.js
// Replace these with your actual Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNFGbJvf3Q77sLb_adDXBADRdGvtV78Og",
    authDomain: "profile-app-14af9.firebaseapp.com",
    databaseURL: "https://profile-app-14af9-default-rtdb.firebaseio.com",
    projectId: "profile-app-14af9",
    storageBucket: "profile-app-14af9.appspot.com",
    messagingSenderId: "527016078505",
    appId: "1:527016078505:web:7b551e3e1418d5ce5f4db8"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const userIds = ["BuZaEsFQqXUhvI3zh6dzAnNBq562", "beDf5JtbkEMWpkiA3vD52FayBSt1"]; // Replace with your two user IDs

function displayUserProfile(userId) {
    const userRef = ref(database, `/${userId}`);
    onValue(userRef, (snapshot) => {
        const user = snapshot.val();
        if (!user) { // Handle case where user doesn't exist
            console.error(`User ID ${userId} not found in database.`);
            return;
        }

        const userProfile = document.createElement("div");
        userProfile.classList.add("user-profile");

        const image = document.createElement("img");
        image.src = user.image;
        userProfile.appendChild(image);

        const name = document.createElement("p");
        name.textContent = `Name: ${user.name}`;
        userProfile.appendChild(name);

        const birthday = document.createElement("p");
        birthday.textContent = `Birthday: ${user.birthday}`;
        userProfile.appendChild(birthday);

        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = `Phone Number: ${user.phone_number}`;
        userProfile.appendChild(phoneNumber);

        const rating = document.createElement("p");
        rating.textContent = `Rating: ${user.rating}`;
        userProfile.appendChild(rating);

        document.getElementById("user-profiles").appendChild(userProfile);
    });
}

userIds.forEach(displayUserProfile);

