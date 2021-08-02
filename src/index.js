console.log("%c HI", "color: firebrick");

const fetchService = (url, fn) => {
  fetch(url)
    .then((resp) => resp.json())
    .then((json) => {
      fn(json.message);
      //console.log(json.message);
    });
};

const displayImages = (dogs) => {
  const dogImages = document.getElementById("dog-image-container");
  dogs.forEach((dog) => {
    const img = document.createElement("img");
    img.setAttribute("src", `${dog}`);
    img.setAttribute("height", 100);
    img.setAttribute("width", 100);
    dogImages.appendChild(img);
  });
};

const displayBreeds = (dogs) => {
  const breeds = Object.keys(dogs);
  const dogBreeds = document.getElementById("dog-breeds");
  breeds.forEach((breed) => {
    const li = document.createElement("li");
    li.setAttribute("id",`${breed}`);
    li.innerText = breed;
    dogBreeds.appendChild(li);
    const liI = document.getElementById(breed);
    liI.addEventListener("click", (e) => {
        liI.style.color = "#ff0000";
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetchService(imgUrl, displayImages);
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetchService(breedUrl, displayBreeds);
});
