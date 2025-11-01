// Purpose of this file is to handle screensaver functionality

// Finding the #start-link element
let startLink = document.getElementById('start-link');
// Finding the #loader element
let loader = document.getElementById('loader');

// Creating an event listener for "click" event
document.addEventListener('click', function(event) {
    if (event.target === startLink) {
        return; // Do nothing if #start-link is clicked
    }

    loader.style.display = "flex"; // make the loaded appear when event happens, we set it's display to flex
    setTimeout(function() {
        window.location.href = startLink.href;
    }, 2000);
});