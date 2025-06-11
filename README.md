# ShoperUI - Modern E-commerce Website

A beautiful, responsive e-commerce website built with React, TypeScript, and Tailwind CSS. ShoperUI provides a seamless shopping experience across all devices with modern design and advanced features.

![ShoperUI Preview](https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop)

## Features

### Homepage
- **Modern Hero Section**: Eye-catching banner with call-to-action
- **Featured Categories**: Men's, Women's, Kids, and Today's Deals
- **New Arrivals**: Showcase of latest products
- **Responsive Navigation**: Mobile-friendly header with search functionality

### Product Management
- **Product Grid/List View**: Clean, organized product display
- **Advanced Search & Filtering**: Filter by category and search by name
- **Product Details Modal**: 
  - Image zoom functionality
  - Multiple product images
  - Customer reviews system
  - Quantity selection
  - Add to cart with animations

### Shopping Cart
- **Dynamic Cart**: Real-time updates
- **Quantity Management**: Increase/decrease product quantities
- **Price Calculations**: Automatic subtotal, tax, and shipping calculations
- **Persistent Storage**: Cart data saved in localStorage

### Checkout Process
- **Comprehensive Form**: Shipping address and payment information
- **Order Summary**: Detailed breakdown of costs
- **Coupon System**: Apply discount codes (try "SAVE10")
- **Delivery Estimation**: Calculated delivery dates

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Mobile gestures and interactions
- **Cross-Browser**: Compatible with all modern browsers
- **Android Optimized**: Perfect performance on Android devices

### Design Excellence
- **Modern UI/UX**: Clean, professional interface
- **Smooth Animations**: Hover effects and micro-interactions
- **Consistent Theming**: Professional color palette
- **Accessibility**: WCAG compliant design

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks
- **Storage**: localStorage (client-side)
- **Images**: Unsplash API

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shoperui.git
   cd shoperui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Firebase Integration (Backend Setup)

To add Firebase backend functionality:

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database

2. **Install Firebase SDK**
   ```bash
   npm install firebase
   ```

3. **Configure Firebase**
   ```javascript
   // src/firebase/config.ts
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';
   
   const firebaseConfig = {
     // Your config
   };
   
   export const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

4. **Database Collections**
   ```
   products/          # Product catalog
   orders/           # Order history
   users/            # User profiles
   reviews/          # Product reviews
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Homepage hero section
│   ├── ProductCard.tsx # Product display card
│   ├── ProductModal.tsx # Product details modal
│   ├── Cart.tsx        # Shopping cart sidebar
│   ├── Checkout.tsx    # Checkout form
│   └── Footer.tsx      # Site footer
├── data/               # Mock data
│   └── products.ts     # Product catalog
├── types/              # TypeScript definitions
│   └── index.ts        # Type definitions
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Key Components

### Product Management
- **ProductCard**: Displays product with image, price, rating
- **ProductModal**: Detailed view with zoom, reviews, quantity selection

### Shopping Experience
- **Cart**: Slide-out cart with quantity management
- **Checkout**: Multi-step checkout with address and payment forms

### User Interface
- **Header**: Responsive navigation with search and cart
- **Footer**: Links, newsletter signup, social media

## 📊 Features Roadmap

### Phase 1(Current)
- [x] Responsive design
- [x] Product catalog
- [x] Shopping cart
- [x] Checkout process
- [x] Search & filtering

### Phase 2(Next)
- [ ] Firebase integration
- [ ] User authentication
- [ ] Order tracking
- [ ] Payment processing (Stripe)
- [ ] Admin dashboard

### Phase 3(Future)
- [ ] Wishlist functionality
- [ ] Product recommendations
- [ ] Customer support chat
- [ ] Multi-language support

## Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Lazy loading and WebP support

## Customization

### Colors
```css
/* Primary Colors */
--blue-600: #2563eb;
--blue-700: #1d4ed8;

/* Accent Colors */
--green-500: #10b981;
--red-500: #ef4444;
```

### Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

## 🚀 Deployment Options

### Netlify (Recommended)
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy with Vercel CLI
```

### Azure Static Web Apps
```bash
npm run build
# Deploy to Azure Static Web Apps
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- **Images**: [Unsplash](https://unsplash.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Framework**: [Tailwind CSS](https://tailwindcss.com/)

---

**ShoperUI** - *Built with ❤️ for the modern web*
