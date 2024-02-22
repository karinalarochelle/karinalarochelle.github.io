import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
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

// Get a reference to the database service
const database = getDatabase(app);

// Hardcoded user IDs to look up
const userIds = ["CJJ7GOzLxRZhX3lfYvyTqs47PGz1", "Zo6eYFlIXxOo1YC4SaaTHWh5Aux2"];

// Function to display user profiles
const displayUserProfiles = (userIds) => {
    userIds.forEach((userId) => {
        const userRef = ref(database, `users/${userId}`);
        onValue(userRef, (snapshot) => {
            const user = snapshot.val();
            console.log("User ID:", userId);
            console.log("Name:", user.name);
            console.log("Birthday:", user.birthday);
            console.log("Phone Number:", user.phone_number);
            console.log("Rating:", user.rating);
            console.log("Image:", user.image);
            // Display user profile on the web page
        });
    });
};
displayUserProfiles(userIds);
