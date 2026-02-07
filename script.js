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

function orderWhatsApp() {
    if (cart.length === 0) {
        alert("Sepet boş!");
        return;
    }

    let message = "Merhaba 👋\n\nLayerCat3D’den sipariş vermek istiyorum:\n\n";
    cart.forEach(item => {
        message += `- ${item.quantity} adet ${item.product} (${item.code})\n  Renk: ${item.color}\n  Yazı: ${item.text}\n\n`;
    });
    message += "Fiyat ve teslim süresi hakkında bilgi alabilir miyim?";

    const phoneNumber = "905439287380"; // Türkiye için başına 90 eklemeliyiz
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}
