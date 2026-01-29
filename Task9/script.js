// Select form and inputs
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Regex for email validation
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector("small");
    error.textContent = message;
    error.style.visibility = "visible";
    input.classList.add("error-border");
    input.classList.remove("success-border");
}

// Show success
function showSuccess(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector("small");
    error.style.visibility = "hidden";
    input.classList.remove("error-border");
    input.classList.add("success-border");
}

// Validate name
function checkName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        return false;
    } else {
        showSuccess(nameInput);
        return true;
    }
}

// Validate email
function checkEmail() {
    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, "Enter a valid email");
        return false;
    } else {
        showSuccess(emailInput);
        return true;
    }
}

// Validate password
function checkPassword() {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        return false;
    } else {
        showSuccess(passwordInput);
        return true;
    }
}

// Validate confirm password
function checkConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value === "") {
        showError(confirmPasswordInput, "Passwords do not match");
        return false;
    } else {
        showSuccess(confirmPasswordInput);
        return true;
    }
}

// Real-time validation
nameInput.addEventListener("keyup", checkName);
emailInput.addEventListener("keyup", checkEmail);
passwordInput.addEventListener("keyup", checkPassword);
confirmPasswordInput.addEventListener("keyup", checkConfirmPassword);

// Form submit
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const isNameValid = checkName();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isConfirmValid = checkConfirmPassword();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
        alert("Registration Successful!");
        form.reset();

        // Remove success borders after reset
        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("success-border");
        });
    }
});
