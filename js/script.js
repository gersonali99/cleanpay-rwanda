// Initialize vote counts from localStorage or set default values
let yesVotes = localStorage.getItem('yesVotes') ? parseInt(localStorage.getItem('yesVotes')) : 0;
let noVotes = localStorage.getItem('noVotes') ? parseInt(localStorage.getItem('noVotes')) : 0;

// Display the current votes when the page loads
document.getElementById('yes-count').textContent = yesVotes;
document.getElementById('no-count').textContent = noVotes;

// Function to handle vote submission
function submitVote() {
    // Get the selected vote option
    const selectedVote = document.querySelector('input[name="vote"]:checked');
    
    if (selectedVote) {
        if (selectedVote.value === 'yes') {
            yesVotes++;
            localStorage.setItem('yesVotes', yesVotes); // Store updated yes votes in localStorage
        } else if (selectedVote.value === 'no') {
            noVotes++;
            localStorage.setItem('noVotes', noVotes); // Store updated no votes in localStorage
        }

        // Update the vote counts on the page
        document.getElementById('yes-count').textContent = yesVotes;
        document.getElementById('no-count').textContent = noVotes;

        // Clear the selection after submitting
        document.getElementById('vote-form').reset();
    } else {
        alert("Please select an option before voting!"); // Alert if no option is selected
    }
}
