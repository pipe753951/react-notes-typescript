const firstName: string = "Antoine";
const lastName = "de Saint-Exupery";

let diceNumber = 5;
// diceNumber = '3'; // Error de tipos de datos
diceNumber = 3;

// console.log(firstName, lastName);

const containsLetterN = lastName.includes("n");
console.log({ containsLetterN, diceNumber, firstName, lastName });
