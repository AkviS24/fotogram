console.log("run");

const imageRef = document.getElementById("image-container");
const dialogRef = document.getElementById("dialog");
const dialogImageNameRef = document.getElementById("dialogImageName");
const dialogImageRef = document.getElementById("dialogImage");
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
        imageRef.innerHTML += `<img src="../img/pic/${images[i]}" alt="${images[i]}" onclick="showDialog(${i})" class="images">`;
    }
}

function showDialog(i) {
    console.log(i);
    dialogRef.innerHTML = getHTMLNoteForDialog(i);
    dialogRef.classList.add("dialog");
    dialogRef.showModal();
}

function getHTMLNoteForDialog(i) {
    return `
        <div class="dialog content-container">
            <header>
            <h2>${images[i]}</h2>
        </header>
        <section>
            <img class="images" src="../img/pic/${images[i]}" alt="${images[i]}" onclick="closeDialog()">
        </section>
        </div>
    `
}

function closeDialog() {    
    dialogRef.classList.remove("dialog");
    dialogRef.close();
}