// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC4F6sQ9kraEhyjb-gXI9ZS5CCdonaoCO8",
    authDomain: "profile-app-e1282.firebaseapp.com",
    databaseURL: "https://profile-app-e1282-default-rtdb.firebaseio.com",
    projectId: "profile-app-e1282",
    storageBucket: "profile-app-e1282.appspot.com",
    messagingSenderId: "4762613742",
    appId: "1:4762613742:web:51feddf2c2797f794000ff"
};
firebase.initializeApp(firebaseConfig);

// Reference to your RTDB
const dbRef = firebase.database().ref('User UID/Profiles');

// Fetch and display profiles
function displayProfiles() {
    dbRef.limitToFirst(2).once('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            const profile = childSnapshot.val();
            // Display profile data on the web page
            document.getElementById('profiles-container').innerHTML += `
                <div class="profile">
                    <h2>${profile.name}</h2>
                    <p>Email: ${profile.email}</p>
                    <p>Age: ${profile.age}</p>
                </div>
            `;
        });
    });
}

// Call displayProfiles function on page load
window.onload = displayProfiles;