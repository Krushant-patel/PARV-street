// Sample product list
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

let cart = [];

// Display products on page load
window.onload = function () {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">

                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
};

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cartCount').innerText = cart.length;
}

// Show Cart Modal
const modal = document.getElementById('cartModal');
const viewCartBtn = document.getElementById('viewCart');
const closeModal = document.querySelector('.close');

viewCartBtn.onclick = function () {
    modal.style.display = 'block';
    displayCart();
};

closeModal.onclick = function () {
    modal.style.display = 'none';
};

// Display cart items
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });
}
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}
