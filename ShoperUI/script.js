// ShoperUI JavaScript

// Sample product data
const products = [
    {
        id: 1,
        name: 'Classic Denim Jacket',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop'
        ],
        category: 'men',
        description: 'A timeless classic denim jacket perfect for casual wear. Made from premium cotton denim with a comfortable fit.',
        rating: 4.5,
        reviews: [],
        isNew: true,
        isSale: true
    },
    {
        id: 2,
        name: 'Elegant Summer Dress',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop'
        ],
        category: 'women',
        description: 'Beautiful summer dress with floral patterns. Perfect for casual outings and summer parties.',
        rating: 4.8,
        reviews: [],
        isNew: true
    },
    {
        id: 3,
        name: 'Kids Colorful T-Shirt',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5d2?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1503944583220-79d8926ad5d2?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop'
        ],
        category: 'kids',
        description: 'Bright and colorful t-shirt for kids. Made from soft, breathable cotton fabric.',
        rating: 4.3,
        reviews: []
    },
    {
        id: 4,
        name: 'Premium Leather Boots',
        price: 159.99,
        originalPrice: 199.99,
        image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop'
        ],
        category: 'men',
        description: 'High-quality leather boots with durable construction. Perfect for both casual and formal occasions.',
        rating: 4.7,
        reviews: [],
        isSale: true
    },
    {
        id: 5,
        name: 'Stylish Handbag',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1591348122451-4b91d8ab3992?w=400&h=400&fit=crop'
        ],
        category: 'women',
        description: 'Elegant handbag with spacious interior and premium materials. Perfect accessory for any outfit.',
        rating: 4.6,
        reviews: [],
        isNew: true
    },
    {
        id: 6,
        name: 'Kids Sneakers',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop'
        ],
        category: 'kids',
        description: 'Comfortable and durable sneakers for active kids. Features breathable materials and non-slip sole.',
        rating: 4.4,
        reviews: []
    },
    {
        id: 7,
        name: 'Casual Button Shirt',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=400&h=400&fit=crop'
        ],
        category: 'men',
        description: 'Versatile button-up shirt suitable for both casual and semi-formal occasions.',
        rating: 4.2,
        reviews: []
    },
    {
        id: 8,
        name: 'Designer Sunglasses',
        price: 149.99,
        originalPrice: 189.99,
        image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=400&h=400&fit=crop'
        ],
        category: 'women',
        description: 'Premium designer sunglasses with UV protection and stylish frames.',
        rating: 4.9,
        reviews: [],
        isSale: true
    }
];

// Global variables
let cart = JSON.parse(localStorage.getItem('shoperui-cart')) || [];
let currentCategory = 'all';
let currentProduct = null;
let selectedRating = 0;
let appliedDiscount = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadHomePage();
    updateCartCount();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', searchProducts);
    document.getElementById('productSearchInput').addEventListener('input', filterProducts);
    
    // Rating input
    const ratingStars = document.querySelectorAll('.rating-input i');
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.dataset.rating);
            updateRatingDisplay();
        });
        
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.dataset.rating);
            highlightStars(rating);
        });
    });
    
    document.querySelector('.rating-input').addEventListener('mouseleave', function() {
        highlightStars(selectedRating);
    });
}

// Page navigation
function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('d-none'));
    
    // Show selected page
    document.getElementById(page + 'Page').classList.remove('d-none');
    
    // Load page content
    switch(page) {
        case 'home':
            loadHomePage();
            break;
        case 'cart':
            loadCartPage();
            break;
    }
}

function showCategory(category) {
    currentCategory = category;
    showPage('products');
    loadProductsPage();
}

