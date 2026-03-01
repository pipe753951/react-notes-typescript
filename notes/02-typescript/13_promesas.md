# Promesas

En pocas palabras, una promesa es un objeto que representa el éxito o el fracaso de una operación asíncrona, actuando como un valor futuro.

## Crear una promesa

Las promesas se crean cómo un objeto con un genérico (Una indicación entre signos “mayor que” y “menor que” acerca del tipo de dato se desea manejar o devolver). Este objeto solicita un callback, que es el código propio de la promesa. Este callback tiene dos parámetros: `resolve` para indicar que la promesa fue exitosa; Y `reject`, para indicar que no se logró resolver. Por ejemplo:

```ts
const myPromise = new Promise<string>((resolve, reject) => {
	// ...
	if (error) reject (error);
	resolve(result);
}
```

## Reaccionar ante respuestas de las promesas

Una promesa tiene tres métodos: `then(result)`, `catch(reason)` y `finally()`. El primero reacciona cuando la promesa fue exitosa; el segundo cuándo fracasa y el tercero reacciona en los dos casos. Por ejemplo:

```ts
myPromise
  .then((result) => {
    console.log(`Promise resolved: ${result}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log("Promise finished");
  });
```
