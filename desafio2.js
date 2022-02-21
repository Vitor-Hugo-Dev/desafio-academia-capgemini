const readline = require('readline-sync');
const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+])[0-9a-zA-Z!@#$%^&*()-+]{6,}$/;

const strongPassword = () => {
  let password = readline.question('Digite uma senha:');
  if (regex.test(password)) {
    console.log('Senha forte!');
  } 
  if (password.length < 6) {
    console.log(`Sua senha deve ter no mínimo 6 caracteres! agora vc tem: ${password.length}`);
  }
  if (!regex.test(password)) {
    console.log('Sua senha deve conter pelo menos um número, uma letra maiúscula, uma letra minúscula e um símbolo!');
  }
}

strongPassword();
