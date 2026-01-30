// Select DOM elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const fetchBtn = document.getElementById("fetchQuoteBtn");
const loadingText = document.getElementById("loading");
const errorText = document.getElementById("error");

// Fetch quote on button click
fetchBtn.addEventListener("click", fetchQuote);

// Function to fetch data using Fetch API
function fetchQuote() {
    loadingText.style.display = "block";
    errorText.textContent = "";
    quoteText.textContent = "";
    authorText.textContent = "";

    // Fetch request to public API
    fetch("https://api.quotable.io/random")
        .then(response => {
            // Check if response is successful
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json(); // Convert to JSON
        })
        .then(data => {
            // Display fetched data
            quoteText.textContent = `"${data.content}"`;
            authorText.textContent = `— ${data.author}`;
        })
        .catch(error => {
            // Handle errors
            errorText.textContent = "Error loading quote. Please try again.";
            console.error(error);
        })
        .finally(() => {
            // Hide loading indicator
            loadingText.style.display = "none";
        });
}
