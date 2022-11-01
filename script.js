// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*,.<>/?;+-";
var alphabetArray = alphabet.split("");
var alphabetCapArray = alphabetCap.split("");
var numbersArray = numbers.split("");
var specialCharactersArray = specialCharacters.split("");
var confirmPassword = false;
var lowercaseComformation;
var uppercaseComformation;
var numbersConfirmation;
var specialCharactersConfirmation;
var passwordLength;
var finalPassword;

function passwordAlert() {
  passwordLength = parseInt(prompt("How long do you want your password?"));
  if (passwordLength >= 8 && passwordLength <= 128) {
    lowercaseComformation = confirm(
      "Do you want to include lowercase letters?"
    );
    uppercaseComformation = confirm(
      "Do you want to include uppercase letters?"
    );
    numbersConfirmation = confirm("Do you want to include numbers?");
    specialCharactersConfirmation = confirm(
      "Do you want to include special characters?"
    );
    console.log(lowercaseComformation);
  } else {
    alert(
      "The user's password must be at least 8 characters and no more than 128"
    );
  }
}

function generatePassword() {
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

  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(passwordCharacterContainer.length * Math.random());
    randomPassword += passwordCharacterContainer[index];
  }
  console.log(randomPassword);

  if (lowercaseComformation) {
    for (let i = 0; i < alphabetArray.length; i++) {
      if (randomPassword.indexOf(alphabetArray[i]) != -1) {
        confirmPassword = true;
        break;
      } else {
        confirmPassword = false;
      }
    }
  }

  if (uppercaseComformation && confirmPassword == true) {
    for (let i = 0; i < alphabetCapArray.length; i++) {
      if (randomPassword.indexOf(alphabetCapArray[i]) != -1) {
        confirmPassword = true;
        break;
      } else {
        confirmPassword = false;
      }
    }
  }

  if (numbersConfirmation && confirmPassword == true) {
    for (let i = 0; i < numbersArray.length; i++) {
      if (randomPassword.indexOf(numbersArray[i]) != -1) {
        confirmPassword = true;
        break;
      } else {
        confirmPassword = false;
      }
    }
  }

  if (specialCharactersConfirmation && confirmPassword == true) {
    for (let i = 0; i < specialCharactersArray.length; i++) {
      if (randomPassword.indexOf(specialCharactersArray[i]) != -1) {
        confirmPassword = true;
        break;
      } else {
        confirmPassword = false;
      }
    }
  }
  console.log(randomPassword);
  if (confirmPassword) {
    console.log(true);
    finalPassword = randomPassword;
  } else {
    generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  passwordAlert();
  generatePassword();
  var password = finalPassword;
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
