document.getElementById('generate').addEventListener('click', () => {

  let requestedLength = prompt("How long would you like your password to be? (Between 8 and 128 characters)")
  let hasLowercase = confirm("Would you like your password to contain lowercase letters?")
  let hasUppercase = confirm("Would you like your password to contain uppercase letters?")
  let hasNumbers = confirm("Would you like your password to contain numbers?")
  let hasSymbols = confirm("Would you like your password to contain symbols?")

  let password = ""
  let lowercase = "abcdefghijklmnopqrstuvwxyz"
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numbers = "0123456789"
  let symbols = "!@#$%^&*"
  let charSet = ""

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

  for (let i = 0; i < parseInt(requestedLength); i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)]
  }
  console.log(password)


})
// Put all letters we want in one bucket
// Randomly pick a type of letter
// Closing my eyes and grabbing a letter
// Put it in the generated password