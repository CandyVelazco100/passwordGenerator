// Character sets
const lowercaseChars = "abcdefghijklmnoprstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const numberChars = "1234567890";
const symbolChars = '!-$^+?@#&*';
const spaceChar = " ";

function getRandomChar(chars) {
  return chars[Math.floor(Math.random() * chars.length)];
}

function generatePassword() {
  const passwordInput = document.getElementById('password');
  const checkboxes = [
    { id: 'lowercase', chars: lowercaseChars },
    { id: 'uppercase', chars: uppercaseChars },
    { id: 'numbers', chars: numberChars },
    { id: 'symbols', chars: symbolChars },
    { id: 'spaces', chars: spaceChar },
  ];
  const excludeDuplicateCheckbox = document.getElementById('exc-duplicate');

  let characters = '';
  checkboxes.forEach((checkbox) => {
    if (document.getElementById(checkbox.id).checked) {
      characters += checkbox.chars;
    }
  });

  if (characters === '') {
    passwordInput.value = '';
    return;
  }

  let password = '';
  const length = 12;

  while (password.length < length) {
    let char = getRandomChar(characters);
    if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
    password += char;
  }
  passwordInput.value = password;
}


function copyPassword() {
  const passwordInput = document.getElementById('password');
  const copyButton = document.getElementById('copy');

  passwordInput.disabled = false;
  passwordInput.select();
  document.execCommand('copy');
  passwordInput.disabled = true;

  copyButton.textContent = 'Copied';
  setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 2000);
}