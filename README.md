# AI as a Service (AIaaS) Platform

A comprehensive AI as a Service platform that provides AI solutions for every industry and use case. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Comprehensive AI Services**: Machine Learning, Computer Vision, NLP, Predictive Analytics, Data Intelligence, and AI Automation
- **Industry Solutions**: Tailored AI solutions for Healthcare, Finance, Retail, Manufacturing, and more
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Scalable Architecture**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Full type safety for robust development
- **Mobile-First**: Responsive design that works on all devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
AIAAS/
├── app/
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Key Sections

### 🏠 Landing Page
- Hero section with compelling value proposition
- Navigation with smooth scroll to sections
- Mobile-responsive design

### 🤖 AI Services
- Machine Learning & Deep Learning
- Computer Vision & Image Analytics
- Natural Language Processing
- Predictive Analytics
- Data Intelligence
- AI Automation

### 🏭 Industries Covered
- Healthcare - Medical imaging, drug discovery
- Finance - Fraud detection, risk assessment
- Retail - Recommendation engines, demand forecasting
- Manufacturing - Quality control, predictive maintenance
- Transportation - Route optimization, autonomous systems
- Education - Personalized learning, content generation
- Real Estate - Property valuation, market analysis
- Agriculture - Crop monitoring, precision farming

### 💰 Indian Pricing Plans
- **Starter**: ₹8,499/month (was ₹12,999) - 35% OFF - Perfect for small businesses
- **Professional**: ₹24,999/month (was ₹39,999) - 37% OFF - Most Popular
- **Enterprise**: Custom pricing - Tailored solutions for large organizations

### 🔥 Latest 2024 AI Features
- **ChatGPT-style AI**: Custom business assistants in Hindi & English
- **Multimodal AI**: Text, image, audio, and video processing together
- **Fine-tuned LLMs**: Industry-specific language models for Indian businesses
- **Real-time APIs**: Sub-50ms response times for live applications
- **Regional Language AI**: Support for 25+ Indian languages
- **Private AI Cloud**: Secure on-premises deployment for sensitive data

### 🚀 Advanced Platform Features
- **Interactive AI Chat Assistant**: Floating chat widget with live demo
- **Hot AI Trends Section**: Latest 2024 AI technologies showcase
- **Live Statistics Dashboard**: Real-time platform metrics
- **Enhanced Testimonials**: 6 detailed success stories from Indian companies
- **Industry Success Stories**: Detailed case studies with ROI metrics
- **Advanced Animations**: Sophisticated hover effects and transitions

## Customization

### Colors
The design system uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue tones for main branding
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Purple tones for highlights

### Fonts
Uses Inter font family for clean, modern typography.

### Components
Reusable utility classes are defined in `globals.css`:
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.feature-card` - Service card styling
- `.glass-effect` - Glassmorphism effect

## 🚀 Deployment

### Static Hosting (Recommended)

The project is configured for static export and can be deployed to any static hosting service:

1. **Build and Export**:
```bash
npm run build
npm run export
```

2. **Deploy the `out` directory** to your hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting provider

### Platform-Specific Deployment

#### Vercel
```bash
npx vercel --prod
```

#### Netlify
```bash
npx netlify deploy --prod --dir=out
```

#### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. The workflow will automatically deploy on push to main

### Quick Deployment Script

Run the included deployment script:
```bash
./deploy.sh
```

### Configuration Files

- `vercel.json` - Vercel deployment configuration
- `netlify.toml` - Netlify deployment configuration
- `.nvmrc` - Node.js version specification

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support regarding this AIaaS platform, please contact the development team.

---

**Built with ❤️ for the future of AI-powered businesses** 

# Ecopyxle Brand (Logo + Wordmark)

The brand combines eco (best value, sustainable) and pyxle (the smallest digital unit, pixel) to reflect an AI‑as‑a‑service platform built on clarity and efficiency.

- Full color: `public/brand/ecopyxle-logo-color.svg`
- Monochrome: `public/brand/ecopyxle-logo-mono.svg`
- Showcase: visit `/brand`

Design choices:
- Colors: emerald + sky (eco) with royal ink (tech) for trust and innovation
- Forms: bold, modern sans; leaf notch on the “E”, seed in the “o”, pixel‑grid “X”
- Works at small sizes (avatar) and large (header, print)

Usage:
- Use color on light backgrounds; use mono for single‑ink or embossing
- Maintain padding equal to the height of the lowercase “e” around the mark 