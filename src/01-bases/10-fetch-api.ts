import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = ""; // No usaré GIPHY API por ahora.

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
);

// myRequest
//   .then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((reason) => {
//     console.error(reason);
//   });

const createImageInsideDom = (url: string) => {
  const imageElement = document.createElement("img");
  imageElement.src = url;

  document.body.append(imageElement);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    // const imageUrl = data.data.images.original.url;
    const imageUrl = data.images.original.url;
    createImageInsideDom(imageUrl);
  });
