/**
 * LayerCat3D - E-commerce Website
 * Improved version with better organization, error handling, and accessibility
 */

// ============================================
// STATE MANAGEMENT
// ============================================
const AppState = {
  cart: {},
  modal: {
    qty: 1,
    code: "",
    imageIndex: 0
  },
  ui: {
    dropdownOpen: false
  }
};

// ============================================
// PRODUCT DATA
// ============================================
const ProductData = {
  generateProducts() {
    const products = {};
    
    // Anahtarlıklar (LC101-LC150)
    for (let i = 101; i <= 150; i++) {
      const code = `LC${i}`;
      products[code] = {
        imgs: [`images/${code}-1.jpg`, `images/${code}-2.jpg`],
        desc: `Anahtarlık ${i} açıklama`,
        vars: ["Küçük", "Büyük"],
        category: "anahtarlik"
      };
    }
    
    // Custom product example
    products["LC101"] = {
      imgs: ["images/LC101-1.jpg", "images/LC101-2.jpg"],
      desc: "Dans Eden Dino Anahtarlık",
      vars: ["8cm", "15cm"],
      category: "anahtarlik"
    };
    
    // Çerçeveler (LC201-LC205)
    for (let i = 201; i <= 205; i++) {
      const code = `LC${i}`;
      products[code] = {
        imgs: [`images/${code}-1.jpg`, `images/${code}-2.jpg`],
        desc: `Çerçeve ${i} açıklama`,
        vars: ["Siyah", "Beyaz"],
        category: "cerceve"
      };
    }
    
    // Ev-dekorasyon (LC301-LC325)
    for (let i = 301; i <= 325; i++) {
      const code = `LC${i}`;
      products[code] = {
        imgs: [`images/${code}-1.jpg`, `images/${code}-2.jpg`],
        desc: `Ev-dekorasyon ${i} açıklama`,
        vars: ["Ahşap", "Plastik"],
        category: "ev"
      };
    }
    
    return products;
  }
};

const products = ProductData.generateProducts();

