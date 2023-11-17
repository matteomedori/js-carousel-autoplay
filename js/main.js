"use strict";

/*
FUNCTIONS
*/

//funzione che va sulla prossima immagine
function nextImg() {
  allItems[counterActive].classList.remove("active");
  //rimuovo classe selected a aggiungo not-selected
  allThumbnailImages[counterActive].classList.remove("selected");
  allThumbnailImages[counterActive].classList.add("not-selected");
  if (counterActive < allItems.length - 1) {
    counterActive++;
  } else {
    counterActive = 0;
  }
  allItems[counterActive].classList.add("active");
  //rimuovo classe not-selected a aggiungo selected
  allThumbnailImages[counterActive].classList.add("selected");
  allThumbnailImages[counterActive].classList.remove("not-selected");
}

//funzione che va sulla precedente immagine
function prevImg() {
  allItems[counterActive].classList.remove("active");

  //rimuovo classe selected a aggiungo not-selected
  allThumbnailImages[counterActive].classList.remove("selected");
  allThumbnailImages[counterActive].classList.add("not-selected");
  if (counterActive > 0) {
    counterActive--;
  } else {
    counterActive = allItems.length - 1;
  }
  allItems[counterActive].classList.add("active");
  //rimuovo classe not-selected a aggiungo selected
  allThumbnailImages[counterActive].classList.add("selected");
  allThumbnailImages[counterActive].classList.remove("not-selected");
}

/*
OPERATIONS
*/

//array di immagini da inserire
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
//elemento html che dovrà contenere le immagini
const items = document.querySelector(".items");
//elemento html che dovrà contenere le thumbnails
const thumbnails = document.querySelector(".thumbnails");

//scorro l'array di immagini
for (let i = 0; i < images.length; i++) {
  //per la prima immagine c'è anche la classe active e nell'immagine del thumbnail anche la classe selected
  if (i === 0) {
    //aggiungo un item
    items.innerHTML += `<div class="item active">
        <img src="./img/${images[i]}" alt="Immagine ${i + 1}" />
        </div>`;
    //aggiungo un thumbnail
    thumbnails.innerHTML += `<div class="thumbnail ">
        <img src="./img/${images[i]}" alt="Immagine ${
      i + 1
    }" class="selected" />
        </div>`;
  } else {
    items.innerHTML += `<div class="item">
        <img src="./img/${images[i]}" alt="Immagine ${i + 1}" />
        </div>`;
    thumbnails.innerHTML += `<div class="thumbnail ">
    <img src="./img/${images[i]}" alt="Immagine ${
      i + 1
    }" class="not-selected" />
    </div>`;
  }
}

//seleziono elemento prev nell'html
const prev = document.querySelector(".prev");
//seleziono elemento prev nell'html
const next = document.querySelector(".next");
//seleziono tutti gli item
const allItems = document.querySelectorAll(".item");
//seleziono tutti i thumbnail
const allThumbnailImages = document.querySelectorAll(".thumbnail > img");
// contatore che dice quale elemento ha classe active
let counterActive = 0;

//evento sul click di prev
prev.addEventListener("click", function () {
  prevImg();
});

//evento sul click di next
next.addEventListener("click", function () {
  nextImg();
});

//seleziono la lista di thumbnail
const allThumbnails = document.querySelectorAll(".thumbnail");

//per ogni thumbnail aggiungo l'evento al click
for (let i = 0; i < allThumbnails.length; i++) {
  allThumbnails[i].addEventListener("click", function () {
    //seleziono elemento img della thumbnail
    const img = allThumbnails[i].querySelector("img");
    //faccio qualcosa solo se l'elemento non è gia selezionato
    if (img.classList.contains("not-selected")) {
      //seleziono elemento img in posizione counterActive ovvero quello attivo
      const imgSelected = allThumbnails[counterActive].querySelector("img");
      //aggiorno la classe dell'elemento
      imgSelected.classList.add("not-selected");
      imgSelected.classList.remove("selected");
      //aggiorno la classe dell'elemento su cui ho cliccato
      img.classList.add("selected");
      img.classList.remove("not-selected");
      //rimuovo classe active all'item attivo prima del click
      allItems[counterActive].classList.remove("active");
      //aggiorno counterActive
      counterActive = i;
      //aggiungo classe active all'item relativo alla thumbnail su cui ho cliccato
      allItems[counterActive].classList.add("active");
    }
  });
}

setInterval(nextImg, 3_000);
