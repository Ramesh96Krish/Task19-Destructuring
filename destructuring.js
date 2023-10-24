// Basic array destructuring
const [first, second, third] = [1, 2, 3];
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3

// Skipping elements in the array
const [a, , c] = [1, 2, 3];
console.log(a); // 1
console.log(c); // 3

// Destructuring with the rest operator (to capture the remaining elements)
const [x, ...rest] = [1, 2, 3, 4, 5];
console.log(x);    // 1
console.log(rest); // [2, 3, 4, 5]

// Basic object destructuring
const person = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(firstName); // 'John'
console.log(lastName);  // 'Doe'

// Renaming variables during destructuring
const { firstName: fName, lastName: lName } = person;
console.log(fName); // 'John'
console.log(lName); // 'Doe'

// Default values for missing properties
const { age = 30 } = person; // If age is not in person, it defaults to 30
console.log(age); // 30

const userPersonal = {
    name: "John",
    dob: "01/01/2010",
    address: "Chennai, India",
  };
  
  const userAcademic = {
    regNo: "ABC001",
    grade: 5,
    section: "A",
  };
  
  const userDetails = { ...userPersonal, ...userAcademic };
  console.log(userDetails); // concating the two objects

  // Destructuring function parameters
function printPerson({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`);
  }
  
  const people = { firstName: 'Alice', lastName: 'Johnson' };
  printPerson(people); // 'Alice Johnson'
  
  
