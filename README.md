# ByteMeld - Professional Web Development Agency

A modern, secure, and fully-featured web application for a professional web development agency. Built with Next.js, TypeScript, and cutting-edge security practices.

![ByteMeld Screenshot](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop)

## 🚀 Features

### Frontend
- **Modern Design**
  - Responsive layout with mobile-first approach
  - Dark/Light mode with system preference support
  - Smooth animations with Framer Motion
  - Professional UI components from shadcn/ui
  - Grid pattern backgrounds with parallax effects
  - Custom 3D card effects
  - Enhanced hover states
  - Custom scrollbar styling
  - Loading skeletons
  - Testimonials carousel
  - Interactive project showcase
  - Team member cards
  - Contact form with validation
  - Newsletter subscription
  - Scheduling integration

### Security Features
- **Advanced Security Measures**
  - CSRF protection with token validation
  - XSS prevention with DOMPurify
  - Content Security Policy (CSP)
  - Secure data encryption with CryptoJS
  - JWT token handling with Jose
  - Rate limiting implementation
  - Secure session management
  - Input sanitization
  - File validation
  - Password strength validation
  - Secure storage handling
  - HTTP security headers
  - CORS protection
  - SSL/TLS enforcement

### Performance
- **Optimizations**
  - Code splitting and lazy loading
  - Image optimization
  - Font optimization
  - Bundle size optimization
  - Tree shaking
  - Caching strategies
  - Preloading and prefetching
  - Responsive images
  - Minification
  - Compression

### Development Features
- **Modern Stack**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Framer Motion for animations
  - shadcn/ui components
  - React Hook Form for forms
  - Zod for validation
  - Embla Carousel
  - Lucide icons

## 🛠️ Tech Stack

### Frontend
- Next.js 14
- TypeScript 5.3
- Tailwind CSS 3.4
- Framer Motion 11
- shadcn/ui
- React Hook Form
- Zod
- Embla Carousel
- Lucide React

### Security
- CryptoJS
- DOMPurify
- Jose (JWT)
- Secure Web Storage
- CSP Headers
- CORS

### Development Tools
- ESLint
- TypeScript ESLint
- Prettier
- PostCSS
- Autoprefixer

## 📦 Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Git 2.x or later

## 🚀 Getting Started

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/bytemeld.git
cd bytemeld
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## 🔒 Security Configuration

1. Set up environment variables in `.env.local`:
\`\`\`env
NEXT_PUBLIC_ENCRYPTION_KEY=your-secure-key
NEXTAUTH_SECRET=your-auth-secret
\`\`\`

2. Configure security headers in `middleware.ts`

3. Enable HTTPS in production

## 📁 Project Structure

\`\`\`
bytemeld/
├── app/                 # Next.js pages and layouts
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── schedule/       # Schedule page
│   ├── services/       # Services page
│   ├── work/           # Portfolio page
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── layout/         # Layout components
│   ├── ui/             # UI components
│   └── testimonials/   # Testimonial components
├── lib/               # Utilities and helpers
│   ├── security.ts    # Security utilities
│   └── utils.ts       # Helper functions
├── public/            # Static assets
└── types/             # TypeScript types
\`\`\`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run security-audit` - Run security audit

## 🚀 Deployment

1. Build the application:
\`\`\`bash
npm run build
\`\`\`

2. Deploy the `out` directory to your hosting provider

## 🔒 Security Best Practices

- Regular security audits
- Input validation
- Output sanitization
- HTTPS enforcement
- Security headers
- Rate limiting
- CSRF protection
- XSS prevention
- Secure storage
- File validation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/bytemeld](https://github.com/yourusername/bytemeld)