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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