// ============================================
// UTILITY FUNCTIONS
// ============================================
const Utils = {
  /**
   * Get element safely with error handling
   */
  getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id "${id}" not found`);
    }
    return element;
  },
  
  /**
   * Safely update text content
   */
  setText(id, text) {
    const element = this.getElement(id);
    if (element) {
      element.textContent = text;
    }
  },
  
  /**
   * Safely update HTML content
   */
  setHTML(id, html) {
    const element = this.getElement(id);
    if (element) {
      element.innerHTML = html;
    }
  },
  
  /**
   * Toggle class on element
   */
  toggleClass(id, className, force) {
    const element = this.getElement(id);
    if (element) {
      element.classList.toggle(className, force);
    }
  },
  
  /**
   * Smooth scroll to element
   */
  scrollTo(elementId) {
    const element = this.getElement(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },
  
  /**
   * Save to localStorage with error handling
   */
  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  },
  
  /**
   * Load from localStorage with error handling
   */
  loadFromStorage(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return defaultValue;
    }
  }
};

// ============================================
// THEME MANAGEMENT
// ============================================
const ThemeManager = {
  init() {
    const savedTheme = Utils.loadFromStorage('theme', 'dark');
    if (savedTheme === 'light') {
      document.body.classList.add('light');
    }
    this.updateThemeIcon();
  },
  
  toggle() {
    document.body.classList.toggle('light');
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    Utils.saveToStorage('theme', theme);
    this.updateThemeIcon();
  },
  
  updateThemeIcon() {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    }
  }
};

// ============================================
// NAVIGATION & DROPDOWN
// ============================================
const Navigation = {
  init() {
    const menuBtn = Utils.getElement('productsMenuBtn');
    const dropdown = Utils.getElement('productDropdown');
    
    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleDropdown();
      });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      this.closeDropdown();
    });
    
    // Handle dropdown menu items
    if (dropdown) {
      const menuItems = dropdown.querySelectorAll('[role="menuitem"]');
      menuItems.forEach(item => {
        item.addEventListener('click', () => {
          const category = item.dataset.category;
          if (category) {
            this.scrollToCategory(category);
            this.closeDropdown();
          }
        });
      });
    }
  },
  
  toggleDropdown() {
    AppState.ui.dropdownOpen = !AppState.ui.dropdownOpen;
    const dropdown = Utils.getElement('productDropdown');
    const menuBtn = Utils.getElement('productsMenuBtn');
    
    if (dropdown) {
      dropdown.classList.toggle('open', AppState.ui.dropdownOpen);
    }
    
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', AppState.ui.dropdownOpen);
    }
  },
  
  closeDropdown() {
    AppState.ui.dropdownOpen = false;
    const dropdown = Utils.getElement('productDropdown');
    const menuBtn = Utils.getElement('productsMenuBtn');
    
    if (dropdown) {
      dropdown.classList.remove('open');
    }
    
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  },
  
  scrollToCategory(category) {
    Utils.scrollTo(`cat-${category}`);
  }
};

// ============================================
// PRODUCT MODAL
// ============================================
const ProductModal = {
  init() {
    const closeBtn = Utils.getElement('closeModal');
    const addToCartBtn = Utils.getElement('addToCartBtn');
    const prevBtn = Utils.getElement('prevImageBtn');
    const nextBtn = Utils.getElement('nextImageBtn');
    const decreaseBtn = Utils.getElement('decreaseQty');
    const increaseBtn = Utils.getElement('increaseQty');
    const modal = Utils.getElement('productModal');
    
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (addToCartBtn) addToCartBtn.addEventListener('click', () => this.addToCart());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevImage());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextImage());
    if (decreaseBtn) decreaseBtn.addEventListener('click', () => this.changeQty(-1));
    if (increaseBtn) increaseBtn.addEventListener('click', () => this.changeQty(1));
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
        this.close();
      }
    });
    
    // Close modal when clicking outside
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.close();
        }
      });
    }
  },
  
  open(productCode) {
    const product = products[productCode];
    if (!product) {
      console.error(`Product ${productCode} not found`);
      return;
    }
    
    AppState.modal = {
      code: productCode,
      qty: 1,
      imageIndex: 0
    };
    
    // Update modal content
    const modalImg = Utils.getElement('modalImg');
    if (modalImg) {
      modalImg.src = product.imgs[0];
      modalImg.alt = `${productCode} - Ürün görseli`;
      
      // Handle image load error
      modalImg.onerror = () => {
        modalImg.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f0f0f0" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EGörsel yüklenemedi%3C/text%3E%3C/svg%3E';
      };
    }
    
    Utils.setText('modalTitle', productCode);
    Utils.setText('modalDesc', product.desc);
    Utils.setText('modalQty', '1');
    
    // Populate variants
    const varSelect = Utils.getElement('modalVar');
    if (varSelect) {
      varSelect.innerHTML = '';
      product.vars.forEach(variant => {
        const option = document.createElement('option');
        option.value = variant;
        option.textContent = variant;
        varSelect.appendChild(option);
      });
    }
    
    // Show modal
    Utils.toggleClass('productModal', 'open', true);
    
    // Set focus to close button for accessibility
    const closeBtn = Utils.getElement('closeModal');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  },
  
  close() {
    Utils.toggleClass('productModal', 'open', false);
  },
  
  changeQty(delta) {
    AppState.modal.qty = Math.max(1, AppState.modal.qty + delta);
    Utils.setText('modalQty', AppState.modal.qty);
  },
  
  prevImage() {
    const product = products[AppState.modal.code];
    if (!product) return;
    
    AppState.modal.imageIndex = 
      (AppState.modal.imageIndex - 1 + product.imgs.length) % product.imgs.length;
    
    const modalImg = Utils.getElement('modalImg');
    if (modalImg) {
      modalImg.src = product.imgs[AppState.modal.imageIndex];
    }
  },
  
  nextImage() {
    const product = products[AppState.modal.code];
    if (!product) return;
    
    AppState.modal.imageIndex = 
      (AppState.modal.imageIndex + 1) % product.imgs.length;
    
    const modalImg = Utils.getElement('modalImg');
    if (modalImg) {
      modalImg.src = product.imgs[AppState.modal.imageIndex];
    }
  },
  
  addToCart() {
    const varSelect = Utils.getElement('modalVar');
    if (!varSelect) return;
    
    const variant = varSelect.value;
    const key = `${AppState.modal.code}-${variant}`;
    
    AppState.cart[key] = (AppState.cart[key] || 0) + AppState.modal.qty;
    
    this.close();
    CartManager.render();
    CartManager.open();
    
    // Save cart to localStorage
    Utils.saveToStorage('cart', AppState.cart);
  }
};

// ============================================
// CART MANAGEMENT
// ============================================
const CartManager = {
  init() {
    const cartToggle = Utils.getElement('cartToggle');
    const closeCart = Utils.getElement('closeCart');
    const whatsappBtn = Utils.getElement('sendWhatsAppBtn');
    
    if (cartToggle) cartToggle.addEventListener('click', () => this.toggle());
    if (closeCart) closeCart.addEventListener('click', () => this.close());
    if (whatsappBtn) whatsappBtn.addEventListener('click', () => this.sendWhatsApp());
    
    // Load cart from localStorage
    const savedCart = Utils.loadFromStorage('cart', {});
    AppState.cart = savedCart;
    this.render();
  },
  
  toggle() {
    const drawer = Utils.getElement('cartDrawer');
    if (drawer) {
      drawer.classList.toggle('open');
    }
  },
  
  open() {
    Utils.toggleClass('cartDrawer', 'open', true);
  },
  
  close() {
    Utils.toggleClass('cartDrawer', 'open', false);
  },
  
  render() {
    const cartItems = Utils.getElement('cartItems');
    const cartEmpty = Utils.getElement('cartEmpty');
    
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    let totalCount = 0;
    const entries = Object.entries(AppState.cart);
    
    if (entries.length === 0) {
      if (cartEmpty) cartEmpty.style.display = 'block';
      Utils.setText('cartCount', '0');
      return;
    }
    
    if (cartEmpty) cartEmpty.style.display = 'none';
    
    entries.forEach(([key, qty]) => {
      totalCount += qty;
      const [code] = key.split('-');
      const product = products[code];
      
      if (!product) return;
      
      const item = document.createElement('div');
      item.className = 'cart-item';
      item.setAttribute('role', 'listitem');
      
      item.innerHTML = `
        <img src="${product.imgs[0]}" alt="${key}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Crect fill=%22%23f0f0f0%22 width=%2260%22 height=%2260%22/%3E%3C/svg%3E'">
        <div class="cart-item-info">
          <div class="cart-item-name">${key}</div>
          <div class="qty-drawer">
            <button data-key="${key}" data-action="decrease" aria-label="Azalt">−</button>
            <span>${qty}</span>
            <button data-key="${key}" data-action="increase" aria-label="Artır">+</button>
          </div>
        </div>
      `;
      
      cartItems.appendChild(item);
    });
    
    // Add event listeners to quantity buttons
    cartItems.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const key = e.target.dataset.key;
        const action = e.target.dataset.action;
        const delta = action === 'increase' ? 1 : -1;
        this.changeQty(key, delta);
      });
    });
    
    Utils.setText('cartCount', totalCount);
  },
  
  changeQty(key, delta) {
    AppState.cart[key] = (AppState.cart[key] || 0) + delta;
    
    if (AppState.cart[key] <= 0) {
      delete AppState.cart[key];
    }
    
    this.render();
    Utils.saveToStorage('cart', AppState.cart);
  },
  
  sendWhatsApp() {
    if (Object.keys(AppState.cart).length === 0) {
      alert('Sepetiniz boş!');
      return;
    }
    
    let message = 'Merhaba, sipariş vermek istiyorum:%0A%0A';
    
    Object.entries(AppState.cart).forEach(([key, qty]) => {
      message += `${key} x ${qty}%0A`;
    });
    
    message += '%0ATeşekkürler!';
    
    const phoneNumber = '905439287380';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
};

// ============================================
// PRODUCT RENDERING
// ============================================
const ProductRenderer = {
  init() {
    this.renderProducts();
  },
  
  renderProducts() {
    const keysGrid = Utils.getElement('keysGrid');
    const framesGrid = Utils.getElement('framesGrid');
    const decorGrid = Utils.getElement('decorGrid');
    
    if (!keysGrid || !framesGrid || !decorGrid) {
      console.error('Product grids not found');
      return;
    }
    
    Object.entries(products).forEach(([code, product]) => {
      const card = this.createProductCard(code, product);
      
      if (code.startsWith('LC1')) {
        keysGrid.appendChild(card);
      } else if (code.startsWith('LC2')) {
        framesGrid.appendChild(card);
      } else if (code.startsWith('LC3')) {
        decorGrid.appendChild(card);
      }
    });
  },
  
  createProductCard(code, product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${code} ürünü`);
    
    const img = document.createElement('img');
    img.src = product.imgs[0];
    img.alt = `${code} ürün görseli`;
    img.loading = 'lazy';
    
    // Handle image load error
    img.onerror = () => {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'product-card-error';
      errorDiv.textContent = 'Görsel yüklenemedi';
      img.replaceWith(errorDiv);
    };
    
    const label = document.createElement('span');
    label.textContent = code;
    
    card.appendChild(img);
    card.appendChild(label);
    
    // Click handler
    card.addEventListener('click', () => ProductModal.open(code));
    
    // Keyboard handler
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        ProductModal.open(code);
      }
    });
    
    return card;
  }
};

