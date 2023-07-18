"use strict";
//elements
const movieEl = document.getElementById("movie");
const seatsCountEl = document.getElementById("seat-count");
const seatsEl = document.querySelectorAll(".row .seat:not(.occupied)");

const totalPriceEl = document.querySelector(".total-price");


//global variables
let seatCount = 0;
let moviePrice = movieEl.value;

///functions
const init = function () {
  seatsCountEl.innerText = seatCount;
  totalPriceEl.innerText = seatCount * moviePrice;
};

//event listeners

movieEl.addEventListener("change", () => {
  moviePrice = movieEl.value;
  init();
});

for (let i = 0; i < seatsEl.length; i++) {
  seatsEl[i].addEventListener("click", () => {
    if (seatsEl[i].classList.contains("selected")) {
      seatsEl[i].classList.remove("selected");
    } else {
      seatsEl[i].classList.add("selected");
    }
    let selectedSeats = document.querySelectorAll(".row .seat.selected");
    seatCount = selectedSeats.length;
    init();
  });
}
//initial settings
init();

//user will select a movie

//user will select a seat

//we will update the seat count and total price

//when user click on non selected seats update the eat status

//toggle className selected
