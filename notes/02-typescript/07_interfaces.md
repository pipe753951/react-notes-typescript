# Interfaces

Las interfaces de TypeScript es una característica del lenguaje que permite definir cómo va a ser un objeto. Son parecidos a los objetos, pero comúnmente se nombran usando el estilo UpperCamelCase y no llevan un signo igual al definirse. Además, las propiedades se definen por tipo de datos y no por datos. Y es posible definir propiedades opcionales indicando un signo de pregunta después del nombre de la propiedad. Por ejemplo:

```tsx
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
```

> **Nota:** Se suele terminar cada propiedad con punto y coma o con sólo una coma. Sin embargo, es más común (Según el instructor) terminar con la primera.

## “Subobjetos” en propiedades

Con las interfaces es posible establecer la forma de cómo va a ser los objetos en un objeto que la utiliza. Se puede lograr de dos formas:

1. La forma menos común es declarar la “interfaz” directamente:

   ```tsx
   interface Person {
     // ...
     address?: { city: string; nation: string };
   }
   ```

2. La forma más común es declarar una interfaz aparte, e indicarla en la interfaz donde se desea utilizar:

   ```tsx
   interface Person {
     firstName: string;
     lastName: string;
     age: number;
     address?: Address;
   }

   interface Address {
     city: string;
     nation: string;
   }
   ```
