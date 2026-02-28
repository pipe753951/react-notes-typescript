const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    if (Math.round(Math.random())) {
      reject("Promesa no resuelta");
    }

    resolve("Promesa resuelta");
  }, 2000);
});

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
