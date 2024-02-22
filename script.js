import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
// script.js
// Replace these with your actual Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4F6sQ9kraEhyjb-gXI9ZS5CCdonaoCO8",
    authDomain: "profile-app-e1282.firebaseapp.com",
    databaseURL: "https://profile-app-e1282-default-rtdb.firebaseio.com",
    projectId: "profile-app-e1282",
    storageBucket: "profile-app-e1282.appspot.com",
    messagingSenderId: "4762613742",
    appId: "1:4762613742:web:901ee20544d718fc4000ff"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const userIds = ["CJJ7GOzLxRZhX3lfYvyTqs47PGz1", "Zo6eYFlIXxOo1YC4SaaTHWh5Aux2"]; // Replace with your two user IDs

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

