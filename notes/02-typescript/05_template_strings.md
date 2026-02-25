# Truco con comillas y apóstrofo

A la hora de incluir un apóstrofo en un string con comillas simples o comillas dobles en un string con comillas doble, producirá errores en la sintaxis del código. Para resolverlo se puede declarar el valor del string con comillas que no sean las que indican en el valor ó, anteponer una barra invertida (`\`):

```tsx
const apostrophe = "This is a apostrophe: '";
const quotation =
  '"El pasado nos da las claves para entender el hoy" - Pilar Lozano';
```

# Template Strings

Los Template Strings son una característica de ES6, que permite:

1. Colocar expresiones dentro de corchetes con una signo de dólar antepuesto. Por ejemplo: `"Variable 1: ${variable1}"`.
2. Crear strings de varias líneas.

Por ejemplo:

```tsx
const firstName = "William";
const lastName = "Shakespeare";

const fullName = `
El nombre del autor de Romeo y Julieta es:
  ${firstName} ${lastName}
`;
/*
El nombre del autor de Romeo y Julieta es:
  William Shakespeare
*/
```
