let cart = {};
let modalQty = 1;
let modalCode = "";
let dropdownOpen = false;

/* DROPDOWN */
function toggleDropdown(e){
    e.stopPropagation();
    dropdownOpen = !dropdownOpen;
    document.getElementById("productDropdown").classList.toggle("open", dropdownOpen);
}
document.addEventListener("click", ()=>{
    dropdownOpen = false;
    document.getElementById("productDropdown").classList.remove("open");
});

/* SCROLL TO CATEGORY */
function scrollToCategory(cat){
    const el = document.getElementById(`cat-${cat}`);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

/* DARK / LIGHT MODE */
function toggleTheme(){
    document.body.classList.toggle("dark");
    localStorage.theme = document.body.classList.contains("dark") ? "dark" : "light";
}
if(localStorage.theme==="dark") document.body.classList.add("dark");

/* MODAL */
function openProduct(code,img){
    modalCode = code;
    modalQty = 1;
    document.getElementById("modalImg").src = img;
    document.getElementById("modalCode").textContent = code;
    document.getElementById("modalQty").textContent = modalQty;
    document.getElementById("productModal").classList.add("open");
}
function closeProduct(){ document.getElementById("productModal").classList.remove("open"); }
function changeModalQty(v){ modalQty=Math.max(1, modalQty+v); document.getElementById("modalQty").textContent = modalQty; }
function addFromModal(){ cart[modalCode]=(cart[modalCode]||0)+modalQty; closeProduct(); renderCart(); toggleCart(); }

/* SEPET DRAWER */
function toggleCart(){ document.getElementById("cart-drawer").classList.toggle("open"); }

function renderCart(){
    const div = document.getElementById("cart-items"); div.innerHTML=""; let count=0;
    for(let k in cart){
        count+=cart[k];
        div.innerHTML+=`<div>
            <img src="images/${k}.jpg" alt="${k}">
            <span>${k}</span>
            <div class="qty-drawer">
                <button onclick="changeCartQty('${k}',-1)">−</button>
                <span>${cart[k]}</span>
                <button onclick="changeCartQty('${k}',1)">+</button>
            </div>
        </div>`;
    }
    document.getElementById("cart-count").textContent=count;
}
function changeCartQty(code,v){ cart[code]+=v; if(cart[code]<=0) delete cart[code]; renderCart(); }

/* WHATSAPP */
function sendWhatsApp(){
    let m="Merhaba, sipariş vermek istiyorum:%0A";
    for(let k in cart){ m+=`${k} x ${cart[k]}%0A`; }
    window.open(`https://wa.me/905439287380?text=${m}`);
}
