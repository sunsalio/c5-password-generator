// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = prompt("Enter the desired password length:");
  if (length < 12) {
    alert("Password length should be at least 12 characters.");
    return getPasswordOptions();
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm(" Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)) {
    alert("At least one character type should be included.");
    return getPasswordOptions();
  }
  // return user choice
  return {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumbers: includeNumbers,
    includeSpecial: includeSpecial,
  };
}
var passwordOptions = getPasswordOptions
console.log(passwordOptions);

// Function for getting a random element from an array
var allCharacters = [[specialCharacters],[numericCharacters],[lowerCasedCharacters],[upperCasedCharacters]]

function getRandom(allCharacters) {

  var randomIndex = Math.floor(Math.random() * allCharacters.length);
  return allCharacters[randomIndex];
}
// var randomElement = getRandom(allCharacters);
// console.log(randomElement)

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);