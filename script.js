// Initialize Firebase
const firebaseConfig = {
    // Your Firebase config
};
firebase.initializeApp(firebaseConfig);

// Reference to your RTDB
const dbRef = firebase.database().ref('profiles');

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