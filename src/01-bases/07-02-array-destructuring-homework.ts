const useState = (value: string) => {
  const setState = (newValue: string) => {
    console.log(newValue);
  };

  return [value, setState] as const;
};

const [name, setName] = useState("Moisés");
console.log(name);
setName("Aarón");
