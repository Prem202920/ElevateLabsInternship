const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-theme");
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // Save preference in LocalStorage
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
