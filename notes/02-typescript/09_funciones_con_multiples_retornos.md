# Funciones con múltiples retornos

## Simplificar funciones que retornan objetos

Las funciones que retornan objetos para simplificarse, deben envolverse dentro de paréntesis. Esto es porque, puede confundirse con el cuerpo de funciones al no hacerlo. Por ejemplo:

```tsx
interface User {
  uid: string;
  username: string;
}
// Función simplificada con intefaz.
const getUser = (): User => ({ uid: "ABC-123", username: "math123" });
```

### 💡 Nota

En una función tipo flecha de TypeScript, una forma de especificar el tipo de dato que retorna es poner dos puntos luego de los parámetros, y colocar el tipo de dato.

La otra forma es poner como tipo de dato en la variable que indica la función, los tipos de datos de la función, el valor de retorno. Y luego, dar la función como tal.

```tsx
// Forma 1.
const getUser = (): User => ({ uid: "ABC-123", username: "math123" });

// Forma 2.
const getUser2: () => User = () => ({
  uid: "ABC-123",
  username: "math123",
});
```

## Formas de declarar funciones expresadas

```tsx
// 1ra. Usar function.
myNumbers.forEach(function (number) {
  console.log(number);
});
// 2da. Usar función tipo flecha.
myNumbers.forEach((number) => {
  console.log(number);
});
// 3ra. Usar la referencia
myNumbers.forEach(console.log);
```

Con el tercer ejemplo, se indica que si una función tipo callback recibe los mismos argumentos que se solicita, únicamente es necesario especificar la referencia.
