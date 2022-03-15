/* arguments and spread*/

function welcome(firstname, lastname, language = 'en', ...other) {
  console.log('arguments count: ' + arguments.length);
  console.log('argument[0]: ' + arguments[0]);
  console.log('firstname: ' + firstname);
  console.log('lastname: ' + lastname);
  console.log('language: ' + language);
  console.log('--------------------------');
  console.log(other);
}

// welcome();
// welcome('john');
// welcome('john', 'doe');
// welcome('john', 'doe', 'es');
welcome('john', 'doe', 'es', 1, true, 'somevalue', 'x', 7);
