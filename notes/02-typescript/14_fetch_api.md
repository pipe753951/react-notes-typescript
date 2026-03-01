# Fetch API

El Fetch API es una API incluida en los navegadores web para hacer peticiones HTTP. Para utilizarla, se utiliza la promesa `fetch`, que si todo sale bien, devuelve un objeto acerca del resultado de la petición. No viene con la respuesta, por lo hay que convertirla. Una manera común es utilizar `response.json` (Suponiendo que la petición se guardó en una variable llamada `response`). Por ejemplo:

```ts
myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDom(imageUrl);
  });
```
