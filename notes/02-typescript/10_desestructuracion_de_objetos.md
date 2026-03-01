# Desestructuración de objetos

Para desestructurar arreglos, en lugar de utilizar llaves, se utiliza corchetes. **Hay que tener en cuenta que la desestructuración de arreglos depende del orden de los arreglos**. Por ejemplo:

```ts
const scientistNames = ["Einstein", "Hooke", "Walter"];
const [s1, s2, s3] = scientistNames;

console.log({ s1, s2, s3 });
// Object { s1: "Einstein", s2: "Hooke", s3: "Walter" }
```

## Omitir posiciones

Para omitir posiciones en la desestructuración de objetos, únicamente indica una coma. Por ejemplo:

```ts
const scientistNames = ["Einstein", "Hooke", "Walter", "Newton"];
const [, , walter] = scientistNames;

console.log({ walter });
// Object { walter: "Walter" }
```

## Sugerencia: `as const`

Es un parámetro usado en el valor de retorno tipo arreglo que indica que el arreglo tendrá siempre la misma apariencia que se indica. Es propio de TypeScript y ayuda a mejorar el tipado, ya que si se hace desestructuración a un valor de retorno que devuelve una misma estructura pero que no utiliza `as const`, el lenguaje mostrará errores de tipado. Por ejemplo:

```ts
const returnArray = () => {
  return ["ABC", 123];
};

const [letters, numbers] = returnArray();
console.log(letters + 100); // Error de tipado.
console.log(numbers + 100); // Error de tipado.
```

```ts
const returnArray = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnArray();
console.log(letters + 100);
console.log(numbers + 100);
```
