const images = [
    "01.jpg", "02.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `javascript/${chosenImage}`;

document.body.appendChild(bgImage);