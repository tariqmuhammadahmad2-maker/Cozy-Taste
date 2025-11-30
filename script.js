// Toggle Dark/Light Mode
function toggleMode() {
  document.body.classList.toggle('dark-mode');
  showAlert("Theme switched!");
}

// Show Reservation Form
function openReservation() {
  document.getElementById('reservationForm').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

// Hide Reservation Form
function closeReservation() {
  document.getElementById('reservationForm').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

// Handle form submit
function handleSubmit(event) {
  event.preventDefault();
  showAlert("Reservation submitted successfully!");
  closeReservation();
}

// Custom Alert Function
function showAlert(message) {
  const alertBox = document.getElementById('customAlert');
  alertBox.innerText = message;
  alertBox.style.display = 'block';

  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 3000);
}

// Optional: Replace prompt if needed
function customPrompt(question, fallback = '') {
  const result = prompt(question);
  return result !== null ? result : fallback;
}
