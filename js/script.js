// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function changeQuote(){
  setInterval(printQuote, 10000); // refresh the page every 10s.
} 


function getRandomQuote(randomNumber){

  return quotes[randomNumber];
}


function printQuote(){
  var randomNumber = generateRandomNumber(); 
  var quote = getRandomQuote(randomNumber); // calls getRandomQuote and assign the return value to quote variable.
  var color = generateRandomColor(); // hexdecimal color 
  var html = '';

  html += '<p class="quote">' + quote.quote + '</p>';
  html += '<p class="source">' + quote.source +  '</p>';
  html += '<p>' + 'Tags: ' + quote.tags.join(', ') + '</p>';

  document.body.style.backgroundColor = color;
  document.getElementById('quote-box').innerHTML = html;
  console.log(randomNumber);
}


// function below is responsible for generating random numbers and pass it
// to printQuote function.

function generateRandomNumber(){

  return Math.floor((Math.random() * quotes.length)); // random number from 0 to 6

}


// function below generates a random color
function generateRandomColor(){

  var letters = '0123456789ABCDEF';
  var colorCode = '#';

  for (var i = 0; i < 6; i += 1){

    colorCode += letters[Math.floor(Math.random() * 16)]
  }

  return colorCode;

}

changeQuote();


