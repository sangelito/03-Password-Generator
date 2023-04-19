// Assignment code here
function CreatePassword (length = 8){
  let password = '';
  const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let passwordLength = length; 

  const Array = new Uint32Array(length);
  window.crypto.getRandomValues(Array);

  console.log(Array)

  for (i=0; i<length; i++){
    password += chars [Array[i]]
  }
}

CreatePassword()

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