// Load home page
function loadHomePage() {
    const homeProducts = document.getElementById('homeProducts');
    const featuredProducts = products.slice(0, 8);
    
    homeProducts.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// Load products page
function loadProductsPage() {
    const categoryTitle = document.getElementById('categoryTitle');
    const productsGrid = document.getElementById('productsGrid');
    
    // Set category title
    const titles = {
        'all': 'All Products',
        'men': "Men's Fashion",
        'women': "Women's Fashion",
        'kids': 'Kids Collection',
        'deals': "Today's Deals"
    };
    categoryTitle.textContent = titles[currentCategory] || 'Products';
    
    // Filter products
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        if (currentCategory === 'deals') {
            filteredProducts = products.filter(p => p.isSale || p.isNew);
        } else {
            filteredProducts = products.filter(p => p.category === currentCategory);
        }
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// Create product card HTML
function createProductCard(product) {
    const badges = [];
    if (product.isNew) badges.push('<span class="badge badge-new">NEW</span>');
    if (product.isSale) badges.push('<span class="badge badge-sale">SALE</span>');
    
    const originalPriceHtml = product.originalPrice ? 
        `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : '';
    
    const saveAmount = product.originalPrice ? 
        `<small class="price-save">Save $${(product.originalPrice - product.price).toFixed(2)}</small>` : '';
    
    return `
        <div class="col">
            <div class="card product-card h-100" onclick="showProductModal(${product.id})">
                <div class="position-relative">
                    <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                    <div class="product-badges">
                        ${badges.join('')}
                    </div>
                </div>
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title">${product.name}</h6>
                    <div class="stars mb-2">
                        ${generateStars(product.rating)}
                        <small class="text-muted ms-1">(${product.rating})</small>
                    </div>
                    <div class="mt-auto">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <div>
                                <span class="price-current h6">$${product.price.toFixed(2)}</span>
                                ${originalPriceHtml}
                            </div>
                            ${saveAmount}
                        </div>
                        <button class="btn btn-primary w-100" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <i class="bi bi-cart-plus me-1"></i>Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="bi bi-star-fill"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="bi bi-star-half"></i>';
        } else {
            stars += '<i class="bi bi-star"></i>';
        }
    }
    return stars;
}

// Search products
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query) {
        showCategory('all');
        filterProductsByQuery(query);
    }
}

function filterProducts() {
    const query = document.getElementById('productSearchInput').value.toLowerCase();
    filterProductsByQuery(query);
}

