// Get the h2 element
const topsHeading = document.getElementById('tops-heading');

// Add a click event listener
topsHeading.addEventListener('click', function() {
    // Toggle the color on each click
    topsHeading.style.color = topsHeading.style.color === 'red' ? '#ff65d1' : 'red';
});
