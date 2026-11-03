const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");
});

const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const category = button.dataset.category;

        menuCards.forEach(function (card) {

            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
});

const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");

reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value;
    const guestEmail = document.getElementById("guestEmail").value;
    const reservationDate = document.getElementById("reservationDate").value;
    const reservationTime = document.getElementById("reservationTime").value;

    formMessage.textContent = "Thank you, " + guestName + "! Your reservation request has been received.";

    reservationForm.reset();
});


const reservation = {
    name: guestName,
    email: guestEmail,
    date: reservationDate,
    time: reservationTime
};

localStorage.setItem("reservation", JSON.stringify(reservation));

const savedReservation = localStorage.getItem("reservation");

console.log(JSON.parse(savedReservation));