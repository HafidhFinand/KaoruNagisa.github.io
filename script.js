// Select element yang diperlukan
const container = document.querySelector('.second-container');
const seats = document.querySelectorAll('.row .seat:not(.seat-occupied)');
const count = document.getElementById('count');
const totalPrice = document.getElementById('total-price');
const movieChoice = document.getElementById('list-movie');
let ticketPrice = Number(movieChoice.value);

// Merubah nilai count dan totalPrice berdasarkan selected seat
function updateCounter() {
    const selectedSeat = document.querySelectorAll('.row .seat.seat-selected');
    const selectedSeatCount = selectedSeat.length; 
    count.innerText = selectedSeatCount;
    totalPrice.innerText = selectedSeatCount * ticketPrice;
}

// Menambah event listener untuk list movie yang dipilih
movieChoice.addEventListener("change", function (x) {
    ticketPrice = Number(x.target.value);
    updateCounter();
})

// Menambahkan event listner untuk menambah selected seat
container.addEventListener("click", function(x) {
    // Memilih seat yang kosong saja
    if (
        x.target.classList.contains('seat') && !x.target.classList.contains('seat-occupied')
    ) {
        x.target.classList.toggle('seat-selected');
        updateCounter();
    }
})

