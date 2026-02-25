// Funciones simplificadas que retornan.
const greet = (name: string): string => `Hola ${name}`;

const message2: string = greet("Al-Juarismi");

console.log(message2);

// --------------------------------

interface User {
  uid: string;
  username: string;
}

// Funciones simplificada con intefaz.
const getUser = (): User => ({
  uid: "ABC-123",
  username: "math123",
});

const getUser2: () => User = () => ({
  uid: "ABC-123",
  username: "math123",
});

const user = getUser();
const user2 = getUser2();

console.log(user, user2);

// --------------------------------

// Simplificar uso de funciones de flecha

const myNumbers = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (number) {
//   console.log(number);
// });
// myNumbers.forEach((number) => {
//   console.log(number);
// });
myNumbers.forEach(console.log);
