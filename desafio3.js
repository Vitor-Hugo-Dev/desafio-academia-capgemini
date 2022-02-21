// const readline = require('readline-sync');

// const currentWord = readline.question('Digite uma palavra: ');

const anagramaPares = () => {
  let p = 'ifailuhkqq';
  const array = p.split('');
  let count = 0;

  for (let i = 0; i < p.length; i += 1) {
    
    for (let j = 0; j < p.length; j += 1) {
      if (i !== j) {
        const string = p.slice(i, j)
        array.push(string);
      }
    }
  }
  console.log(array);
}

anagramaPares();

