# Funciones asíncronas

Son funciones que ejecutan código asíncrono. Específicamente, se comportan como promesas. Estas funciones pueden esperar a que otras promesas se cumplan a mediante `await`, antes que el código siga ejecutándose. Esta palabra reservada se coloca antes de las promesas.

Una función asíncrona se declara con la palabra reservada `async`, que se coloca antes de los parámetros de la función.

Un ejemplo de una función asíncrona es:

```ts
const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
  );
  const { data } = (await response.json()) as GiphyRandomResponse;
  return data.images.original.url;
};
```
