document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate email
    var emailError = document.getElementById('emailError');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        return;
    } else {
        emailError.style.display = 'none';
    }

    // Validate password
    var passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordError.style.display = 'block';
        return;
    } else {
        passwordError.style.display = 'none';
    }

    // If all validation passes, submit the form
    window.location.href = 'catalog.html'
});
