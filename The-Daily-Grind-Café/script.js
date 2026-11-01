
/* Mobile navigation */
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");
});


/* Menu filtering */
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


/* Restore saved menu preference */
const savedCategory = localStorage.getItem("cafePreference");

if (savedCategory !== null) {

    menuCards.forEach(function (card) {

        if (savedCategory === "all" || card.classList.contains(savedCategory)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

    filterButtons.forEach(function (button) {

        if (button.dataset.category === savedCategory) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

    });

}


/* Save menu preference */
filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category = button.dataset.category;

        localStorage.setItem("cafePreference", category);

    });

});
