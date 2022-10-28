// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*";

function generatePassword() {
  var passwordLength = parseInt(prompt("How long do you want your password?"));
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowercaseComformation = confirm(
      "Do you want to include lowercase letters?"
    );
    var uppercaseComformation = confirm(
      "Do you want to include uppercase letters?"
    );
    var numbersConfirmation = confirm("Do you want to include numbers?");
    var specialCharactersConfirmation = confirm(
      "Do you want to include special characters?"
    );
    console.log(lowercaseComformation);
  } else {
    alert(
      "The user's password must be at least 8 characters and no more than 128"
    );
    return;
  }
  var passwordCharacterContainer = [];
  if (lowercaseComformation) {
    passwordCharacterContainer = passwordCharacterContainer.concat(
      alphabet.split("")
    );
  }
  if (uppercaseComformation) {
    passwordCharacterContainer = passwordCharacterContainer.concat(
      alphabetCap.split("")
    );
  }
  if (numbersConfirmation) {
    passwordCharacterContainer = passwordCharacterContainer.concat(
      numbers.split("")
    );
  }
  if (specialCharactersConfirmation) {
    passwordCharacterContainer = passwordCharacterContainer.concat(
      specialCharacters.split("")
    );
  }

  var randomPassword = "";

  for (i = 0; i <= passwordLength; i++) {
    var index = Math.floor(passwordCharacterContainer.length * Math.random());
    randomPassword += passwordCharacterContainer[index];
  }
  console.log(randomPassword);
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
