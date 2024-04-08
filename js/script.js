window.onload = function() {
    alert("Welcome to Aleena's Explore Space!");
    var confirmation = confirm("Are you excited?"); // Display a confirmation message
    if (confirmation) {
        alert("Great! Let's jump right in."); // Display a message if user confirms
    } else {
        alert("Too bad, welcome to my Explore Space!"); // Display a message if user cancels
    }
} 