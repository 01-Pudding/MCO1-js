let name = "Joey";
let age = 25;
let city = "Calbayog";
let color = "Black";
let number = 1;
let food = "Pizza";
let day = "Friday";
let month = "August";
let country = "Japan";
let score = 89;

const school = "School";
const subject = "English";
const year = 2026;
const pass = 75;
const numbers = [1, 2, 3];
const fruits = ["Apple", "Kiwi", "Banana"];
const person = {name: "Joey", age: 20 };
const extraNumbers = [28, 27];
const address = {city: "Calbayog" };
const message = "Hello";

const hello = () => "Hello";
const add = (a, b) => a + b;
const double = x => x * 2;
const square = x => x * x;
const greet = name => 'Hi, ${name}';

console.log('Name: ${name}');
console.log('Age: ${age}');
console.log('City: ${city}');
console.log('Color: ${color}');
console.log('Number: ${number}');
console.log('Food: ${food}');
console.log('Day: ${day}');
console.log('Month: ${month}');
console.log('Country: ${country}');
console.log('Score: ${score}');

const [a, b] = numbers;
const [firstFruit, secondFruit] = fruits;
const [four, five] = extraNumbers;

const { name: personName } = person;
const { age: personAge } = person;
const { city: personCity } = address;

const allNumbers = [...numbers, ...extraNumbers];
const moreFruits = [...fruits, "Grapes"];

const newPerson = { ...person, city: "Gandara" };
const newAddress = { ...address, country: "Japan" };

const doubled = numbers.map(x => x * 2);
const upperFruits = fruits.map(x => x.toUpperCase());

const evenNumbers = numbers.filter(x => x % 2 === 0);
const bigNumbers = numbers.filter(x => x > 1);

const cityName = {
    city: person?.city
};

const phoneNumber = {
    phone: person?.phone
};

console.log(hello());
console.log(add(2, 3));
console.log(double(4));
console.log(square(3));
console.log(greet(name));
console.log('Doubled: ${doubled}');
console.log('Even numbers: ${evenNumbers}');