// function factories
function makeGreeting(language) {
  return function (firstname, lastname) {
    if (language === 'en') {
      console.log('Welcome ' + firstname + ' ' + lastname);
    } else if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  };
}

var greetEnglish = makeGreeting('en');
greetEnglish('John', 'Doe');
// var greetSpanish = makeGreeting('es');
// greetSpanish('Tony', 'Wells');

// makeGreeting('es')('Jane', 'Doe');
