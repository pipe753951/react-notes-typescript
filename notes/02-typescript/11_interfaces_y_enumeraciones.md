# Interfaces y enumeraciones

## Tipos

Es propio de TypeScript, consiste en datos que se permite utilizar. Por ejemplo:

```ts
type Area = "Biology" | "Physics";
```

## Enumeraciones

Consiste en otros tipos de datos que se permite utilizar en TypeScript. A diferencia de los tipos, estos se compilan a JavaScript.

> **💡 Nota:** Hay que anotar que cuando `erasableSyntaxOnly` está habilitado en la configuración de TypeScript, usar enumeraciones no se permite en el lenguaje.

Por ejemplo:

```ts
enum Area2 {
  Physics = "Physics",
  Biology = "Biology",
}

// Ejemplo: Area.Physics;
```
