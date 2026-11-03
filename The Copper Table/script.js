
/* Feature 1 - Mobile Navigation */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");
});


/* Feature 2 - Menu Filtering */

const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        const category = button.dataset.category;

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        menuCards.forEach(function (card) {
            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});


/* Feature 3 - Reservation Form */

const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");

reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value;
    const guestEmail = document.getElementById("guestEmail").value;
    const guestPhone = document.getElementById("guestPhone").value;
    const reservationDate = document.getElementById("reservationDate").value;
    const reservationTime = document.getElementById("reservationTime").value;
    const guestCount = document.getElementById("guestCount").value;

    const reservation = {
        name: guestName,
        email: guestEmail,
        phone: guestPhone,
        date: reservationDate,
        time: reservationTime,
        guests: guestCount
    };

    /* Feature 4 - Save Reservation */

    localStorage.setItem("copperReservation", JSON.stringify(reservation));

    formMessage.textContent = "Thank you, " + guestName + "! Your reservation request has been received.";

    reservationForm.reset();
});


/* Retrieve Saved Reservation */

const savedReservation = localStorage.getItem("copperReservation");

if (savedReservation !== null) {
    console.log(JSON.parse(savedReservation));
}
