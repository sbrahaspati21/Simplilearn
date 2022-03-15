var person = new Object();
person['firstname'] = 'John';
person['lastname'] = 'Doe';
console.log(person);

var firstNameProperty = 'firstname';
console.log(person[firstNameProperty]);
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = 'main str';
person.address.city = 'NY';
person.address.state = 'NY';
console.log(person['address']['state']);

// Object literals

var person1 = {};
console.log(person1);

var person2 = { firstname: 'john', lastname: 'doe' };
console.log(person2);

var jane = {
  firstname: 'jane',
  lastname: 'doe',
  address: {
    street: 'xyz st',
    city: 'NY',
    state: 'NY',
  },
};

console.log(jane);

function welcome(person) {
  console.log('Welcome ' + person.firstname);
}

welcome(person);
welcome(jane);

welcome({
  firstname: 'Mary',
  lastname: 'Osborne',
});

var mary = {
  firstname: 'Mary',
  lastname: 'Osborne',
};

console.log(mary);
console.log(JSON.stringify(mary));

var jsonstring = '{"firstname":"Mary","lastname":"Osborne"}';
var jsonobject = JSON.parse(jsonstring);
console.log(jsonobject);
