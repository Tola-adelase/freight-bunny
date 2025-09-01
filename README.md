# FreightBunny - UK to Nigeria Shipping

A modern, responsive website for FreightBunny, a shipping company specializing in air freight services between the UK and Nigeria.

## 🚀 Features

### ✅ **Phase 5: Dark Mode Toggle**
- Complete dark/light theme system
- Smooth transitions between themes
- Persistent theme preference
- Accessible theme toggle with proper ARIA labels

### ✅ **Phase 6: Complete Website Pages**
- **Homepage** - Hero section, services overview, tracking, newsletter signup
- **About Page** - Company story, team, mission, values
- **Services Page** - Detailed service offerings, pricing, comparisons
- **Contact Page** - Contact forms, office locations, FAQ
- **Pricing Page** - Transparent pricing structure, service tiers
- **Buy For Me Page** - Shopping service details, process flow

### ✅ **Phase 7: Technical Improvements**

#### **Performance Optimization**
- Lazy loading images with intersection observer
- Optimized font loading with preconnect
- Performance monitoring for Core Web Vitals
- Efficient component rendering

#### **SEO Enhancements**
- Comprehensive metadata for all pages
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for local business
- Sitemap.xml and robots.txt
- Semantic HTML structure
- Meta descriptions and keywords

#### **Accessibility Improvements**
- Skip links for keyboard navigation
- Proper ARIA labels and roles
- High contrast ratios
- Keyboard-friendly navigation
- Screen reader support
- Focus management

#### **PWA Support**
- Web app manifest
- Service worker ready
- Installable as app
- Offline capabilities
- App icons and splash screens

#### **Multi-language Support**
- Language selector component
- Support for English, Yorùbá, Igbo, Hausa, French
- Internationalization ready
- RTL support preparation

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Performance**: Core Web Vitals optimization
- **SEO**: Next.js metadata API
- **Accessibility**: WCAG 2.1 AA compliance

## 📱 Responsive Design

- Mobile-first approach
- Touch-friendly interface
- Optimized for all screen sizes
- Progressive enhancement
- Cross-browser compatibility

## 🎨 Design System

### Colors
- Primary: `#002147` (Navy Blue)
- Secondary: `#003366` (Dark Blue)
- Accent: `#0066CC` (Bright Blue)
- Success: `#10B981` (Green)
- Warning: `#F59E0B` (Yellow)
- Error: `#EF4444` (Red)

### Typography
- Font: Inter (Google Fonts)
- Responsive text sizing
- Proper line heights and spacing

### Components
- Consistent button styles
- Card layouts
- Form elements
- Navigation components
- Modal dialogs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/freightbunny.git
cd freightbunny
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
freightbunny/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── pricing/           # Pricing page
│   ├── buy-for-me/        # Buy For Me page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   └── ui/               # UI component library
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── images/           # Image assets
│   ├── manifest.json     # PWA manifest
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # SEO sitemap
└── README.md             # Project documentation
```

## 🎯 Key Features

### Homepage
- Hero section with call-to-action
- Service overview cards
- Package tracking functionality
- Newsletter signup
- Trust indicators

### Services Page
- Detailed service descriptions
- Interactive service cards
- Pricing information
- Service comparison table
- Specialized services section

### Contact Page
- Multiple contact methods
- Contact form with validation
- Office locations
- FAQ section
- Social media links

### Pricing Page
- Transparent pricing structure
- Service tier comparisons
- Additional services pricing
- Shipping examples
- Pricing FAQ

### Buy For Me Page
- Service process explanation
- Popular categories
- Pricing tiers
- Example requests
- Service benefits

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://freightbunny.com
NEXT_PUBLIC_CONTACT_EMAIL=info@freightbunny.com
NEXT_PUBLIC_PHONE_NUMBER=+44 739 217 1558
```

### SEO Configuration
Update metadata in `app/layout.tsx`:
- Site URL
- Contact information
- Social media links
- Google verification codes

## 📊 Performance

### Core Web Vitals Targets
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Optimization Techniques
- Image optimization with Next.js Image
- Font optimization with preconnect
- Code splitting and lazy loading
- Bundle analysis and optimization
- Performance monitoring

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email info@freightbunny.com or visit our website.

---

**FreightBunny** - Connecting UK & Nigeria with reliable shipping services.
