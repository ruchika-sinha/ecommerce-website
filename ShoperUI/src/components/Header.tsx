import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCategoryClick: (category: string) => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ 
  cartItemsCount, 
  onCategoryClick, 
  onSearchChange, 
  searchQuery 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'kids', name: 'Kids' },
    { id: 'deals', name: "Today's Deals" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=40&h=40&fit=crop&auto=format"
              alt="ShoperUI Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <h1 className="text-2xl font-bold text-blue-600">ShoperUI</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryClick(category.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {category.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Account</span>
            </button>
            
            <button className="relative text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryClick(category.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                >
                  {category.name}
                </button>
              ))}
              
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 py-2 transition-colors">
                <User className="w-5 h-5" />
                <span>My Account</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;