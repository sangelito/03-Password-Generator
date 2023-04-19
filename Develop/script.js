// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower; 
var confirmUpper; 
var confrimSpeacial; 

var lowerCase = ("abcdefghijklmnopqrstuvwxyz")

var blankUppper = []; 
var toUpper = function (x) {
  return x.toUpperCase(); 
}; 

upperCase = lowerCase.map(toUpper)

var numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
var speacial = ("!, @, $, $, %, ^, &, *, (, ), =, +, <, >, ?, ~,")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  paswrodLength = prompt("How many characters would you like in your password? Choose between 8 and 128"); 
  console.log("Password length" + passwordLength); 
}