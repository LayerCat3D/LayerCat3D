let cart={}, modalQty=1, modalCode="", modalIndex=0, dropdownOpen=false;

// ÜRÜNLERİ OLUŞTUR
const products={};

// Anahtarlıklar LC101-LC150
for(let i=101;i<=150;i++){
    let code=`LC${i}`;
    products[code]={ 
        imgs:[`images/${code}-1.jpg`,`images/${code}-2.jpg`],
        desc:`Anahtarlık ${i} açıklama`,
        vars:["Küçük","Büyük"]
    };
products["LC101"] = { 
    imgs:["images/LC101-1.jpg","images/LC101-2.jpg"],
    desc:"Dans Eden Dino Anahtarlık",  // <-- burası ürün açıklaması
    vars:["8cm","15cm"]
};

}

// Çerçeveler LC201-LC205
for(let i=201;i<=205;i++){
    let code=`LC${i}`;
    products[code]={ 
        imgs:[`images/${code}-1.jpg`,`images/${code}-2.jpg`],
        desc:`Çerçeve ${i} açıklama`,
        vars:["Siyah","Beyaz"]
    };
}

// Ev-dekorasyon LC301-LC325
for(let i=301;i<=325;i++){
    let code=`LC${i}`;
    products[code]={ 
        imgs:[`images/${code}-1.jpg`,`images/${code}-2.jpg`],
        desc:`Ev-dekorasyon ${i} açıklama`,
        vars:["Ahşap","Plastik"]
    };
}

// DROPDOWN
function toggleDropdown(e){e.stopPropagation();dropdownOpen=!dropdownOpen;document.getElementById("productDropdown").classList.toggle("open",dropdownOpen);}
document.addEventListener("click",()=>{dropdownOpen=false;document.getElementById("productDropdown").classList.remove("open");});

// SCROLL TO CATEGORY
function scrollToCategory(cat){const el=document.getElementById(`cat-${cat}`);if(el) el.scrollIntoView({behavior:'smooth',block:'start'});}

// THEME
function toggleTheme(){document.body.classList.toggle("light");localStorage.theme=document.body.classList.contains("light")?"light":"dark";}
if(localStorage.theme==="light")document.body.classList.add("light");

// MODAL
function openProduct(code){
  modalCode=code;modalQty=1;modalIndex=0;
  document.getElementById("modalImg").src=products[code].imgs[0];
  document.getElementById("modalCode").textContent=code;
  document.getElementById("modalQty").textContent=modalQty;
  const sel=document.getElementById("modalVar"); sel.innerHTML="";
  products[code].vars.forEach(v=>sel.innerHTML+=`<option>${v}</option>`);
  document.getElementById("modalDesc").textContent=products[code].desc;
  document.getElementById("productModal").classList.add("open");
}
function closeProduct(){document.getElementById("productModal").classList.remove("open");}
function changeModalQty(v){modalQty=Math.max(1,modalQty+v);document.getElementById("modalQty").textContent=modalQty;}
function addFromModal(){
  const varSelect=document.getElementById("modalVar").value;
  const key=modalCode+"-"+varSelect;
  cart[key]=(cart[key]||0)+modalQty;
  closeProduct(); renderCart(); toggleCart();
}

// MODAL IMAGE
function nextImage(){modalIndex=(modalIndex+1)%products[modalCode].imgs.length; document.getElementById("modalImg").src=products[modalCode].imgs[modalIndex];}
function prevImage(){modalIndex=(modalIndex-1+products[modalCode].imgs.length)%products[modalCode].imgs.length; document.getElementById("modalImg").src=products[modalCode].imgs[modalIndex];}

// CART DRAWER
function toggleCart(){document.getElementById("cartDrawer").classList.toggle("open");}
function renderCart(){
  const div=document.getElementById("cartItems"); div.innerHTML="";
  let count=0;
  for(let k in cart){
    count+=cart[k];
    div.innerHTML+=`<div class="cart-item"><img src="${products[k.split('-')[0]].imgs[0]}" alt="${k}"><span>${k}</span><div class="qty-drawer"><button onclick="changeCartQty('${k}',-1)">−</button><span>${cart[k]}</span><button onclick="changeCartQty('${k}',1)">+</button></div></div>`;
  }
  document.getElementById("cartCount").textContent=count;
}
function changeCartQty(code,v){cart[code]+=v; if(cart[code]<=0) delete cart[code]; renderCart();}

// WHATSAPP
function sendWhatsApp(){
  let m="Merhaba, sipariş vermek istiyorum:%0A";
  for(let k in cart) m+=`${k} x ${cart[k]}%0A`;
  window.open(`https://wa.me/905439287380?text=${m}`);
}

// HORIZONTAL SCROLL BUTTONS
function scrollLeft(gridId){document.getElementById(gridId).scrollBy({left:-300,behavior:'smooth'});}
function scrollRight(gridId){document.getElementById(gridId).scrollBy({left:300,behavior:'smooth'});}

// RENDER PRODUCTS
function renderProducts(){
  const keysGrid=document.getElementById("keysGrid");
  const framesGrid=document.getElementById("framesGrid");
  const decorGrid=document.getElementById("decorGrid");
  for(let k in products){
    const card=document.createElement("div");
    card.className="product-card";
    card.innerHTML=`<img src="${products[k].imgs[0]}" alt="${k}"><span>${k}</span>`;
    card.onclick=()=>openProduct(k);
    if(k.startsWith("LC1")) keysGrid.appendChild(card);
    else if(k.startsWith("LC2")) framesGrid.appendChild(card);
    else if(k.startsWith("LC3")) decorGrid.appendChild(card);
  }
}
renderProducts();
renderCart();

// AUTOMATIC SLIDE
setInterval(()=>{["keysGrid","framesGrid","decorGrid"].forEach(id=>scrollRight(id));},5000);
