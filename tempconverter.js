//My solution for the temperature converter
var initialPrompt = prompt('Would you like to convert from Celcius or Fahrenheit first?', 'please type either Celcius or Fahrenheit');
var input = parseInt(prompt('Please enter a number.'));
var validInput = initialPrompt.toLowerCase();

if (validInput === 'celcius') {
  var newNum = Math.ceil(input * 1.8 + 32);
  alert('Your number in Celcius is ' + newNum + ' degrees');
} else if (validInput === 'fahrenheit') {
  var newNum = Math.ceil((input - 32) / 1.8);
  alert('Your number in Fahrenheit is ' + newNum + ' degrees');
} else if (validInput != ('fahrenheit' || 'celcius')){
  alert('You did not enter a temperature type!');
}
