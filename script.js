/**
 * LayerCat3D - Enhanced E-commerce Website
 * Features: Pricing, Search, Filtering, Ratings, Favorites, Testimonials, Related Products
 */

// ============================================
// STATE MANAGEMENT
// ============================================
const AppState = {
  cart: {},
  favorites: new Set(),
  modal: {
    qty: 1,
    code: "",
    imageIndex: 0
  },
  ui: {
    dropdownOpen: false
  },
  filters: {
    search: "",
    category: "all",
    sort: "default"
  }
};

// ============================================
// PRODUCT DATA WITH PRICING AND RATINGS
// ============================================
const ProductData = {
  generateProducts() {
    const products = {};
    
    // Anahtarlıklar (LC101-LC109)
    for (let i = 101; i <= 109; i++) {
      const code = `LC${i}`;
      products[code] = {
        imgs: [`images/${code}-1.jpg`, `images/${code}-2.jpg`],
        desc: `Yüksek kaliteli 3D baskı anahtarlık. Dayanıklı PLA malzemeden üretilmiştir.`,
        vars: [
          { name: "Küçük (8cm)", price: 100 },
          { name: "Büyük (15cm)", price: 150 }
        ],
        category: "anahtarlik",
        rating: 4.5 + Math.random() * 0.5,
        reviews: Math.floor(Math.random() * 50) + 10,
        popular: i <= 110,
        new: i >= 145
      };
    }
    
    // Featured products with custom data
    products["LC101"] = {
      imgs: ["images/LC101-1.jpg", "images/LC101-2.jpg"],
      desc: "Müzik Dinleyen Dino Anahtarlık - En sevilen ürünümüz! Eğlenceli tasarımı ve parlak renkleriyle çocuklar ve yetişkinler için mükemmel bir hediye.",
      vars: [
        { name: "Küçük (7,5cm)", price: 125 },
        { name: "Büyük (10cm)", price: 175 }
      ],
      category: "anahtarlik",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
    
    products["LC102"] = {
      imgs: ["images/LC102-1.jpg", "images/LC102-2.jpg"],
      desc: "Minecraft Kalpli Clicker Anahtarlık - Minecraft Hayranları için özel tasarım. Yüksek baskı kalitesi ve clicker sesi.",
      vars: [
        { name: "Tek Boy (5cm)", price: 100 },
      ],
      category: "anahtarlik",
      rating: 4.7,
      reviews: 89,
      popular: true,
      new: false
    };

 products["LC103"] = {
      imgs: ["images/LC103-1.jpg", "images/LC103-2.jpg"],
      desc: "Kalpli Avokado Clicker Anahtarlık - Avokado sevenler için şirin ve özel tasarım. Yüksek baskı kalitesi ve clicker sesi.",
      vars: [
        { name: "Tek Boy (5,5cm)", price: 100 },
      ],
      category: "anahtarlik",
      rating: 4.9,
      reviews: 513,
      popular: true,
      new: false
    };    
     products["LC104"] = {
      imgs: ["images/LC104-1.jpg", "images/LC104-2.jpg"],
      desc: "Tatlı ve sevimli minyon anahtarlık.",
      vars: [
        { name: "Küçük (4cm)", price: 75 },
        { name: "Büyük (7cm)", price: 125 },
      ],
      category: "anahtarlik",
      rating: 4.4,
      reviews: 53,
      popular: true,
      new: false
    };    
      products["LC105"] = {
      imgs: ["images/LC105-1.jpg", "images/LC105-2.jpg"],
      desc: "Hareketli, oynar kollu sevimli Ahtapot. Farklı renk seçenekleri mevcuttur.",
      vars: [
        { name: "Küçük (4cm)", price: 60 },
        { name: "Büyük (7cm)", price: 100 },
      ],
      category: "anahtarlik",
      rating: 4.5,
      reviews: 22,
      popular: true,
      new: false
    };
      products["LC106"] = {
      imgs: ["images/LC106-1.jpg", "images/LC106-2.jpg"],
      desc: "En güçlü pokemon, sevimli ve şirin Pikachu. Bu tatlılık elektrik çarptıtır.:)",
      vars: [
        { name: "Küçük (4,5cm)", price: 75 },
        { name: "Büyük (7cm)", price: 125 },
      ],
      category: "anahtarlik",
      rating: 4.9,
      reviews: 122,
      popular: true,
      new: false
    }; 
      products["LC107"] = {
      imgs: ["images/LC107-1.jpg", "images/LC107-2.jpg"],
      desc: "I'm Groot.",
      vars: [
        { name: "Küçük (4,5cm)", price: 75 },
        { name: "Büyük (7cm)", price: 125 },
      ],
      category: "anahtarlik",
      rating: 4.8,
      reviews: 102,
      popular: true,
      new: false
    }; 
      products["LC108"] = {
      imgs: ["images/LC108-1.jpg", "images/LC108-2.jpg"],
      desc: "Yalnız Penguen... Ama clickerlı.",
      vars: [
        { name: "Tek boy (5,5cm)", price: 125 },
      ],
      category: "anahtarlik",
      rating: 4.7,
      reviews: 62,
      popular: true,
      new: false
    }; 
      products["LC109"] = {
      imgs: ["images/LC109-1.jpg", "images/LC109-2.jpg"],
      desc: "Minik Civciv. Clickerlı.",
      vars: [
        { name: "Tek Boy (5,5cm)", price: 125 },
      ],
      category: "anahtarlik",
      rating: 4.9,
      reviews: 47,
      popular: true,
      new: false
    }; 
    
    // Çerçeveler (LC201-LC205)
    for (let i = 201; i <= 205; i++) {
      const code = `LC${i}`;
      products[code] = {
        imgs: [`images/${code}-1.jpg`, `images/${code}-2.jpg`],
        desc: `Şık ve modern tasarımlı 3D baskı çerçeve. Güçlü magnetleri ile ister buzdolabınızı ister odanızı süslemek için ideal. Özelleştirilebilir, isim, tarih veya arzu ettiğiniz eklemeler yapılabilir.`,
        vars: [
          { name: "Instax Mini", price: 250 },
          { name: "Polaroid", price: 300 },

        ],
        category: "cerceve",
        rating: 4.3 + Math.random() * 0.5,
        reviews: Math.floor(Math.random() * 30) + 5,
        popular: false,
        new: i >= 204
      };
    }
    
    // Ev-dekorasyon (LC301-LC314)
    for (let i = 301; i <= 314; i++) {
      const code = `LC${i}`;
      products[code] = {
        imgs: [`images/${code}-1.jpg`, `images/${code}-2.jpg`],
        desc: `Özel tasarım ev dekorasyon ürünü. Evinize modern bir dokunuş katın.`,
        vars: [
          { name: "Ahşap Görünüm", price: 95 },
          { name: "Plastik (Renkli)", price: 85 }
        ],
        category: "ev",
        rating: 4.2 + Math.random() * 0.6,
        reviews: Math.floor(Math.random() * 40) + 8,
        popular: i <= 305,
        new: i >= 320
      };
    }
        // Featured products with custom data
    products["LC301"] = {
      imgs: ["images/LC301-1.jpg", "images/LC301-2.jpg"],
      desc: "Samurai şeklinde Tütsülük. Farklı renk seçenekleri mevcuttur. Özelleştirilebilir.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
        products["LC302"] = {
      imgs: ["images/LC302-1.jpg", "images/LC302-2.jpg"],
      desc: "Kayıkçı şeklinde Tütsülük. Farklı renk seçenekleri mevcuttur. Özelleştirilebilir.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
    products["LC303"] = {
      imgs: ["images/LC303-1.jpg", "images/LC303-2.jpg"],
      desc: "ZEN Denge Kayalar şeklinde Tütsülük. Farklı renk seçenekleri mevcuttur. Özelleştirilebilir.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };

        products["LC304"] = {
      imgs: ["images/LC304-1.jpg", "images/LC304-2.jpg"],
      desc: "Sevimli Panda şeklinde Tütsülük. Farklı renk seçenekleri mevcuttur. Özelleştirilebilir.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
    products["LC305"] = {
      imgs: ["images/LC305-1.jpg", "images/LC305-2.jpg"],
      desc: "Modern ve şık tasarım kalem veya aksesuar kutusu. Farklı renk seçenekleri mevcuttur. Özelleştirilebilir.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
    products["LC306"] = {
      imgs: ["images/LC306-1.jpg", "images/LC306-2.jpg"],
      desc: "Nike şişme mont şeklinde kalem kutusu. Farklı renk seçenekleri mevcuttur. Özelleştirilebilir.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
    products["LC307"] = {
      imgs: ["images/LC307-1.jpg", "images/LC307-2.jpg"],
      desc: "Kırmızı Gül",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
    products["LC308"] = {
      imgs: ["images/LC308-1.jpg", "images/LC308-2.jpg"],
      desc: "Modern ve şık saksı. Evinize güzel bir dokunuş katacaktır. Farklı renk seçenekleri mevcuttur.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
    products["LC309"] = {
      imgs: ["images/LC309-1.jpg", "images/LC309-2.jpg"],
      desc: "Modern ve şık saksı. Evinize güzel bir dokunuş katacaktır. Farklı renk seçenekleri mevcuttur.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
        products["LC310"] = {
      imgs: ["images/LC310-1.jpg", "images/LC310-2.jpg"],
      desc: "Modern ve şık saksı. Evinize güzel bir dokunuş katacaktır. Farklı renk seçenekleri mevcuttur.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
        products["LC311"] = {
      imgs: ["images/LC311-1.jpg", "images/LC311-2.jpg"],
      desc: "Gülümseyen saksı. Odanıza tatlı bir dokunuş katacaktır. Farklı renk seçenekleri mevcuttur.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
        products["LC312"] = {
      imgs: ["images/LC312-1.jpg", "images/LC312-2.jpg"],
      desc: "Gülümseyen saksı. Odanıza tatlı bir dokunuş katacaktır. Farklı renk seçenekleri mevcuttur.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
            products["LC313"] = {
      imgs: ["images/LC313-1.jpg", "images/LC313-2.jpg"],
      desc: "Gülümseyen kalp gözlü saksı. Odanıza tatlı bir dokunuş katacaktır. Farklı renk seçenekleri mevcuttur.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
            products["LC314"] = {
      imgs: ["images/LC314-1.jpg", "images/LC314-2.jpg"],
      desc: "Modern ve şık saksı. Evinize güzel bir dokunuş katacaktır. Farklı renk seçenekleri mevcuttur.",
      vars: [
        { name: "Tek Boy", price: 250 },
      ],
      category: "ev",
      rating: 4.8,
      reviews: 127,
      popular: true,
      new: false
    };
    
    
    return products;
  }
};

const products = ProductData.generateProducts();

// ============================================
// UTILITY FUNCTIONS
// ============================================
const Utils = {
  getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id "${id}" not found`);
    }
    return element;
  },
  
  setText(id, text) {
    const element = this.getElement(id);
    if (element) {
      element.textContent = text;
    }
  },
  
  setHTML(id, html) {
    const element = this.getElement(id);
    if (element) {
      element.innerHTML = html;
    }
  },
  
  toggleClass(id, className, force) {
    const element = this.getElement(id);
    if (element) {
      element.classList.toggle(className, force);
    }
  },
  
  scrollTo(elementId) {
    const element = this.getElement(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },
  
  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  },
  
  loadFromStorage(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return defaultValue;
    }
  },
  
  formatPrice(price) {
    return `${price} ₺`;
  },
  
  renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
      stars += '⭐';
    }
    if (hasHalfStar) {
      stars += '⭐';
    }
    
    return stars;
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
// SEARCH & FILTER
// ============================================
const SearchFilter = {
  init() {
    const searchInput = Utils.getElement('searchInput');
    const clearSearch = Utils.getElement('clearSearch');
    const categoryFilter = Utils.getElement('categoryFilter');
    const sortFilter = Utils.getElement('sortFilter');
    
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        AppState.filters.search = e.target.value.toLowerCase();
        this.updateClearButton();
        this.filterProducts();
      });
    }
    
    if (clearSearch) {
      clearSearch.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          AppState.filters.search = '';
          this.updateClearButton();
          this.filterProducts();
          searchInput.focus();
        }
      });
    }
    
    if (categoryFilter) {
      categoryFilter.addEventListener('change', (e) => {
        AppState.filters.category = e.target.value;
        this.filterProducts();
      });
    }
    
    if (sortFilter) {
      sortFilter.addEventListener('change', (e) => {
        AppState.filters.sort = e.target.value;
        this.filterProducts();
      });
    }
  },
  
  updateClearButton() {
    const clearBtn = Utils.getElement('clearSearch');
    if (clearBtn) {
      clearBtn.style.display = AppState.filters.search ? 'flex' : 'none';
    }
  },
  
  filterProducts() {
    const { search, category, sort } = AppState.filters;
    
    // Get all product cards
    const allCards = document.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    // Create array of cards with their data for sorting
    const cardsWithData = Array.from(allCards).map(card => {
      const code = card.dataset.code;
      const product = products[code];
      return { card, code, product };
    });
    
    // Filter
    const filtered = cardsWithData.filter(({ code, product }) => {
      if (!product) return false;
      
      // Category filter
      if (category !== 'all' && product.category !== category) {
        return false;
      }
      
      // Search filter
      if (search) {
        const searchLower = search.toLowerCase();
        const codeMatch = code.toLowerCase().includes(searchLower);
        const descMatch = product.desc.toLowerCase().includes(searchLower);
        const categoryMatch = product.category.toLowerCase().includes(searchLower);
        
        if (!codeMatch && !descMatch && !categoryMatch) {
          return false;
        }
      }
      
      return true;
    });
    
    // Sort
    if (sort === 'price-low') {
      filtered.sort((a, b) => {
        const priceA = Math.min(...a.product.vars.map(v => v.price));
        const priceB = Math.min(...b.product.vars.map(v => v.price));
        return priceA - priceB;
      });
    } else if (sort === 'price-high') {
      filtered.sort((a, b) => {
        const priceA = Math.max(...a.product.vars.map(v => v.price));
        const priceB = Math.max(...b.product.vars.map(v => v.price));
        return priceB - priceA;
      });
    } else if (sort === 'rating') {
      filtered.sort((a, b) => b.product.rating - a.product.rating);
    } else if (sort === 'popular') {
      filtered.sort((a, b) => {
        if (a.product.popular && !b.product.popular) return -1;
        if (!a.product.popular && b.product.popular) return 1;
        return b.product.reviews - a.product.reviews;
      });
    }
    
    // Hide all cards first
    allCards.forEach(card => {
      card.style.display = 'none';
    });
    
    // Show filtered cards in sorted order
    filtered.forEach(({ card }, index) => {
      card.style.display = 'flex';
      card.style.order = index;
      visibleCount++;
    });
    
    // Update search results text
    this.updateSearchResults(visibleCount, allCards.length);
  },
  
  updateSearchResults(visible, total) {
    const resultsDiv = Utils.getElement('searchResults');
    if (resultsDiv) {
      if (AppState.filters.search || AppState.filters.category !== 'all') {
        resultsDiv.textContent = `${visible} ürün gösteriliyor (toplam ${total})`;
      } else {
        resultsDiv.textContent = '';
      }
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
    
    document.addEventListener('click', () => {
      this.closeDropdown();
    });
    
    if (dropdown) {
      const menuItems = dropdown.querySelectorAll('[role="menuitem"]');
      menuItems.forEach(item => {
        item.addEventListener('click', () => {
          const category = item.dataset.category;
          if (category) {
            if (category === 'all') {
              // Reset filters and scroll to top
              const categoryFilter = Utils.getElement('categoryFilter');
              if (categoryFilter) {
                categoryFilter.value = 'all';
                AppState.filters.category = 'all';
                SearchFilter.filterProducts();
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              // Set category filter and scroll to category
              const categoryFilter = Utils.getElement('categoryFilter');
              if (categoryFilter) {
                categoryFilter.value = category;
                AppState.filters.category = category;
                SearchFilter.filterProducts();
              }
              this.scrollToCategory(category);
            }
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
// FAVORITES MANAGEMENT
// ============================================
const FavoritesManager = {
  init() {
    const favToggle = Utils.getElement('favoritesToggle');
    const closeFav = Utils.getElement('closeFavorites');
    
    if (favToggle) favToggle.addEventListener('click', () => this.toggle());
    if (closeFav) closeFav.addEventListener('click', () => this.close());
    
    // Load favorites from localStorage
    const savedFavorites = Utils.loadFromStorage('favorites', []);
    AppState.favorites = new Set(savedFavorites);
    this.updateCount();
  },
  
  toggle() {
    const drawer = Utils.getElement('favoritesDrawer');
    if (drawer) {
      drawer.classList.toggle('open');
      if (drawer.classList.contains('open')) {
        this.render();
      }
    }
  },
  
  open() {
    Utils.toggleClass('favoritesDrawer', 'open', true);
    this.render();
  },
  
  close() {
    Utils.toggleClass('favoritesDrawer', 'open', false);
  },
  
  add(productCode) {
    AppState.favorites.add(productCode);
    this.save();
    this.updateCount();
    this.updateFavoriteButtons();
    if (typeof Analytics !== 'undefined') Analytics.recordFavAdd();
  },
  
  remove(productCode) {
    AppState.favorites.delete(productCode);
    this.save();
    this.updateCount();
    this.updateFavoriteButtons();
    this.render();
  },
  
  toggleFavorite(productCode) {
    if (AppState.favorites.has(productCode)) {
      this.remove(productCode);
    } else {
      this.add(productCode);
    }
  },
  
  save() {
    Utils.saveToStorage('favorites', Array.from(AppState.favorites));
  },
  
  updateCount() {
    Utils.setText('favoritesCount', AppState.favorites.size);
  },
  
  updateFavoriteButtons() {
    // Update product card favorite buttons
    document.querySelectorAll('.product-favorite').forEach(btn => {
      const code = btn.dataset.code;
      const isFavorite = AppState.favorites.has(code);
      btn.classList.toggle('active', isFavorite);
      btn.textContent = isFavorite ? '❤️' : '🤍';
    });
    
    // Update modal favorite button
    const modalBtn = Utils.getElement('favoriteBtn');
    if (modalBtn && AppState.modal.code) {
      const isFavorite = AppState.favorites.has(AppState.modal.code);
      modalBtn.classList.toggle('active', isFavorite);
      const icon = modalBtn.querySelector('.heart-icon');
      if (icon) {
        icon.textContent = isFavorite ? '❤️' : '🤍';
      }
    }
  },
  
  render() {
    const favItems = Utils.getElement('favoritesItems');
    const favEmpty = Utils.getElement('favoritesEmpty');
    
    if (!favItems) return;
    
    favItems.innerHTML = '';
    
    if (AppState.favorites.size === 0) {
      if (favEmpty) favEmpty.style.display = 'block';
      return;
    }
    
    if (favEmpty) favEmpty.style.display = 'none';
    
    AppState.favorites.forEach(code => {
      const product = products[code];
      if (!product) return;
      
      const minPrice = Math.min(...product.vars.map(v => v.price));
      
      const item = document.createElement('div');
      item.className = 'favorite-item';
      item.setAttribute('role', 'listitem');
      
      item.innerHTML = `
        <img src="${product.imgs[0]}" alt="${code}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2270%22 height=%2270%22%3E%3Crect fill=%22%23f0f0f0%22 width=%2270%22 height=%2270%22/%3E%3C/svg%3E'">
        <div class="favorite-item-info">
          <div class="cart-item-name">${code}</div>
          <div class="cart-item-price">${Utils.formatPrice(minPrice)}+</div>
          <div class="product-card-rating">
            <span class="stars">${Utils.renderStars(product.rating)}</span>
          </div>
        </div>
        <div class="favorite-item-actions">
          <button data-code="${code}" data-action="view">Görüntüle</button>
          <button data-code="${code}" data-action="remove">Kaldır</button>
        </div>
      `;
      
      favItems.appendChild(item);
    });
    
    // Add event listeners
    favItems.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const code = e.target.dataset.code;
        const action = e.target.dataset.action;
        
        if (action === 'remove') {
          this.remove(code);
        } else if (action === 'view') {
          ProductModal.open(code);
          this.close();
        }
      });
    });
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
    const favoriteBtn = Utils.getElement('favoriteBtn');
    const shareInstagram = Utils.getElement('shareInstagram');
    const shareWhatsApp = Utils.getElement('shareWhatsApp');
    const varSelect = Utils.getElement('modalVar');
    
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (addToCartBtn) addToCartBtn.addEventListener('click', () => this.addToCart());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevImage());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextImage());
    if (decreaseBtn) decreaseBtn.addEventListener('click', () => this.changeQty(-1));
    if (increaseBtn) increaseBtn.addEventListener('click', () => this.changeQty(1));
    if (favoriteBtn) favoriteBtn.addEventListener('click', () => this.toggleFavorite());
    if (shareInstagram) shareInstagram.addEventListener('click', () => this.shareToInstagram());
    if (shareWhatsApp) shareWhatsApp.addEventListener('click', () => this.shareProductWhatsApp());
    
    // Update price when variant changes
    if (varSelect) {
      varSelect.addEventListener('change', () => this.updatePrice());
    }
    
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
      modalImg.onerror = () => {
        modalImg.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f0f0f0" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EGörsel yüklenemedi%3C/text%3E%3C/svg%3E';
      };
    }
    
    Utils.setText('modalTitle', productCode);
    Utils.setText('modalDesc', product.desc);
    Utils.setText('modalQty', '1');
    
    // Rating
    const modalStars = Utils.getElement('modalStars');
    if (modalStars) {
      modalStars.textContent = Utils.renderStars(product.rating);
    }
    Utils.setText('modalRatingText', `(${product.reviews} değerlendirme)`);
    
    // Populate variants and show price
    const varSelect = Utils.getElement('modalVar');
    if (varSelect) {
      varSelect.innerHTML = '';
      product.vars.forEach((variant, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${variant.name} - ${Utils.formatPrice(variant.price)}`;
        varSelect.appendChild(option);
      });
    }
    
    this.updatePrice();
    
    // Update favorite button
    FavoritesManager.updateFavoriteButtons();
    
    // Show related products
    this.showRelatedProducts(productCode);
    
    // Show modal
    Utils.toggleClass('productModal', 'open', true);
    if (typeof Analytics !== 'undefined') Analytics.recordProductView(productCode);
    
    const closeBtn = Utils.getElement('closeModal');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  },
  
  close() {
    Utils.toggleClass('productModal', 'open', false);
  },
  
  updatePrice() {
    const product = products[AppState.modal.code];
    if (!product) return;
    
    const varSelect = Utils.getElement('modalVar');
    if (varSelect) {
      const variantIndex = parseInt(varSelect.value);
      const variant = product.vars[variantIndex];
      if (variant) {
        Utils.setText('modalPrice', Utils.formatPrice(variant.price));
      }
    }
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
  
  toggleFavorite() {
    FavoritesManager.toggleFavorite(AppState.modal.code);
  },
  
  addToCart() {
    const product = products[AppState.modal.code];
    if (!product) return;
    
    const varSelect = Utils.getElement('modalVar');
    if (!varSelect) return;
    
    const variantIndex = parseInt(varSelect.value);
    const variant = product.vars[variantIndex];
    const key = `${AppState.modal.code}-${variant.name}`;
    
    if (!AppState.cart[key]) {
      AppState.cart[key] = {
        code: AppState.modal.code,
        variant: variant.name,
        price: variant.price,
        qty: 0
      };
    }
    
    AppState.cart[key].qty += AppState.modal.qty;
    
    this.close();
    CartManager.render();
    CartManager.open();
    
    Utils.saveToStorage('cart', AppState.cart);
  },
  
  shareToInstagram() {
    const product = products[AppState.modal.code];
    if (!product) return;
    
    // Open Instagram profile
    window.open('https://www.instagram.com/LayerCat3D/', '_blank');
  },
  
  shareProductWhatsApp() {
    const product = products[AppState.modal.code];
    if (!product) return;
    
    const message = `LayerCat3D'den ${AppState.modal.code} ürününe göz atmanı öneririm! 🐱\n\n${product.desc}\n\nDetaylar için: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  },
  
  showRelatedProducts(currentCode) {
    const product = products[currentCode];
    if (!product) return;
    
    const relatedGrid = Utils.getElement('relatedProductsGrid');
    if (!relatedGrid) return;
    
    relatedGrid.innerHTML = '';
    
    // Find products in same category
    const related = Object.entries(products)
      .filter(([code, p]) => 
        code !== currentCode && 
        p.category === product.category
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    related.forEach(([code, p]) => {
      const div = document.createElement('div');
      div.className = 'related-product';
      div.innerHTML = `
        <img src="${p.imgs[0]}" alt="${code}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22100%22 height=%22100%22/%3E%3C/svg%3E'">
        <div class="related-product-title">${code}</div>
      `;
      div.addEventListener('click', () => {
        this.close();
        setTimeout(() => this.open(code), 100);
      });
      relatedGrid.appendChild(div);
    });
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
    if (typeof Analytics !== 'undefined') Analytics.recordCartOpen();
    // Cart count pop animasyonu
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
      cartCount.classList.remove('pop');
      void cartCount.offsetWidth;
      cartCount.classList.add('pop');
      setTimeout(() => cartCount.classList.remove('pop'), 400);
    }
  },
  
  close() {
    Utils.toggleClass('cartDrawer', 'open', false);
  },
  
  render() {
    const cartItems = Utils.getElement('cartItems');
    const cartEmpty = Utils.getElement('cartEmpty');
    const cartSummary = Utils.getElement('cartSummary');
    
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    let totalCount = 0;
    let subtotal = 0;
    const entries = Object.entries(AppState.cart);
    
    if (entries.length === 0) {
      if (cartEmpty) cartEmpty.style.display = 'block';
      if (cartSummary) cartSummary.style.display = 'none';
      Utils.setText('cartCount', '0');
      return;
    }
    
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';
    
    entries.forEach(([key, item]) => {
      totalCount += item.qty;
      subtotal += item.price * item.qty;
      
      const product = products[item.code];
      if (!product) return;
      
      const cartItemDiv = document.createElement('div');
      cartItemDiv.className = 'cart-item';
      cartItemDiv.setAttribute('role', 'listitem');
      
      cartItemDiv.innerHTML = `
        <img src="${product.imgs[0]}" alt="${key}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2270%22 height=%2270%22%3E%3Crect fill=%22%23f0f0f0%22 width=%2270%22 height=%2270%22/%3E%3C/svg%3E'">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.code}</div>
          <div class="cart-item-price">${Utils.formatPrice(item.price)}</div>
          <div style="font-size: 12px; color: var(--text-secondary)">${item.variant}</div>
          <div class="qty-drawer">
            <button data-key="${key}" data-action="decrease" aria-label="Azalt">−</button>
            <span>${item.qty}</span>
            <button data-key="${key}" data-action="increase" aria-label="Artır">+</button>
          </div>
        </div>
      `;
      
      cartItems.appendChild(cartItemDiv);
    });
    
    // Add event listeners
    cartItems.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const key = e.target.dataset.key;
        const action = e.target.dataset.action;
        const delta = action === 'increase' ? 1 : -1;
        this.changeQty(key, delta);
      });
    });
    
    // Update summary
    const shipping = subtotal >= 399 ? 0 : 100;
    const total = subtotal + shipping;
    
    Utils.setText('cartSubtotal', Utils.formatPrice(subtotal));
    Utils.setText('cartShipping', shipping === 0 ? 'Ücretsiz' : Utils.formatPrice(shipping));
    Utils.setText('cartTotal', Utils.formatPrice(total));
    Utils.setText('cartCount', totalCount);
  },
  
  changeQty(key, delta) {
    if (!AppState.cart[key]) return;
    
    AppState.cart[key].qty += delta;
    
    if (AppState.cart[key].qty <= 0) {
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
    
    let message = 'Merhaba LayerCat3D! Sipariş vermek istiyorum:%0A%0A';
    let total = 0;
    
    Object.entries(AppState.cart).forEach(([key, item]) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      message += `${item.code} - ${item.variant} x ${item.qty} = ${Utils.formatPrice(itemTotal)}%0A`;
    });
    
    const shipping = total >= 399 ? 0 : 100;
    const grandTotal = total + shipping;
    
    message += `%0AAra Toplam: ${Utils.formatPrice(total)}%0A`;
    message += `Kargo: ${shipping === 0 ? 'Ücretsiz' : Utils.formatPrice(shipping)}%0A`;
    message += `%0AToplam: ${Utils.formatPrice(grandTotal)}%0A`;
    message += `%0ATeşekkürler! 🐱`;
    
    const phoneNumber = '905439287380';
    if (typeof Analytics !== 'undefined') Analytics.recordWhatsapp();
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
    
    // Initialize favorites display
    FavoritesManager.updateFavoriteButtons();
  },
  
  createProductCard(code, product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${code} ürünü`);
    card.dataset.code = code;
    
    const minPrice = Math.min(...product.vars.map(v => v.price));
    const maxPrice = Math.max(...product.vars.map(v => v.price));
    const priceText = minPrice === maxPrice 
      ? Utils.formatPrice(minPrice)
      : `${Utils.formatPrice(minPrice)}+`;
    
    card.innerHTML = `
      <div class="product-card-image">
        <img src="${product.imgs[0]}" alt="${code} ürün görseli" loading="lazy">
        ${product.new ? '<span class="product-badge new">Yeni</span>' : ''}
        ${product.popular ? '<span class="product-badge popular">Popüler</span>' : ''}
        <button class="product-favorite" data-code="${code}" aria-label="Favorilere ekle">
          🤍
        </button>
      </div>
      <div class="product-card-content">
        <div class="product-card-title">${code}</div>
        <div class="product-card-rating">
          <span class="stars">${Utils.renderStars(product.rating)}</span>
          <span class="rating-text">(${product.reviews})</span>
        </div>
        <div class="product-card-price">
          ${product.vars.length > 1 ? '<span class="product-card-price-from">den itibaren</span><br>' : ''}
          ${priceText}
        </div>
      </div>
    `;
    
    // Handle image load error
    const img = card.querySelector('img');
    if (img) {
      img.onerror = () => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'product-card-error';
        errorDiv.textContent = 'Görsel yüklenemedi';
        img.replaceWith(errorDiv);
      };
    }
    
    // Product card click handler (excluding favorite button)
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.product-favorite')) {
        ProductModal.open(code);
      }
    });
    
    // Keyboard handler
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        ProductModal.open(code);
      }
    });
    
    // Favorite button handler
    const favBtn = card.querySelector('.product-favorite');
    if (favBtn) {
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        FavoritesManager.toggleFavorite(code);
      });
    }
    
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
        
        const isAtEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10;
        
        if (isAtEnd) {
          grid.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
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
    ThemeManager.init();
    Navigation.init();
    SearchFilter.init();
    FavoritesManager.init();
    ProductModal.init();
    CartManager.init();
    ProductRenderer.init();
    ScrollControls.init();
    LogoHandler.init();
    CategoryExpand.init();
    BackToTop.init();
    AdminPanel.init();
    Analytics.recordVisit();
    
    console.log('LayerCat3D Enhanced initialized successfully');
    console.log(`Loaded ${Object.keys(products).length} products`);
  }
};

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { App, AppState, products };
}

