// Button event listener

document.getElementById('generate').addEventListener('click', () => {

  // Prompts and confirms for the user to pick length and character types in password

  let requestedLength = prompt("How long would you like your password to be? (Between 8 and 128 characters)")
  let hasLowercase = confirm("Would you like your password to contain lowercase letters?")
  let hasUppercase = confirm("Would you like your password to contain uppercase letters?")
  let hasNumbers = confirm("Would you like your password to contain numbers?")
  let hasSymbols = confirm("Would you like your password to contain symbols?")

  // Variables for character types, password length, and final password

  let password = ""
  let lowercase = "abcdefghijklmnopqrstuvwxyz"
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numbers = "0123456789"
  let symbols = "!@#$%^&*"
  let charSet = ""

  // Logic

  if (hasLowercase) {
    charSet += lowercase
  }
  if (hasUppercase) {
    charSet += uppercase
  }
  if (hasNumbers) {
    charSet += numbers
  }
  if (hasSymbols) {
    charSet += symbols
  }

  // Generates random password using selected characters and length

  for (let i = 0; i < parseInt(requestedLength); i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)]
  }

  // Displays password on webpage

  document.getElementById('password').textContent = password

})