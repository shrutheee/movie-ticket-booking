// Handle seat selection
const seats = document.querySelectorAll(".seat");
let selectedSeats = [];

seats.forEach((seat) => {
  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");
    const seatNumber = seat.textContent;

    if (seat.classList.contains("selected")) {
      selectedSeats.push(seatNumber);
    } else {
      selectedSeats = selectedSeats.filter((s) => s !== seatNumber);
    }
  });
});

// Handle booking
function bookNow() {
  const movie = document.getElementById("movie").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!date || selectedSeats.length === 0) {
    alert("Please select a date and at least one seat.");
    return;
  }

  const message = `🎬 Movie: ${movie}\n📅 Date: ${date}\n⏰ Time: ${time}\n🎟️ Seats: ${selectedSeats.join(
    ", "
  )}`;
  alert("Booking Confirmed!\n\n" + message);
}
