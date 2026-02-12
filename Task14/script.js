// ---------- REGISTER ----------
function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const message = document.getElementById("message");

    if (!email || !password) {
        message.textContent = "Please fill all fields.";
        return;
    }

    // Store credentials in LocalStorage (demo only)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    message.textContent = "Registration successful! You can now login.";
}

// ---------- LOGIN ----------
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const message = document.getElementById("message");

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true"); // session flag
        window.location.href = "dashboard.html";
    } else {
        message.textContent = "Invalid login credentials.";
    }
}

// ---------- PROTECT DASHBOARD ----------
if (window.location.pathname.includes("dashboard.html")) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        window.location.href = "index.html";
    }
}

// ---------- LOGOUT ----------
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
