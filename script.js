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
    if (cart.length === 0) {
        alert("Sepet boş!");
        return;
    }

    let message = "Merhaba 👋\n\nSipariş vermek istiyorum:\n\n";
    cart.forEach(item => {
        message += `- ${item.quantity} adet ${item.product} (${item.code})\n  Renk: ${item.color}\n  Yazı: ${item.text}\n\n`;
    });
    message += "Fiyat ve teslim süresi hakkında bilgi alabilir miyim?";

    const instagramUsername = "layercat3d"; // buraya doğru kullanıcı adı
    const encodedMessage = encodeURIComponent(message);

    // Instagram DM sayfası aç
    window.open(`https://www.instagram.com/direct/new/?username=${instagramUsername}&text=${encodedMessage}`, "_blank");
}

