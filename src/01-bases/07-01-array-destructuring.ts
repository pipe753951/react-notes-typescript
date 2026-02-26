const scientistNames = ["Einstein", "Hooke", "Walter"];

// const [s1, s2, s3] = scientistNames;
// const [, s2] = scientistNames;
const [, , walter] = scientistNames;

// console.log({ s1, s2, s3 });
// console.log({ s2 });
console.log({ walter });

// --------------------------------

const returnArray = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnArray();
console.log(letters + 100);
console.log(numbers + 100);
