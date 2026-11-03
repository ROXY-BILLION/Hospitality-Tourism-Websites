// Feature 1- Mobile-Navigation
const Navigation = document.getElementById("navigation");
const MenuBtn = document.getElementById("menuButton");

MenuBtn.addEventListener("click", function () {
    Navigation.classList.toggle("active");
})

// Feature 2 -Menu Filtering
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

// Feature 3- Add to Order
let cart = JSON.parse(localStorage.getItem("rollingKitchen")) || [];

function saveCart() {
    localStorage.setItem("rollingKitchen", JSON.stringify(cart));
}

const AddButton = document.querySelectorAll(".add-button");

AddButton.forEach(function (button) {
    button.addEventListener("click", function () {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const existingItem = cart.find(function (item) {
            return item.name === name;
        })
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            })
        }
        saveCart();
        displayCart();
        
    })
})

// Feature 4 - Display Item
const OrderCount = document.getElementById("orderCount");
const OrderItems = document.getElementById("orderItems");
const OrderTotal = document.getElementById("orderTotal");

const OrderButton = document.getElementById("orderButton");
const OrderPanel = document.getElementById("orderPanel");
const OrderOverlay = document.getElementById("orderOverlay");
const CloseOrder = document.getElementById("closeOrder");
const ClearOrder = document.getElementById("clearOrder");

function saveCart() {
    localStorage.setItem("streetBiteCart", JSON.stringify(cart));
}


function displayCart() {
    OrderItems.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        OrderItems.innerHTML = '<p class="empty-order">Your order is empty.</p>';
    }

    cart.forEach(function (item, index) {
        total += item.price * item.quantity;
        count += item.quantity;

        OrderItems.innerHTML += `
            <div class="order-item">
                <div>
                    <p>${item.name}</p>
                    <span>₦${item.price.toLocaleString()} × ${item.quantity}</span>
                </div>

                <button class="remove-item" data-index="${index}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    });

    OrderCount.textContent = count;
    OrderTotal.textContent = "₦" + total.toLocaleString();

    document.querySelectorAll(".remove-item").forEach(function (button) {
        button.addEventListener("click", function () {
            const index = Number(button.dataset.index);

            cart.splice(index, 1);

            saveCart();
            displayCart();
        });
    });
}


// Open and close order panel

OrderButton.addEventListener("click", function () {
    OrderPanel.classList.add("active");
    OrderOverlay.classList.add("active");
});

function closeOrderPanel() {
    OrderPanel.classList.remove("active");
    OrderOverlay.classList.remove("active");
}

CloseOrder.addEventListener("click", closeOrderPanel);
OrderOverlay.addEventListener("click", closeOrderPanel);


// Clear order

ClearOrder.addEventListener("click", function () {
    cart = [];

    saveCart();
    displayCart();
});


// Restore saved order

displayCart();