# Objetos literales

Los objetos literales son formas rápidas de declarar objetos en JavaScript. Están entre llaves, y cada propiedad se declara con el nombre, dos puntos, y el valor. Por ejemplo:

```tsx
const galilei = {
  firstName: "Galileo",
  lastName: "Galilei",

  // Edad cuando inventó su primer telescopio (1564-1609)
  age: 45,

  address: { city: "Padua", nation: "Venice" },
};
```

## Clonar objetos

Para clonar objetos, hay que tener en cuenta estas consideraciones:

1. Al declarar una variable con otra variable tipo objeto como valor, sólo se está declarando una referencia.
2. Usar el operador spread (`...`) puede ayudar a copiar propiedades que no sean ni funciones ni objetos. El resto de propiedades son referenciadas.
3. Usar la función `structuredClone` de JavaScript ayuda a copiar todas las propiedades del objeto y sus “subpropiedades”.

El motivo por el cual estas consideraciones deben ser tenidas en cuenta, es porque al no entender estas consideraciones, al intentar clonar una variable y modificar sus valores, se alteraría realmente los valores de la variable referencia. Esto podría causar fallas en el código fuente.
