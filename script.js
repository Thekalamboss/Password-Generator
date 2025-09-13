let passwordOutput = document.querySelector("#passwordOutput");
let lengthElement = document.querySelector("#length");
let upperCase = document.querySelector("#uppercase");
let lowerCase = document.querySelector("#lowercase");
let numbersElement = document.querySelector("#numbers");
let symbolsElement = document.querySelector("#symbols");
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>/?`~";

generateBtn.addEventListener("click", () => {
  let output = generatePassword();
  passwordOutput.value = output;
});

function generatePassword() {
  let genPassword = "";
  let allChar = "";

  allChar += upperCase.checked ? upperCaseChar : "";
  allChar += lowerCase.checked ? lowerCaseChar : "";
  allChar += numbersElement.checked ? numbers : "";
  allChar += symbolsElement.checked ? symbols : "";

  if (allChar.length === 0) {
    return "Select options!";
  }

  for (let i = 0; i < lengthElement.value; i++) {
    genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }

  return genPassword;
}

copyBtn.addEventListener("click", () => {
  if (passwordOutput != "" || passwordOutput.value.length >= 0)
    navigator.clipboard.writeText(passwordOutput.value);
});
