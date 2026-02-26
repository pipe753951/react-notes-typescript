const person = {
  // Creador de la tabla periódica ampliamente conocida.
  name: "Dmitri Mendeléyev",
  age: 35, // Aprox. cuando la creó
  key: "Dmitri",
};

// const name = person.name;
// const age = person.age;
// const key = person.key;

const { age, key, name: dimitriName } = person;

console.log({ dimitriName, age, key });

// --------------------------------

interface Scientist {
  name: string;
  age: number;
  key: string;
  area?: string;
}

// const useContext = (props: Scientist) => {
const useContext = ({ name, key, age, area }: Scientist) => {
  // const { name, age, key } = props;

  return {
    keyName: key,
    user: {
      name,
      age,
    },
    area,
  };
};

const {
  area,
  keyName,
  user: { name: name2 },
} = useContext(person);

console.log({ area, keyName, name2 });
