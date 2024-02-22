// Replace these with your actual Firebase project configuration
const firebaseConfig = {
    // ...
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const userProfiles = document.querySelector('.user-profiles');

// Loop through all users in the "users" node
database.ref('users').on('value', snapshot => {
    const users = snapshot.val();

    // Clear existing profiles before displaying new ones
    userProfiles.innerHTML = '';

    for (const userId in users) {
        // Create a new profile element for each user
        const profileElement = document.createElement('div');
        profileElement.classList.add('profile');

        // Retrieve and display user data
        database.ref(`users/${userId}`).on('value', userSnapshot => {
            const userData = userSnapshot.val();
            profileElement.innerHTML = `
                <img src="${userData.photoUrl}" alt="${userData.name}">
                <h2>${userData.name}</h2>
                <p>${userData.bio}</p>
            `;
        });

        // Add the profile element to the DOM
        userProfiles.appendChild(profileElement);
    }
});