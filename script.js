// Assignment code here


  //Prompt the user for password criteria
  //Prompt password length 8 < 128
  //&Prompt with all other characters lowercase, uppercase, numbers, special characters
  //Validate the input. 
  //Generated password on the page based on criteria
  //Display password

 // Prompt user for password criteria
function generatePassword() {
  alert("Please enter your password criteria:");

  let length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length. Please enter a length between 8 and 128:"));
  }

  const includeUpperCase = confirm("Include uppercase letters?");
  const includeLowerCase = confirm("Include lowercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecialCharacters = confirm("Include special characters?");

  return {
    length: length,
    includeUpperCase: includeUpperCase,
    includeLowerCase: includeLowerCase,
    includeNumbers: includeNumbers,
    includeSymbols: includeSpecialCharacters
  };
}

const passwordCriteria = generatePassword();
console.log(passwordCriteria);

console.log(generatePassword)

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  if (validatePasswordCriteria(passwordCriteria)) {
    let password = generatePassword(passwordCriteria);
  let passwordText = document.querySelector("#password");
  if (passwordText) {
    passwordText.value = password; 
  } else {
    console.error("Password text element not found.");
  }
} else {
  console.error("Invalid criteria. Please try again.");

 function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
 
 } 
}

//password += lowerCase[Math.floor(Math.random( ) *upperCase.length)]:

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



