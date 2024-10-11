let cart = [];
let totalAmount = 0;

function addItem(item, price) {
    cart.push({ item, price });
    totalAmount += price;
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');

    if (cart.length === 0) {
        cartItemsElement.textContent = "No items in the cart";
    } else {
        const cartContent = cart.map(cartItem => `${cartItem.item} - ₹${cartItem.price}`).join(", ");
        cartItemsElement.textContent = cartContent;
    }
    totalAmountElement.textContent = totalAmount;
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }
    document.getElementById('orderSuccess').style.display = 'block';
    cart = [];
    totalAmount = 0;
    updateCart();
}
