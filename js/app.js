// js/app.js

document.addEventListener('DOMContentLoaded', () => {

    // Variables Globales
    const products = window.productsDb || [];
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Elementos DOM
    const gridCatalog = document.getElementById('products-grid');
    const gridFeatured = document.getElementById('featured-products-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cartToggle = document.getElementById('cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items-container');

    // --- 1. RENDERIZADO DE PRODUCTOS ---

    const renderProducts = (productsToRender, targetGrid) => {
        if (!targetGrid) return;
        targetGrid.innerHTML = '';
        productsToRender.forEach(product => {

            // Construir HTML de los badges
            const badgesHtml = product.badges.map(b => `<span class="badge">${b}</span>`).join('');

            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-wrap">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-badges">${badgesHtml}</div>
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-actions">
                        <button class="btn btn-outline" onclick="openProductModal(${product.id})">Detalles</button>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar</button>
                    </div>
                </div>
            `;
            targetGrid.appendChild(card);
        });
    };


    //modal 

    const modal = document.getElementById("product-modal");

    window.openProductModal = function (id) {
        const product = window.productsDb.find(p => p.id === id);
        if (!product || !modal) return;

        document.getElementById("modal-img").src = product.image;
        document.getElementById("modal-title").textContent = product.name;
        document.getElementById("modal-category").textContent = product.category;
        document.getElementById("modal-description").textContent = product.description;

        document.getElementById("modal-badges").innerHTML =
            product.badges.map(b => `<span class="badge">${b}</span>`).join('');

        modal.classList.add("open");
    }

    //cerrar modal  
    const closeBtn = document.getElementById("close-modal");

    if (closeBtn && modal) {
        closeBtn.onclick = () => modal.classList.remove("open");
    }

    if (modal) {
        modal.onclick = (e) => {
            if (e.target === modal) modal.classList.remove("open");
        };
    }



    // Render inicial según la página
    if (gridCatalog) {
        renderProducts(products, gridCatalog);
    }

    if (gridFeatured) {
        // Solo renderiza los primeros 4 para la portada
        renderProducts(products.slice(0, 4), gridFeatured);
    }

    // --- 2. SISTEMA DE FILTROS (Solo en Catálogo) ---

    if (filterBtns.length > 0 && gridCatalog) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remover activo de todos
                filterBtns.forEach(b => b.classList.remove('active'));
                // Agregar activo al seleccionado
                e.target.classList.add('active');

                const filter = e.target.getAttribute('data-filter');

                if (filter === 'all') {
                    renderProducts(products, gridCatalog);
                } else {
                    const filtered = products.filter(p => p.category === filter);
                    renderProducts(filtered, gridCatalog);
                }
            });
        });
    }

    // --- 3. LÓGICA DEL CARRITO ---

    const updateCartUI = () => {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        localStorage.setItem('cart', JSON.stringify(cart));

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="color: var(--color-text-muted); text-align: center; margin-top: 2rem;">Tu carrito está vacío.</p>';
            return;
        }

        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span style="font-size:0.8rem; color:var(--color-text-muted)">${item.category}</span>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(el);
        });
    };

    window.addToCart = (id) => {
        const product = products.find(p => p.id === id);
        if (!product) return;

        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCartUI();
        openCart(); // Abre el sidebar al agregar
    };

    window.changeQty = (id, delta) => {
        const item = cart.find(i => i.id === id);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        updateCartUI();
    };

    // Funciones de apertura/cierre de Sidebar
    const openCart = () => {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeCartFunc = () => {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    };

    if (cartToggle) cartToggle.addEventListener('click', openCart);
    if (closeCart) closeCart.addEventListener('click', closeCartFunc);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartFunc);

    // Inicializar UI del carrito al cargar la página
    updateCartUI();

});

window.openProductModal = openProductModal;

