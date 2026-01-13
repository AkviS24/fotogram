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
    dialogRef.showModal();
}

function getHTMLNoteForDialog(i) {
    return `
    <div class="dialog-content">
        <header class="dialog-header">
            <h2 id="dialogTitle">${images[i]}</h2>
            <button class="dialog-close" onclick="closeDialog()">✕</button>
        </header>

        <img class="dialog-image" src="../img/pic/${images[i]}" alt="${images[i]}">

        <footer class="dialog-footer">
            <button onclick="prevPicture(${i})">←</button>
            <span>${i + 1} / ${images.length}</span>
            <button onclick="nextPicture(${i})">→</button>
        </footer>
    </div>
    `;
}

function prevPicture(i) {
    i--;
    if(i < 0) {
        i = 10;
    }
    return showDialog(i);
}

function nextPicture(i) {
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