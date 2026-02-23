# `let`

Son el tipo de variables que se suelen crear:

```tsx
let firstName = "Antoine";
let lastName = "de Saint-Exupery";
```

### Nota

> No se recomienda utilizar variables `var` en JavaScript ni en TypeScript, porque trae desventajas, como estas:

1. Tienen ámbito de función, lo que puede generar confusión si se utiliza en la función y en un bloque adentro con diferentes objetivos.
2. Pueden elevarse a una propiedad global (Como `window`), por tanto, pueden generar confusión entre frameworks.
3. Pueden volverse a declarar accidentalmente.

# `const`

Son variables constantes. Se consideran “variables” debido a que se recomiendan que se utilicen en la mayoría de los casos.

# Ventajas de TypeScript con los tipos de datos

Se puede resaltar dos puntos:

1. No se puede cambiar el tipo de dato de una variable
2. El tipo de dato en variables `let` se detecta automáticamente.
3. No se detecta automáticamente el tipo de dato en una variable constante, porque TypeScript considera que no es necesario.

> **Nota:** Para indicar manualmente el tipo de dato de una variable, se nombra luego de dos puntos luego del nombre de una variable:

```tsx
const firstName: string = "Antoine";
```
