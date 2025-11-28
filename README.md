# Simon Tian - Personal Portfolio Website

A modern, professional personal portfolio website built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Glassmorphism effects, gradients, shadows, and rounded corners
- ✨ **Smooth Animations**: Full-page animations and interactive hover effects using Framer Motion
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Built with Next.js 14 for optimal performance
- 🎯 **Sections**:
  - Hero section with animated background
  - About with key highlights
  - Work experience timeline
  - Projects showcase
  - Education history
  - Accomplishments and awards
  - Contact information with social links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

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

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Work experience
│   ├── Projects.tsx      # Projects showcase
│   ├── Education.tsx     # Education history
│   ├── Accomplishments.tsx # Awards & achievements
│   └── Contact.tsx       # Contact section
├── hooks/                # Custom React hooks
│   └── useInView.ts      # Intersection Observer hook
└── public/               # Static assets (add images here)
```

## Customization

### Adding Images

Replace the placeholder images in the `public/` directory with actual images:

- Profile photo for the hero section
- Project screenshots
- Any other visual assets

Update the image references in the components accordingly.

### Color Theme

The site uses a white/silver/gold metallic gradient palette. To customize colors, edit:
- `tailwind.config.ts` for Tailwind color palette
- `app/globals.css` for custom CSS variables and gradient definitions

### Content

Update content in each component file:
- Personal information in `components/Hero.tsx`
- Experience details in `components/Experience.tsx`
- Project information in `components/Projects.tsx`
- And so on...

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- Self-hosted with Docker

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading with Intersection Observer
- Code splitting with Next.js dynamic imports
- Optimized animations with Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

For questions or collaboration:
- Email: jt886@cornell.edu
- LinkedIn: [Simon Tian](https://www.linkedin.com/in/simon-ji%C4%81h%C3%A9-tian-1333a3156)
- GitHub: [SimonSaysGiveMeSmile](https://github.com/SimonSaysGiveMeSmile)

---

Built with ❤️ by Simon Tian

