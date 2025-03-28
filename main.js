// Add this to your JavaScript file
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('Enter key pressed');
  } else if (event.key === 'Escape') {
    console.log('Escape key pressed');
  }
  // Add more cases as needed
});// Add this to your JavaScript file
document.addEventListener('keydown', function(event) {
  const keyDisplay = document.createElement('div');
  keyDisplay.textContent = `Key ${event.key} pressed`;
  document.body.appendChild(keyDisplay);
});
