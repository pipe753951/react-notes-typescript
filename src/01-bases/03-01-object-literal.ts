const galilei = {
  firstName: "Galileo",
  lastName: "Galilei",

  // Edad cuando inventó su primer telescopio (1564-1609)
  age: 45,

  address: {
    city: "Padua",
    nation: "Venice",
  },
};

// Vincula la variable a la referencia.
// const newton = galilei;

// Clona sólo las "propiedades superficiales" que no sean objetos.
// const newton = { ...galilei };

// Clona la variable de manera estructurada
const newton = structuredClone(galilei);

newton.firstName = "Isaac";
newton.lastName = "Newton";
newton.age = 44;
newton.address.city = "Cambridge";
newton.address.nation = "United Kingdom";

// person = {
//   firstName: "Isaac",
//   lastName: "Newton",
//   // Edad cuando publicó los Principia Mathematica.
//   age: 44,
// };

console.log(galilei, newton);
