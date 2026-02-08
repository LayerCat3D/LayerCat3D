let cart = {};
let modalQty = 1;
let modalCode = "";
let modalIndex = 0;
let dropdownOpen = false;

// Çoklu görseller
const products = {
  "LC101": ["images/LC101-1.jpg","images/LC101-2.jpg"],
  "LC102": ["images/LC102-1.jpg","images/LC102-2.jpg"],
  "LC103": ["images/LC103-1.jpg","images/LC103-2.jpg"],
  "LC104": ["images/LC104-1.jpg","images/LC104-2.jpg"],
  "LC105": ["images/LC105-1.jpg","images/LC105-2.jpg"],
  "LC106": ["images/LC106-1.jpg","images/LC106-2.jpg"],
  "LC107": ["images/LC107-1.jpg","images/LC107-2.jpg"],
  "LC108": ["images/LC108-1.jpg","images/LC108-2.jpg"],
  "LC201": ["images/LC201-1.jpg","images/LC201-2.jpg"],
  "LC202": ["images/LC202-1.jpg","images/LC202-1.jpg"],
  "LC301": ["images/LC301-1.jpg","images/LC301-2.jpg","images/LC301-3.jpg"],
  "LC302": ["images/LC302-1.jpg"]
};

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
    document.body.classList.toggle("light");
    localStorage.theme = document.body.classList.contains("light") ? "light" : "dark";
}
if(localStorage.theme==="light") document.body.classList.add("light");

/* MODAL */
function openProduct(code){
    modalCode = code;
    modalQty = 1;
    modalIndex = 0;
    document.getElementById("modalImg").src = products[code][modalIndex];
    document.getElementById("modalCode").textContent = code;
    document.getElementById("modalQty").textContent = modalQty;
    document.getElementById("productModal").classList.add("open");
}

function closeProduct(){ document.getElementById("productModal").classList.remove("open"); }
function changeModalQty(v){ modalQty=Math.max(1, modalQty+v); document.getElementById("modalQty").textContent = modalQty; }
function addFromModal(){ cart[modalCode]=(cart[modalCode]||0)+modalQty; closeProduct(); renderCart(); toggleCart(); }

/* Modal galerisi */
function nextImage(){
    if(!products[modalCode]) return;
    modalIndex = (modalIndex + 1) % products[modalCode].length;
    document.getElementById("modalImg").src = products[modalCode][modalIndex];
}
function prevImage(){
    if(!products[modalCode]) return;
    modalIndex = (modalIndex - 1 + products[modalCode].length) % products[modalCode].length;
    document.getElementById("modalImg").src = products[modalCode][modalIndex];
}

/* SEPET DRAWER */
function toggleCart(){ document.getElementById("cart-drawer").classList.toggle("open"); }

function renderCart(){
    const div = document.getElementById("cart-items"); div.innerHTML=""; let count=0;
    for(let k in cart){
        count+=cart[k];
        div.innerHTML+=`<div>
            <img src="${products[k][0]}" alt="${k}">
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

