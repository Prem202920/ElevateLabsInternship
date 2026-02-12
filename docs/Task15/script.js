const app = document.getElementById("app");

// ---------- Views ----------
const routes = {
    "/": `
        <h2>Home</h2>
        <p>Welcome to the Mini Single Page Application built using Vanilla JavaScript.</p>
    `,
    "/about": `
        <h2>About</h2>
        <p>This SPA demonstrates client-side routing using the History API.</p>
    `,
    "/contact": `
        <h2>Contact</h2>
        <p>Email: prempatil9650@gmail.com</p>
    `
};

// ---------- Normalize Path ----------
function getPath() {
    let path = location.pathname;

    // Remove folder path like /Task15/
    if (path.includes("index.html")) return "/";

    // If opened inside subfolder (GitHub Pages / Live Server)
    if (path.startsWith("/Task15")) {
        path = path.replace("/Task15", "");
        if (path === "") path = "/";
    }

    return path;
}

// ---------- Render ----------
function render(path) {
    app.innerHTML = `<p class="loading">Loading...</p>`;

    setTimeout(() => {
        app.innerHTML = routes[path] || "<h2>404 - Page Not Found</h2>";
    }, 200);
}

// ---------- Navigate ----------
function navigateTo(url) {
    history.pushState(null, null, url);
    render(url);
}

// ---------- Click Handling ----------
document.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.getAttribute("href"));
    }
});

// ---------- Back/Forward ----------
window.addEventListener("popstate", () => {
    render(getPath());
});

// ---------- Initial Load ----------
render(getPath());
