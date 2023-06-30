// Assignment Code
var generateBtn = document.querySelector("#generate");
// makes a function generate password
function generatePassword() {
  // asks for password length; checks to see if its between 8 - 128
  var passlength = prompt("Enter the length of the password (between 8 and 128):");
  if (isNaN(passlength) || passlength < 8 || passlength > 128) {
    var passlength = alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }
  // ask and sets var for use of capital letters  
  var passcap = confirm("Do you want to use CAPITAL letters?");
  // ask and sets var for use of lower case letters 
  var passlow = confirm("Do you want to use lowercase letters?");
  // ask and sets var for use of special characters
  var passspec = confirm("Would you like to use special characters?");
  // ask and sets var for use of numbers
  var passnumber = confirm("Would you like to include numbers?")
  // next 4 lines defines strings for later use 
  if (!passcap && !passlow && !passspec) {
    alert("Please select at least one option");
  }
  var lowcaseletters = "abcdefghijklmnopqrstuvwxyz";
  var upcaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789"
  var specchar = "!@#$%^&*()_-+=;:?/><{}[]"
  // sets characters as var and adds in applicable strings
  var characters = "";
  if (passcap) {
    characters += upcaseletters;
  }
  if (passlow) {
    characters += lowcaseletters;
  }
  if (passspec) {
    characters += specchar;
  }
  if (passnumber) {
    characters += numbers;
  }
  // sets var for password
  var password = "";
  // creates for loop to generate password
  for (var i = 0; i < passlength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password
}


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

