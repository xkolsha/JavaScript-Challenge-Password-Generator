// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Define character sets
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()-=_+[]{}|;:,.<>?";

  var length = parseInt(
    prompt("Choose a password length between 8 and 128 characters:")
  );
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid input. Please choose a length between 8 and 128.");
    return "";
  }

  var charset = "";
  var password = "";
  if (confirm("Include lowercase characters?")) {
    charset += lowercase;
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
  }
  if (confirm("Include uppercase characters?")) {
    charset += uppercase;
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
  }
  if (confirm("Include numeric characters?")) {
    charset += numbers;
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  if (confirm("Include special characters?")) {
    charset += symbols;
    password += symbols[Math.floor(Math.random() * symbols.length)];
  }

  if (charset === "") {
    alert("You need to select at least one type of characters to include.");
    return "";
  }

  while (password.length < length) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  return password;
}
