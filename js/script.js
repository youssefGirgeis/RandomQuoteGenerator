// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [

  {
    quote: '',
    source: '',
  }
];

function getRandomQuote(){

  return quote;
}


function printQuote(){

  var quote = getRandomQuote();
}
