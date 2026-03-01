import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = ""; // No usaré GIPHY API por ahora.

const createImageInsideDom = (url: string) => {
  const imageElement = document.createElement("img");
  imageElement.src = url;

  document.body.append(imageElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
  );

  // const { data } : GiphyRandomResponse = await response.json();
  const { data } = (await response.json()) as GiphyRandomResponse;

  return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDom);
