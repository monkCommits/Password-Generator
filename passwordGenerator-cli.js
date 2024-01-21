#!/usr/bin/env node

function generatePw(
  pwLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numChars = "0123456789";
  const symbolChars = "~!@#$%^&*()_+{}|:<>?`-=[]';,./";
  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowercaseChars : "";
  allowedChars += includeUpperCase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (pwLength <= 0) {
    return "(password length must be at least 1)";
  }
  if (allowedChars.length === 0) {
    return "(at least 1 set of characters needs to be selected)";
  }

  for (let i = 0; i < pwLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

// Extract command-line arguments
const args = process.argv.slice(2);

// Default values
let pwLength = 12; // default password length
let includeLowerCase = true;
let includeUpperCase = true;
let includeNumbers = true;
let includeSymbols = true;

// Parse command-line arguments
args.forEach((arg) => {
  switch (arg) {
    case "--no-lowercase":
      includeLowerCase = false;
      break;
    case "--no-uppercase":
      includeUpperCase = false;
      break;
    case "--no-numbers":
      includeNumbers = false;
      break;
    case "--no-symbols":
      includeSymbols = false;
      break;
    case "--length":
      const nextArgIndex = args.indexOf(arg) + 1;
      pwLength = parseInt(args[nextArgIndex], 10) || pwLength;
      break;
  }
});

// Generate the password
const generatedPassword = generatePw(
  pwLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);

// Print the generated password
console.log(`Generated Password: ${generatedPassword}`);