// ============================================
// SCROLL CONTROLS
// ============================================
const ScrollControls = {
  init() {
    const scrollButtons = document.querySelectorAll('.scroll-btn');
    
    scrollButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const gridId = btn.dataset.grid;
        const direction = btn.dataset.direction;
        this.scroll(gridId, direction);
      });
    });
    
    // Auto-scroll
    this.startAutoScroll();
  },
  
  scroll(gridId, direction) {
    const grid = Utils.getElement(gridId);
    if (!grid) return;
    
    const scrollAmount = 300;
    const delta = direction === 'left' ? -scrollAmount : scrollAmount;
    
    grid.scrollBy({
      left: delta,
      behavior: 'smooth'
    });
  },
  
  startAutoScroll() {
    const grids = ['keysGrid', 'framesGrid', 'decorGrid'];
    
    setInterval(() => {
      grids.forEach(gridId => {
        const grid = Utils.getElement(gridId);
        if (!grid) return;
        
        // Check if scrolled to end
        const isAtEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10;
        
        if (isAtEnd) {
          // Reset to start
          grid.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Continue scrolling
          this.scroll(gridId, 'right');
        }
      });
    }, 5000);
  }
};

// ============================================
// LOGO CLICK HANDLER
// ============================================
const LogoHandler = {
  init() {
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', () => {
        location.reload();
      });
      
      logo.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          location.reload();
        }
      });
    }
  }
};

// ============================================
// APP INITIALIZATION
// ============================================
const App = {
  init() {
    // Initialize all modules
    ThemeManager.init();
    Navigation.init();
    ProductModal.init();
    CartManager.init();
    ProductRenderer.init();
    ScrollControls.init();
    LogoHandler.init();
    
    console.log('LayerCat3D initialized successfully');
  }
};

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

// Export for potential testing or external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { App, AppState, products };
}
