const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => displayQuote(data));
};
loadQuote();

const displayQuote = (quotes) => {
  const quoteElement = document.getElementById("quote");
  quoteElement.classList.add("quote");
  quoteElement.innerText = quotes.quote;
};
