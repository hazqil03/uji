let cart = [];

function addToCart(productName, price) {
    // Menambahkan produk ke dalam keranjang
    cart.push({
        name: productName,
        price: price
    });

    // Menampilkan produk di keranjang
    updateCartView();

    // Memberikan umpan balik kepada pengguna
    alert(`Produk "${productName}" telah ditambahkan ke keranjang.`);
    console.log('Keranjang:', cart);
}

function updateCartView() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Menghapus isi sebelumnya

    // Memperbarui tampilan keranjang
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rp ${item.price}`;
        cartItems.appendChild(listItem);
    });
}
