let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteDiv = document.querySelector(".quote-display");
let quoteId = document.querySelector(".quote-id");
let autoStatus = document.querySelector(".auto-status");

let intervalId;

// generateBtn.addEventListener("click", generateQuote);//when doing many things
generateBtn.onclick = generateQuote;
autoBtn.onclick = startAutoPlay;
stopBtn.onclick = stopAutoPlay;

async function getQuotes() {
  const response = await fetch("./quotes.json");
  const data = await response.json();
  return data;
}

async function generateQuote() {
  const quotes = await getQuotes();//too simple, never do this in prod
  // asking all quotes OMG 🤯
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  quoteDiv.innerHTML = quote.text;
  quoteId.innerHTML = quote.id;
}
function startAutoPlay () {
  intervalId = setInterval(generateQuote, 2000);//make it longer
  autoStatus.innerHTML = "Auto: ON"
}

function stopAutoPlay () {
  clearInterval(intervalId);
  autoStatus.innerHTML = ""
}

//? you can add more keys in the api, as author, category etc