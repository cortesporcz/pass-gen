// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

function generatePassword() {
  const length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Password length must be between 8 and 128 characters.");
    return; // Exit the function if length is invalid
  }

  const includeUpperCase = confirm("Include uppercase letters?");
  const includeLowerCase = confirm("Include lowercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSymbols = confirm("Include symbols?");

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

  let availableChars = '';

  if (includeUpperCase) {
    availableChars += uppercaseChars;
  }
  if (includeLowerCase) {
    availableChars += lowercaseChars;
  }
  if (includeNumbers) {
    availableChars += numberChars;
  }
  if (includeSymbols) {
    availableChars += symbolChars;
  }

  if (availableChars === '') {
    alert("Please select at least one character type for the password.");
    return; // Exit the function if no character types are selected
  }

  let generatedPassword = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars.charAt(randomIndex);
  }

  return generatedPassword;
}

const password = generatePassword();
if (password) {
  console.log("Generated password:", password);
} else {
  console.log("Password generation canceled or criteria invalid.");
}

// Write password to the #password input
//
function writePassword() {
  var passwordText = document.querySelector("#password");
  const password = generatePassword();
  if (password) {
    console.log("Generated password:", password);
    var newPassword =generatePassword();
    passwordText.value = password;
    // Perform any actions with the generated password here
  } else {
    console.log("Password generation canceled or criteria invalid.");
  }
}
 
