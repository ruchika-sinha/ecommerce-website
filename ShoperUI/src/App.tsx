import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { Product, CartItem } from './types';
import { products } from './data/products';

type Page = 'home' | 'products' | 'cart' | 'checkout';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shoperui-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('shoperui-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || 
                           selectedCategory === 'deals' ? true : 
                           product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const isDealsCategory = selectedCategory === 'deals' ? product.isSale || product.isNew : true;
    
    return matchesCategory && matchesSearch && isDealsCategory;
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('products');
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.product.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage('checkout');
  };

  const handlePlaceOrder = (orderData: any) => {
    // In a real app, this would send the order to a backend
    alert('Order placed successfully! You will receive a confirmation email shortly.');
    setCartItems([]);
    setCurrentPage('home');
  };

  const handleShopNow = () => {
    setCurrentPage('products');
    setSelectedCategory('all');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'checkout':
        return (
          <Checkout
            items={cartItems}
            onBack={() => setIsCartOpen(true)}
            onPlaceOrder={handlePlaceOrder}
          />
        );
      
      case 'products':
      case 'home':
      default:
        return (
          <div className="min-h-screen bg-gray-50">
            {currentPage === 'home' && (
              <Hero onShopNowClick={handleShopNow} />
            )}
            
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
              {currentPage === 'home' && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
                  <div className="grid md:grid-cols-4 gap-6">
                    {[
                      { id: 'men', name: 'Men\'s Fashion', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop' },
                      { id: 'women', name: 'Women\'s Fashion', image: 'https://images.unsplash.com/photo-1494790108755-2616c830e5d8?w=300&h=200&fit=crop' },
                      { id: 'kids', name: 'Kids Collection', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5d2?w=300&h=200&fit=crop' },
                      { id: 'deals', name: 'Today\'s Deals', image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=300&h=200&fit=crop' },
                    ].map((category) => (
                      <div
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-semibold text-lg">{category.name}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-center mb-8">
                  {currentPage === 'home' ? 'New Arrivals' : 
                   selectedCategory === 'all' ? 'All Products' :
                   selectedCategory === 'deals' ? 'Today\'s Deals' :
                   `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}'s Fashion`}
                </h2>
                
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {(currentPage === 'home' ? filteredProducts.slice(0, 8) : filteredProducts).map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                        onProductClick={setSelectedProduct}
                      />
                    ))}
                  </div>
                )}
              </div>

              {currentPage === 'home' && filteredProducts.length > 8 && (
                <div className="text-center">
                  <button
                    onClick={handleShopNow}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </main>

            <Footer />
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Header
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCategoryClick={handleCategoryClick}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      {renderPage()}

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Sidebar */}
      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors z-40"
      >
        <span className="sr-only">Open Cart</span>
        <div className="relative">
          🛒
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </div>
      </button>
    </div>
  );
}

export default App;