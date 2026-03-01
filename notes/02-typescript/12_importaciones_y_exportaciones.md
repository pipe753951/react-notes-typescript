# Importaciones y exportaciones

## ¿Qué es un módulo?

Un módulo es un archivo que permite reutilizar código desde otros archivos de código.

## Exportar

Para exportar hay dos maneras:

### Forma común

Para exportar algo, antes de declararlo, se añade la palabra reservada `export`. Por ejemplo:

```ts
export interface Scientist {
  // ...
}
```

### Exportación por defecto

Para hacer una exportación por defecto, al final del archivo de código se utiliza las palabras reservadas `export default` más lo que se desea exportar. Por ejemplo:

```ts
const scientists: Scientist[] = [
  // ...
];

export default scientists;
```

## Importar

Hay dos formas de importar, que suele ir combinadas, pero antes de cualquiera de ellas se utiliza la palabra reservada `import`, y al final se coloca `from` y el archivo de código origen. Las dos formas son:

1. **Exportaciones por defecto:** En las exportaciones por defecto, se coloca cómo se desea que se llame lo que desea exportar. Si luego se desea importar exportaciones comunes, se coloca una coma antes de empezar.
2. **Exportaciones comunes:** Con este tipo, entre llaves se indica lo que se desea exportar con los nombres exactos. Si se desea renombrar, luego del nombre se coloca `as` y el nombre deseado.

> **💡 Nota:** Si se desea (o se requiere) exportar un tipo desde las exportaciones comunes. antes de colocar el nombre exacto se coloca la palabra reservada `type`.
> **⚠️ Nota:** En TypeScript a veces no se permite las exportaciones por defecto de tipos.

Por ejemplo:

```ts
import scientists, { type Scientist } from "../data/scientist.data";
```
