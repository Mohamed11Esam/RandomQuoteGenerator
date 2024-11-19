//store quotes and authors
var quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "“A room without books is like a body without a soul.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“A friend is someone who knows all about you and still loves you.”",
  "“Always forgive your enemies; nothing annoys them so much.”",
  "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
];
var authors = [
  "― Oscar Wilde",
  "― Albert Einstein",
  "― Marcus Tullius Cicero",
  "― Bernard M. Baruch",
  "― Mae West",
  "― Mahatma Gandhi",
  "― Mark Twain",
  "― Elbert Hubbard",
  "― Oscar Wilde",
  "― Mahatma Gandhi",
];

// non duplicate random numbers
var previousNumber = null;
function getRandomNumber() {
  var newNumber;
  do {
    newNumber = Math.floor(Math.random() * 10);
  } while (newNumber === previousNumber);
  previousNumber = newNumber;
  return newNumber;
}

//display quotes and authors
function displayQuote() {
  var randomNumber = getRandomNumber();
  var cartona = `
        <p>${quotes[randomNumber]}</p>
        <p>${authors[randomNumber]}</p>`;
  document.getElementById("quote").innerHTML = cartona;
  // console.log(randomNumber);
}
