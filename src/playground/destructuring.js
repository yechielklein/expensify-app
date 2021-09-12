//
// object destructuring
//

// const person = {
// 	name: 'Yechiel',
// 	age: 14,
// 	location: {
// 		city: 'Montreal',
// 		temp: 92
// 	}
// };

// const { name: firstName = 'anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);;
// };

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// array destructuring
//

// const address = ['1972 ekers ave.', 'Montreal', 'Quebec', 'H3S 1C4'];
// const [, city, province] = address;
// console.log(`You are in ${city} ${province}.`);

const items = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = items;

console.log(`A medium ${itemName} costs ${mediumPrice}`);