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

    fetch("https://api.zenquotes.io/api/random")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then(data => {
            const quote = data[0];
            quoteText.textContent = `"${quote.q}"`;
            authorText.textContent = `— ${quote.a}`;
        })
        .catch(error => {
            errorText.textContent = "Error loading quote. Please try again.";
            console.error(error);
        })
        .finally(() => {
            loadingText.style.display = "none";
        });
}
