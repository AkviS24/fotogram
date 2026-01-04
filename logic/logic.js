console.log("run");

const imageRef = document.getElementById("image-container");
const images = [
    "Alaska.jpg",
    "Anime.jpg",
    "Atmosphere.jpg",
    "Blue-tit.jpg",
    "Hurricane.jpg",
    "Lake.jpg",
    "Moorente.jpg",
    "Sea.jpg",
    "Snow-bunting.jpg",
    "Snow-leopard.jpg",
    "Travel.jpg"
];

function loadImages() {
    
    for(let i = 0; i < images.length; i++){
        const imageCreate = document.createElement("img");
        imageCreate.src = "./img/pic/" + `${images[i]}`;
        imageCreate.className = "images";
        imageRef.appendChild(imageCreate);
    }

}