// ============================================
// CATEGORY EXPAND - Başlığa tıklayınca grid
// ============================================
const CategoryExpand = {
  init() {
    document.querySelectorAll('.category-heading').forEach(heading => {
      heading.addEventListener('click', () => this.toggle(heading));
      heading.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggle(heading);
        }
      });
    });
  },

  toggle(heading) {
    const gridId = heading.dataset.grid;
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const isExpanded = heading.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      // Yatay moda geri dön
      grid.classList.remove('grid-mode');
      heading.setAttribute('aria-expanded', 'false');
      // Scroll butonlarını göster
      const section = heading.closest('.category');
      if (section) {
        section.querySelectorAll('.scroll-btn, .scroll-hint').forEach(el => el.style.display = '');
      }
    } else {
      // Grid moduna geç
      grid.classList.add('grid-mode');
      heading.setAttribute('aria-expanded', 'true');
      // Scroll butonlarını gizle
      const section = heading.closest('.category');
      if (section) {
        section.querySelectorAll('.scroll-btn, .scroll-hint').forEach(el => el.style.display = 'none');
      }
    }
  }
};

// ============================================
// BACK TO TOP
// ============================================
const BackToTop = {
  init() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

// ============================================
// ANALYTICS - Trafik takibi
// ============================================
const Analytics = {
  ADMIN_PASSWORD: 'layercat2024', // Şifreyi buradan değiştirebilirsiniz

  _get(key, def = null) {
    try {
      const v = localStorage.getItem('lc3d_analytics_' + key);
      return v ? JSON.parse(v) : def;
    } catch { return def; }
  },

  _set(key, val) {
    try {
      localStorage.setItem('lc3d_analytics_' + key, JSON.stringify(val));
    } catch {}
  },

  _inc(key) {
    this._set(key, (this._get(key, 0)) + 1);
  },

  recordVisit() {
    this._inc('total_visits');

    // Bugünün tarihi
    const today = new Date().toLocaleDateString('tr-TR');
    const days = this._get('daily_visits', {});
    days[today] = (days[today] || 0) + 1;
    this._set('daily_visits', days);

    // Son 20 ziyaret
    const visits = this._get('recent_visits', []);
    visits.unshift({
      time: new Date().toLocaleString('tr-TR'),
      page: document.title
    });
    this._set('recent_visits', visits.slice(0, 20));
  },

  recordCartOpen() { this._inc('cart_opens'); },
  recordProductView(code) {
    this._inc('product_views');
    const views = this._get('product_view_counts', {});
    views[code] = (views[code] || 0) + 1;
    this._set('product_view_counts', views);
  },
  recordFavAdd() { this._inc('fav_adds'); },
  recordWhatsapp() { this._inc('whatsapp_clicks'); },

  getAll() {
    const today = new Date().toLocaleDateString('tr-TR');
    const days = this._get('daily_visits', {});
    const productViews = this._get('product_view_counts', {});
    const topProducts = Object.entries(productViews)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8);

    return {
      totalVisits: this._get('total_visits', 0),
      todayVisits: days[today] || 0,
      cartOpens: this._get('cart_opens', 0),
      productViews: this._get('product_views', 0),
      favAdds: this._get('fav_adds', 0),
      whatsappClicks: this._get('whatsapp_clicks', 0),
      topProducts,
      recentVisits: this._get('recent_visits', [])
    };
  },

  clearAll() {
    ['total_visits','daily_visits','recent_visits','cart_opens','product_views',
     'product_view_counts','fav_adds','whatsapp_clicks'].forEach(k => {
      localStorage.removeItem('lc3d_analytics_' + k);
    });
  },

  export() {
    const data = this.getAll();
    const text = JSON.stringify(data, null, 2);
    const blob = new Blob([text], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `layercat3d_analytics_${new Date().toLocaleDateString('tr-TR').replace(/\./g,'-')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
};

// ============================================
// ADMIN PANEL
// ============================================
const AdminPanel = {
  logoClickCount: 0,
  logoClickTimer: null,

  init() {
    // Logo'ya 5x hızlı tıklayınca login aç
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        this.logoClickCount++;
        clearTimeout(this.logoClickTimer);
        this.logoClickTimer = setTimeout(() => { this.logoClickCount = 0; }, 2000);
        if (this.logoClickCount >= 5) {
          this.logoClickCount = 0;
          e.stopPropagation();
          this.showLogin();
        }
      });
    }

    // Login
    const loginBtn = document.getElementById('adminLoginBtn');
    const loginCancel = document.getElementById('adminLoginCancel');
    const pwInput = document.getElementById('adminPasswordInput');

    if (loginBtn) {
      loginBtn.addEventListener('click', () => this.tryLogin());
    }
    if (loginCancel) {
      loginCancel.addEventListener('click', () => this.hideLogin());
    }
    if (pwInput) {
      pwInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.tryLogin();
        if (e.key === 'Escape') this.hideLogin();
      });
    }

    // Close admin
    const closeAdmin = document.getElementById('closeAdmin');
    if (closeAdmin) closeAdmin.addEventListener('click', () => this.close());

    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
      adminPanel.addEventListener('click', (e) => {
        if (e.target === adminPanel) this.close();
      });
    }

    // Clear & Export
    const clearBtn = document.getElementById('adminClearData');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('Tüm istatistikler silinecek. Emin misiniz?')) {
          Analytics.clearAll();
          this.renderStats();
        }
      });
    }

    const exportBtn = document.getElementById('adminExport');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => Analytics.export());
    }
  },

  showLogin() {
    const modal = document.getElementById('adminLoginModal');
    if (modal) {
      modal.style.display = 'flex';
      const input = document.getElementById('adminPasswordInput');
      if (input) {
        input.value = '';
        setTimeout(() => input.focus(), 100);
      }
      const err = document.getElementById('adminLoginError');
      if (err) err.style.display = 'none';
    }
  },

  hideLogin() {
    const modal = document.getElementById('adminLoginModal');
    if (modal) modal.style.display = 'none';
  },

  tryLogin() {
    const input = document.getElementById('adminPasswordInput');
    const err = document.getElementById('adminLoginError');
    if (input && input.value === Analytics.ADMIN_PASSWORD) {
      this.hideLogin();
      this.open();
    } else {
      if (err) err.style.display = 'block';
      if (input) { input.value = ''; input.focus(); }
    }
  },

  open() {
    const panel = document.getElementById('adminPanel');
    if (panel) {
      panel.style.display = 'flex';
      this.renderStats();
    }
  },

  close() {
    const panel = document.getElementById('adminPanel');
    if (panel) panel.style.display = 'none';
  },

  renderStats() {
    const data = Analytics.getAll();

    const setText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setText('adminTotalVisits', data.totalVisits);
    setText('adminTodayVisits', data.todayVisits);
    setText('adminCartOpens', data.cartOpens);
    setText('adminProductViews', data.productViews);
    setText('adminFavAdds', data.favAdds);
    setText('adminWhatsappClicks', data.whatsappClicks);

    // Top products
    const topList = document.getElementById('adminTopProducts');
    if (topList) {
      if (data.topProducts.length === 0) {
        topList.innerHTML = '<p style="color:var(--text-secondary);font-size:14px;">Henüz ürün görüntülemesi yok.</p>';
      } else {
        topList.innerHTML = data.topProducts.map(([code, count], i) => `
          <div class="admin-top-item">
            <span class="admin-top-item-rank">#${i+1}</span>
            <span class="admin-top-item-name">${code}</span>
            <span class="admin-top-item-count">${count} görüntüleme</span>
          </div>
        `).join('');
      }
    }

    // Recent visits
    const visitsList = document.getElementById('adminRecentVisits');
    if (visitsList) {
      if (data.recentVisits.length === 0) {
        visitsList.innerHTML = '<p style="color:var(--text-secondary);font-size:14px;">Henüz ziyaret kaydı yok.</p>';
      } else {
        visitsList.innerHTML = data.recentVisits.map(v => `
          <div class="admin-visit-item">
            <span>${v.time}</span>
            <span>Sayfa görüntülendi</span>
          </div>
        `).join('');
      }
    }
  }
};


