import { scientists, type Scientist } from "../data/scientist.data";
// import scientists, { type Scientist } from "../data/scientist.data";
// import { scientists as scientistsList } from "../data/scientist.data";
// import scientistsList from "../data/scientist.data";

const getScientistById = (id: number): Scientist | undefined => {
  const scientist = scientists.find((scientist) => {
    return scientist.id === id;
  });

  // if (!scientist) {
  //   throw new Error(`Scientist with id ${id} doesn't exist.`)
  // }

  return scientist;
};

console.log(getScientistById(1));
