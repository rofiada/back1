// const validator = require ("validator");
// console.log(validator.isEmail("rofaida@gamil.com"))


// console.log(process.argv)
// console.log(process.argv[2])



// const commed = process.argv[2]
// if(commed === "add"){
//   console.log("you add an item")
// }else if(commed === "delete"){
//   console.log("you deleted an item")
// }else{
//   console.log("error")
// }
// console.log(yargs.argv)

// const yargs = require ("yargs")


// yargs.command =({
// command : "add",
// describe : "you add an item",

// builder: {
//   fname : {
//     describe : "this is the first name in add comman",
//     demandOption: true,
//     type: "string",
//   },
//   lname: {
//     describe : "this is the first name in add comman",
//     demandOption: true,
//     type: "string",
//   }
// },

// handler :()=> {
//   console.log("you add alrady an item")
// }
// })
// console.log(yargs.argv)


// const yargs = require("yargs");

// yargs.command({
//   command: "add",
//   describe: "Add an item",

//   builder: {
//     fname: {
//       describe: "First name for the item",
//       demandOption: true,
//       type: "string",
//     },
//     lname: {
//       describe: "Last name for the item",
//       demandOption: true,
//       type: "string",
//     },
//   },

//   handler: () => {
//     console.log("You added an item:");

//   },
// });


// // console.log(yargs.argv)

// yargs.command({
//   command: "delete",
//   describe: "you deleted an item",
//   handler: ()=> {
//     console.log("you have already deleted an item")
//   }
// })
// console.log(yargs.argv);

// /////////////////////////////////////////////////////////
// const fs = require('fs'); // Require the fs module
// const person1 = {
//   fname : "rofaida",
//   lname : "essa"
// }
// const person1Json = JSON.stringify(person1)
// console.log(person1Json)
// ////////////////////////////////////////////

// const person1OBJ = JSON.parse(person1Json)
// console.log(person1OBJ)

// fs.writeFileSync("data.json", person1Json , person1OBJ)


///=========================================lec3===============================/////////////////////////



// const data50 = require('./data50')


// yargs.command =({
// command : "add",
// describe : "you add an item",

// builder: {
//   fname : {
//     describe : "this is the first name in add comman",
//     demandOption: true,
//     type: "string",
//   },
//   lname: {
//     describe : "this is the first name in add comman",
//     demandOption: true,
//     type: "string",
//   }
// },

// handler :()=> {
//   console.log("you add alrady an item")
// }
// })
// console.log(yargs.argv)


// const yargs = require("yargs");

// yargs.command({
//   command: "add",
//   describe: "Add an item",

//   builder: {
//     fname: {
//       describe: "First name for the item",
//       demandOption: true,
//       type: "string",
//     },
//     lname: {
//       describe: "Last name for the item",
//       demandOption: true,
//       type: "string",
//     },
//   },

//   handler: () => {
//     console.log("You added an item:");

//   },
// });


// console.log(yargs.argv)

















































//=======================================start task 1==========================//////////////////////////
const fs = require('fs');

//createdata
const person = {
  fname: "rofaida",
  lname: "essa",
  age: 20,
  city: "alex"
};

//to change obj to json
const personJson = JSON.stringify(person);

// Log  to the console
console.log(personJson);

//write data in file
fs.writeFileSync('person.json', personJson);

//read file (json)
const jsonData = fs.readFileSync('person.json', 'utf8');

// Parse the JSON data into an object
console.log(person);

//convert to object
const personOBJ = JSON.parse(personJson);
console.log(personOBJ)


//update data

person.fname = "amer";
person.lname = "essa";
person.age = 40;
person.city = "cairo";

// Convert the updated object  to JSON
const updatedPersonJson = JSON.stringify(person);

// Write the updated JSON data to the file
fs.writeFileSync('person.json', updatedPersonJson);

console.log(person);
//=======================================end task 1==========================//////////////////////////
////=======================================start task 2==========================//////////////////////////
//array to store person data
let persons = [];

// Function to add persons with ids from 1 to 7
function addPersons() {
    for (let i = 1; i <= 7; i++) {
        persons.push({
            id: i,
            fname: `First${i}`,
            lname: `Last${i}`,
            age: 25 + i,
            city: `City${i}`
        });
    }
}

// Function to delete persons with ids 4 and 6
function deletePersons() {
    persons = persons.filter(person => person.id !== 4 && person.id !== 6);
}

// Function to list fname, lname, and city for all persons
function listPersons() {
    persons.forEach(person => {
        console.log(`First Name: ${person.fname}, Last Name: ${person.lname}, City: ${person.city}`);
    });
}

// Function to read all data for the 5th person
function readFifthPerson() {
    const fifthPerson = persons.find(person => person.id === 5);
    if (fifthPerson) {
        console.log('All data for the 5th person:', fifthPerson);
    } else {
        console.log('Person with ID 5 not found.');
    }
}

// Perform the tasks
addPersons();
console.log('Persons after adding:');
listPersons();

deletePersons();
console.log('\nPersons after deleting:');
listPersons();

console.log('\nList of fname, lname, and city for all persons:');
listPersons();

console.log('\nReading data for the 5th person:');
readFifthPerson();
//=======================================end task2=========================///////////////////