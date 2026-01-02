let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");
    cartItems.innerHTML = "";
    let sum = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name} - KES ${item.price}</li>`;
        sum += item.price;
    });

    total.innerText = "Total: KES " + sum;
}

function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}
