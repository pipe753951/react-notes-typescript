function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => {
  return `Hola ${name}`;
};

// greet = function () {
//   return "Hola Ana";
// };

const message: string = greet("A. Baldor");
const message2: string = greet2("Al-Juarismi");

console.log(message, message2);

// --------------------------------

function getUser() {
  return {
    uid: "ABC-123",
    username: "math123",
  };
}

const getUser2 = () => {
  return {
    uid: "ABC-123",
    username: "math123",
  };
};

const user = getUser();
const user2 = getUser2();

console.log(user, user2);
