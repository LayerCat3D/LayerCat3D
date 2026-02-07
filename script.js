let cart = [];

function addToCart(product, code, colorId, qtyId, textId) {
    const color = document.getElementById(colorId).value;
    const quantity = parseInt(document.getElementById(qtyId).value);
    const text = document.getElementById(textId).value || "Yok";

    cart.push({ product, code, color, quantity, text });
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";

        li.innerHTML = `
            <div>
                <strong>${item.product}</strong> (${item.code})<br>
                ${item.quantity} adet • ${item.color}<br>
                Yazı: ${item.text}
            </div>
            <div class="cart-controls">
                <button onclick="changeQty(${index}, -1)">−</button>
                <button onclick="changeQty(${index}, 1)">+</button>
                <button class="remove-btn" onclick="removeItem(${index})">🗑</button>
            </div>
        `;

        cartList.appendChild(li);
    });
}

function changeQty(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

function orderInstagram() {
    // Sepet boşsa uyar
    if (cart.length === 0) {
        alert("Sepet boş!");
        return;
    }

    // Instagram profil sayfasını aç
    const instagramProfile = "https://www.instagram.com/layercat3d";
    window.open(instagramProfile, "_blank");

  
}

}



