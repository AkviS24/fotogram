console.log("run");

const imageRef = document.getElementById("image-container");
const dialogRef = document.getElementById("dialog");
const dialogImageNameRef = document.getElementById("dialogImageName");
const dialogImageRef = document.getElementById("dialogImage");
const images = [
    "Alaska.jpg",
    "Anime.jpg",
    "Atmosphere.jpg",
    "Blue-Tit.jpg",
    "Hurricane.jpg",
    "Lake.jpg",
    "Moorente.jpg",
    "Sea.jpg",
    "Snow-Bunting.jpg",
    "Snow-Leopard.jpg",
    "Travel.jpg"
];

function loadImages() {   
    for(let i = 0; i < images.length; i++){
        imageRef.innerHTML += `<img src="../img/pic/${images[i]}" alt="${images[i]}" onclick="showDialog(${i})" class="images" aria-haspopup="dialog" aria-controls="dialog">`;
    }
}

function showDialog(i) {
    console.log(i);
    dialogRef.innerHTML = getHTMLNoteForDialog(i);
    dialogRef.classList.add("dialog");
    dialogRef.classList.add("opened");
    dialogRef.showModal();
}

function getHTMLNoteForDialog(i) {
    return `
        <div>
            <header class="displayFlexForDialog">
                <h2 id="dialogTitle">${images[i]}</h2>
                <button aria-label="Dialog schließen" onclick="closeDialog()">Schliessen</button>
            </header>
            <section>
                <img class="displayFlexForDialog dialog-image" src="../img/pic/${images[i]}" alt="${images[i]}">
                <div class="displayFlexForDialog">
                    <img tabindex=0; type="button" src="../img/pic/pfeil-links.png" alt="Button für das vorige Bild" onclick="vorigesBild(${i})">
                    <img tabindex=0 type="button" src="../img/pic/pfeil-rechts.png" alt="Button für das nächste Bild" onclick="naechstesBild(${i})">
                </div>
            </section>
        </div>
    `
}

function vorigesBild(i) {
    i--;
    if(i < 0) {
        i = 10;
    }
    return showDialog(i);
}

function naechstesBild(i) {
    i++;
    if(i > 10) {
        i= 0;
    }
    return showDialog(i);
}


function closeDialog() {    
    dialogRef.classList.remove("opened");
    dialogRef.classList.remove("dialog");
    dialogRef.close();
}