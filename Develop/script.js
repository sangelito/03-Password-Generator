// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower; 
var confirmUpper; 
var confirmSpecial; 

var lowerCase = ("abcdefghijklmnopqrstuvwxyz")

var blankUpper = []; 
var toUpper = function (x) {
  return x.toUpperCase(); 
}; 

//upperCase = lowerCase.map(toUpper);

var numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
var special = ("!, @, $, $, %, ^, &, *, (, ), =, +, <, >, ?, ~,")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt("How many characters would you like in your password? Choose between 8 and 128"); 
  console.log("Password length" + passwordLength); 

  if (!passwordLength){
    alert("Required value"); 
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  }
  else {
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpecial);
  }
}

