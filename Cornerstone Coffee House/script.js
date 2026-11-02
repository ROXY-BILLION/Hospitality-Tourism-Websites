// Feature 1 - Mobile Menu Navigation
const Navigation = document.getElementById("navigation");
const MenuButton = document.getElementById("menuButton");

MenuButton.addEventListener("click", function () {
    Navigation.classList.toggle("active");
})


// Feature 2- Filtering Feature
const FilterButtons = document.querySelectorAll(".filter-button");
const MenuCards = document.querySelectorAll(".menu-card");

FilterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const category = button.dataset.category;

        FilterButtons.forEach(function (item) {
            item.classList.remove("active");
        })
        button.classList.add("active");

        MenuCards.forEach(function (card) {
            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        })
    })
})

// Feature 3- localStorage

/* Restore saved menu preference */
const savedCategory = localStorage.getItem("cafeCategory");

if (savedCategory !== null) {

    MenuCards.forEach(function (card) {

        if (savedCategory === "all" || card.classList.contains(savedCategory)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

    FilterButtons.forEach(function (button) {

        if (button.dataset.category === savedCategory) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

    });

}


/* Save menu preference */
FilterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category = button.dataset.category;

        localStorage.setItem("cafeCategory", category);

    });

});