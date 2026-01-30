# SoundPro X1 - Product Landing Page

A modern, responsive product landing page built with React and Tailwind CSS. This project demonstrates fundamental React concepts including component architecture, state management, and responsive design patterns.

![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)

<H2>Live Preview Site: https://soundpro.vercel.app/</H2>
<img width="2044" height="1108" alt="SCR-20260130-tisk" src="https://github.com/user-attachments/assets/8b2851ae-959d-4ae7-ba1a-175e994a334e" />

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/davidupdesign/product-landing-page.git

# Navigate to project directory
cd product-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
product-landing-page/
├── public/
│   ├── headphones-hero.avif
│   ├── benefit-focus.jpg
│   ├── benefit-travel.jpg
│   └── benefit-music.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Benefits.jsx
│   │   ├── FAQ.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
|   |__ data.js
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
|__ LICENSE
```

## Features

### React Concepts

- Component-based architecture
- useState for state management
- Array mapping for dynamic rendering
- Conditional rendering and styling
- Props and component composition
- Form handling with validation

### UI Features

- Mobile-first responsive design
- Hamburger menu for mobile navigation
- Smooth scroll navigation
- Interactive FAQ accordion
- Email validation with regex
- Image optimization with object-fit

## Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Customization

### Changing Content

- **Product info**: Edit text in `Hero.jsx`, `Features.jsx`, `Benefits.jsx`
- **FAQ items**: Modify the `faqs` array in `FAQ.jsx`
- **Navigation links**: Update `navLinks` array in `Header.jsx`

### Changing Images

Replace files in the `public/` folder:

- `headphones-hero.avif` - Main product image (recommended: 600x600px+)
- `benefit-focus.jpg` - First benefit image
- `benefit-travel.jpg` - Second benefit image
- `benefit-music.jpg` - Third benefit image

### Changing Colors

Edit Tailwind classes throughout components. Primary colors used:

- `bg-black` / `text-white` - Buttons and dark sections
- `bg-gray-100` - Light backgrounds
- `text-gray-600` - Secondary text

## Deployment

### Vercel

```bash
npm run build
# Deploy the `dist` folder to Vercel
```

### Netlify

```bash
npm run build
# Deploy the `dist` folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push `dist` folder contents to gh-pages branch
```

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons and styling with [Tailwind CSS](https://tailwindcss.com)
- Built with [Vite](https://vitejs.dev) + [React](https://react.dev)
