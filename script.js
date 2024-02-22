const firebaseConfig = {
    // Firebase configuration
};

firebase.initializeApp(firebaseConfig);

// Fetch and display profiles
function displayProfiles() {
    // Hardcoded IDs to look up
    const userIds = ['user1', 'user2'];

    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    userIds.forEach(userId => {
        dbRef.child(userId).once('value', snapshot => {
            const profile = snapshot.val();
            if (profile) {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = profile.name;
                row.appendChild(nameCell);

                const emailCell = document.createElement('td');
                emailCell.textContent = profile.email;
                row.appendChild(emailCell);

                const ageCell = document.createElement('td');
                ageCell.textContent = profile.age;
                row.appendChild(ageCell);

                tableBody.appendChild(row);
            }
        });
    });

    table.appendChild(tableBody);
    document.getElementById('profiles-container').appendChild(table);
}

// Call displayProfiles function on page load
window.onload = displayProfiles;