function genratePw(
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

  if (pwLength < 0) {
    return `(password length must be atleast 1)`;
  }
  if (allowedChars.length === 0) {
    return `(atleast 1 set of characters need to be selected)`;
  }

  for (let i = 0; i < pwLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const pwLength = 0;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = false;

const pw = genratePw(
  pwLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated Password : ${pw}`);
