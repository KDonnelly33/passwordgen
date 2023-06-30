// Assignment Code
var generateBtn = document.querySelector("#generate");
// makes a function generate password
function generatePassword() {
  // asks for password length; checks to see if its between 8 - 128
  var passlength = prompt("Enter the length of the password (between 8 and 128):");
  if (isNaN(passlength) || passlength < 8 || passlength > 128) {
    var passlength = prompt("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }
  var passcap = confirm("Do you want to use CAPITAL letters?")
}
 

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// use prompt to ask and set password length as a new variable between 8-128

// use prompt to ask for uppercase and set variable

// use prompt to ask for lowercase and set variable

// use prompt to ask to include numbers and set variable

// use prompt to ask to include special charactors

// generate password

// display password