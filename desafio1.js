const readline = require('readline-sync');

let n = readline.questionInt('Digite um número: ');
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine += ' ';
    } else {
      inputLine += symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}