function filterProductsByQuery(query) {
    let filteredProducts = products;
    
    // Filter by category
    if (currentCategory !== 'all') {
        if (currentCategory === 'deals') {
            filteredProducts = products.filter(p => p.isSale || p.isNew);
        } else {
            filteredProducts = products.filter(p => p.category === currentCategory);
        }
    }
    
    // Filter by search query
    if (query) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.description.toLowerCase().includes(query)
        );
    }
    
    const productsGrid = document.getElementById('productsGrid');
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="bi bi-search"></i>
                    <h5>No products found</h5>
                    <p>Try adjusting your search criteria</p>
                </div>
            </div>
        `;
    } else {
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

// Product modal
function showProductModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;
    
    // Update modal content
    document.getElementById('modalProductName').textContent = currentProduct.name;
    document.getElementById('modalProductImage').src = currentProduct.image;
    document.getElementById('modalProductRating').innerHTML = generateStars(currentProduct.rating);
    document.getElementById('modalReviewCount').textContent = `(${currentProduct.rating}) - ${currentProduct.reviews.length} reviews`;
    document.getElementById('modalProductPrice').textContent = `$${currentProduct.price.toFixed(2)}`;
    document.getElementById('modalProductDescription').textContent = currentProduct.description;
    document.getElementById('modalQuantity').value = 1;
    
    // Update original price if exists
    const originalPriceElement = document.getElementById('modalOriginalPrice');
    if (currentProduct.originalPrice) {
        originalPriceElement.textContent = `$${currentProduct.originalPrice.toFixed(2)}`;
        originalPriceElement.style.display = 'inline';
    } else {
        originalPriceElement.style.display = 'none';
    }
    
    // Update image thumbnails
    const thumbnails = document.getElementById('modalImageThumbnails');
    thumbnails.innerHTML = currentProduct.images.map((img, index) => 
        `<img src="${img}" class="modal-thumbnail ${index === 0 ? 'active' : ''}" 
              onclick="changeModalImage('${img}', this)" alt="Product image ${index + 1}">`
    ).join('');
    
    // Load reviews
    loadProductReviews();
    
    // Show modal
    new bootstrap.Modal(document.getElementById('productModal')).show();
}

function changeModalImage(src, thumbnail) {
    document.getElementById('modalProductImage').src = src;
    document.querySelectorAll('.modal-thumbnail').forEach(t => t.classList.remove('active'));
    thumbnail.classList.add('active');
}

function toggleZoom() {
    const img = document.getElementById('modalProductImage');
    const icon = document.getElementById('zoomIcon');
    
    if (img.classList.contains('zoomed')) {
        img.classList.remove('zoomed');
        icon.className = 'bi bi-zoom-in';
    } else {
        img.classList.add('zoomed');
        icon.className = 'bi bi-zoom-out';
    }
}

function changeQuantity(change) {
    const quantityInput = document.getElementById('modalQuantity');
    let quantity = parseInt(quantityInput.value) + change;
    if (quantity < 1) quantity = 1;
    quantityInput.value = quantity;
}

// Cart functionality
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }
    
    // Save to localStorage
    localStorage.setItem('shoperui-cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show animation
    showAddToCartAnimation();
    
    // Show success message
    showToast('Product added to cart!', 'success');
}

function addToCartFromModal() {
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    addToCart(currentProduct.id, quantity);
    
    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function showAddToCartAnimation() {
    const cartButton = document.querySelector('[onclick*="showPage(\'cart\')"]');
    cartButton.classList.add('add-to-cart-animation');
    setTimeout(() => cartButton.classList.remove('add-to-cart-animation'), 300);
}

// Load cart page
function loadCartPage() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-cart-x"></i>
                <h5>Your cart is empty</h5>
                <p>Add some products to get started</p>
                <button class="btn btn-primary" onclick="showCategory('all')">Continue Shopping</button>
            </div>
        `;
        updateCartTotals();
        return;
    }
    
    cartItems.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return '';
        
        return `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img src="${product.image}" class="cart-item-img" alt="${product.name}">
                    </div>
                    <div class="col-md-4">
                        <h6>${product.name}</h6>
                        <p class="text-muted mb-0">$${product.price.toFixed(2)}</p>
                    </div>
                    <div class="col-md-3">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.productId}, -1)">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" 
                                   onchange="setCartQuantity(${item.productId}, this.value)" min="1">
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.productId}, 1)">+</button>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <strong>$${(product.price * item.quantity).toFixed(2)}</strong>
                    </div>
                    <div class="col-md-1">
                        <button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${item.productId})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    updateCartTotals();
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.productId === productId);
    if (!item) return;
    
    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    localStorage.setItem('shoperui-cart', JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
}

function setCartQuantity(productId, quantity) {
    const item = cart.find(item => item.productId === productId);
    if (!item) return;
    
    quantity = parseInt(quantity);
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    item.quantity = quantity;
    localStorage.setItem('shoperui-cart', JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('shoperui-cart', JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
    showToast('Product removed from cart', 'info');
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax - appliedDiscount;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Checkout functionality
function showCheckout() {
    showPage('checkout');
    loadCheckoutPage();
}

function loadCheckoutPage() {
    const checkoutItems = document.getElementById('checkoutItems');
    
    checkoutItems.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return '';
        
        return `
            <div class="d-flex align-items-center mb-3">
                <img src="${product.image}" class="me-3" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;" alt="${product.name}">
                <div class="flex-grow-1">
                    <h6 class="mb-0">${product.name}</h6>
                    <small class="text-muted">Qty: ${item.quantity}</small>
                </div>
                <span>$${(product.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
    }).join('');
    
    updateCheckoutTotals();
    
    // Set delivery date
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    document.getElementById('deliveryDate').textContent = deliveryDate.toLocaleDateString();
}

