import { useState, useEffect } from "react";

async function randomDogURI() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (response.ok) {
    const json = await response.json();
    // Example response message: https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg
    return json;
  } else {
    return { status: "failed", error: "HTTP-Error: " + response.status };
  }
}

export default function DogPics() {
  const [dogPicURI, setDogPicURI] = useState("");

  function newPhoto() {
    randomDogURI().then((result) => {
      if (result.status === "success" && result.message) {
        setDogPicURI(result.message);
      } else console.error(result.error);
    });
  }

  useEffect(newPhoto, []);

  return (
    <div className="dog-pics">
      {dogPicURI && <img src={dogPicURI} alt="Dog" />}
      <button onClick={newPhoto} title="Click to change the photo">
        🐶
      </button>
    </div>
  );
}
