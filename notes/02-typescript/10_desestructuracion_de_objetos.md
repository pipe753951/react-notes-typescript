# Desestructuración de objetos

Para desestructurar arreglos, en lugar de utilizar llaves, se utiliza corchetes. **Hay que tener en cuenta que la desestructuración de arreglos depende del orden de los arreglos**. Por ejemplo:

```tsx
const scientistNames = ["Einstein", "Hooke", "Walter"];
const [s1, s2, s3] = scientistNames;

console.log({ s1, s2, s3 });
// Object { s1: "Einstein", s2: "Hooke", s3: "Walter" }
```

## Omitir posiciones

Para omitir posiciones en la desestructuración de objetos, únicamente indica una coma. Por ejemplo:

```tsx
const scientistNames = ["Einstein", "Hooke", "Walter", "Newton"];
const [, , walter] = scientistNames;

console.log({ walter });
// Object { walter: "Walter" }
```