function updateCheckoutTotals() {
    const subtotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.productId);
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax - appliedDiscount;
    
    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
    
    // Show/hide discount row
    const discountRow = document.getElementById('discountRow');
    if (appliedDiscount > 0) {
        document.getElementById('discount').textContent = `-$${appliedDiscount.toFixed(2)}`;
        discountRow.style.display = 'flex';
    } else {
        discountRow.style.display = 'none';
    }
}

function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value.toUpperCase();
    
    if (couponCode === 'SAVE10') {
        const subtotal = cart.reduce((sum, item) => {
            const product = products.find(p => p.id === item.productId);
            return sum + (product ? product.price * item.quantity : 0);
        }, 0);
        
        appliedDiscount = subtotal * 0.1; // 10% discount
        updateCheckoutTotals();
        showToast('Coupon applied successfully!', 'success');
    } else {
        showToast('Invalid coupon code', 'error');
    }
}

function placeOrder() {
    // Validate form
    const form = document.getElementById('checkoutForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Simulate order processing
    showToast('Order placed successfully! You will receive a confirmation email shortly.', 'success');
    
    // Clear cart
    cart = [];
    localStorage.setItem('shoperui-cart', JSON.stringify(cart));
    updateCartCount();
    
    // Redirect to home
    setTimeout(() => {
        showPage('home');
    }, 2000);
}

// Review functionality
function loadProductReviews() {
    const reviewsContainer = document.getElementById('modalReviews');
    
    if (currentProduct.reviews.length === 0) {
        reviewsContainer.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-chat-dots"></i>
                <p>No reviews yet. Be the first to review this product!</p>
            </div>
        `;
        return;
    }
    
    reviewsContainer.innerHTML = currentProduct.reviews.map(review => `
        <div class="border-bottom pb-3 mb-3">
            <div class="d-flex align-items-center mb-2">
                <img src="${review.userAvatar}" class="rounded-circle me-2" style="width: 32px; height: 32px;" alt="${review.userName}">
                <div>
                    <h6 class="mb-0">${review.userName}</h6>
                    <div class="stars">
                        ${generateStars(review.rating)}
                    </div>
                </div>
                <small class="text-muted ms-auto">${review.date}</small>
            </div>
            <p class="mb-0">${review.comment}</p>
        </div>
    `).join('');
}

function showReviewForm() {
    document.getElementById('reviewForm').style.display = 'block';
    selectedRating = 0;
    updateRatingDisplay();
}

function hideReviewForm() {
    document.getElementById('reviewForm').style.display = 'none';
    document.getElementById('reviewText').value = '';
    selectedRating = 0;
    updateRatingDisplay();
}

function updateRatingDisplay() {
    const stars = document.querySelectorAll('.rating-input i');
    stars.forEach((star, index) => {
        if (index < selectedRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function highlightStars(rating) {
    const stars = document.querySelectorAll('.rating-input i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitReview() {
    const reviewText = document.getElementById('reviewText').value.trim();
    
    if (selectedRating === 0) {
        showToast('Please select a rating', 'error');
        return;
    }
    
    if (!reviewText) {
        showToast('Please write a review', 'error');
        return;
    }
    
    // Add review to product (in a real app, this would be sent to a server)
    const newReview = {
        id: Date.now(),
        userId: 'user1',
        userName: 'Anonymous User',
        userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&auto=format',
        rating: selectedRating,
        comment: reviewText,
        date: new Date().toLocaleDateString()
    };
    
    currentProduct.reviews.push(newReview);
    
    // Reload reviews
    loadProductReviews();
    hideReviewForm();
    showToast('Review submitted successfully!', 'success');
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    
    if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    showToast('Thank you for subscribing to our newsletter!', 'success');
    document.getElementById('newsletterEmail').value = '';
}

// Utility functions
function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
    toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    toast.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 3000);
}

// Initialize page
window.addEventListener('load', function() {
    // Add fade-in animation to page content
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.add('fade-in');
    });
});