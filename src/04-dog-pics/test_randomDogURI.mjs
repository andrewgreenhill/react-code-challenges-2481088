import fetch from "node-fetch";

async function randomDogURI() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (response.ok) {
    const json = await response.json();
    // Example result: https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg
    return json;
  } else {
    // console.error("HTTP-Error: " + response.status);
    return { status: "failed", error: "HTTP-Error: " + response.status };
  }
}

randomDogURI().then((res) => console.log(res));
