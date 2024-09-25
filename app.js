document.addEventListener('DOMContentLoaded', () => {
    const friends = []; 
    const friendInput = document.getElementById('friendName');
    const friendsOutput = document.getElementById('friendsOutput');
    const addFriendBtn = document.getElementById('addFriendBtn');
    const sortBtn = document.getElementById('sortBtn');
    const clearBtn = document.getElementById('clearBtn');

    addFriendBtn.addEventListener('click', () => {
        const friendName = friendInput.value.trim();

        if (friendName) {
            friends.push(friendName);
            updateFriendsList();
            friendInput.value = ''; 
        } else {
            alert('Syötä kaverin nimi ennen lisäämistä.');
        }
    });

    sortBtn.addEventListener('click', () => {
        friends.sort();
        updateFriendsList();
    });

    clearBtn.addEventListener('click', () => {
        friends.length = 0; 
        updateFriendsList();
    });

    function updateFriendsList() {
        friendsOutput.innerHTML = ''; 

        friends.forEach((friend, index) => {
            const li = document.createElement('li');
            li.textContent = friend;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Poista';
            removeBtn.className = 'removeBtn';
            removeBtn.addEventListener('click', () => {
                removeFriend(index); 
            });

            li.appendChild(removeBtn);
            friendsOutput.appendChild(li);
        });
    }

    function removeFriend(index) {
        friends.splice(index, 1); 
        updateFriendsList(); 
    }
});
