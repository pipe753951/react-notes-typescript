interface Person {
  firstName: string;
  lastName: string;
  age: number;

  // address?: {
  //   city: string;
  //   nation: string;
  // };
  address?: Address;
}

interface Address {
  city: string;
  nation: string;
}

const galilei: Person = {
  firstName: "Galileo",
  lastName: "Galilei",
  age: 45,

  address: {
    city: "Padua",
    nation: "Venice",
  },
};

console.log(galilei);
