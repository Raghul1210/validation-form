document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const notARobot = document.getElementById('notARobot').checked;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault(); // Prevent form submission
    }

    if (!notARobot) {
        alert('Please confirm that you are not a robot.');
        event.preventDefault(); // Prevent form submission
    }
});
