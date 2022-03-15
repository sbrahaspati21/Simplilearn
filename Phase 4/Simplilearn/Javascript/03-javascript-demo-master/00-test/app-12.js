// / * Function overloading */;
function welcome(firstname, lastname, language) {
  if (language === 'en') {
    console.log('Welcome ' + firstname + ' ' + lastname);
  } else if (language === 'es') {
    console.log('Hola ' + firstname + ' ' + lastname);
  }
}

// In Javascript functions are objects

// welcome('john', 'doe', 'en');
// welcome('john', 'doe', 'en', 5);

function welcomeEnglish(firstname, lastname) {
  welcome(firstname, lastname, 'en');
}

function welcomeSpanish(firstname, lastname) {
  welcome(firstname, lastname, 'es');
}

welcomeEnglish('john', 'doe');
welcomeSpanish('john', 'doe');
