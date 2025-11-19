# Paramount Tattoo - Tattoo Artist Portfolio

A modern, mobile-responsive portfolio website for a fine line and tiny tattoo artist. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Dark, edgy aesthetic with elegant typography
- 📱 **Mobile-Responsive**: Optimized for Instagram and mobile browsing
- ⚡ **Fast Performance**: Built with Vite for lightning-fast builds
- 📅 **Calendly Integration**: Seamless appointment booking
- 🖼️ **Filterable Gallery**: Showcase your work with category filters
- ❓ **FAQ Section**: Answer common client questions
- 🚀 **Vercel Ready**: Pre-configured for easy deployment

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Calendly** - Appointment booking integration
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd paramount-tattoo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Calendly URL:
```
VITE_CALENDLY_URL=https://calendly.com/your-username
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Configuration

### Calendly Integration

1. Sign up for a [Calendly](https://calendly.com) account
2. Create your event types
3. Copy your Calendly URL (e.g., `https://calendly.com/your-username/30min`)
4. Add it to your `.env` file as `VITE_CALENDLY_URL`

### Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Content**: Update component files in `src/components/`
- **Images**: Replace images in `public/images/`
- **Fonts**: Modify font families in `tailwind.config.js`

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variable (`VITE_CALENDLY_URL`) in Vercel's dashboard
4. Deploy!

The `vercel.json` file is already configured for optimal Vercel deployment.

## Project Structure

```
src/
├── components/
│   ├── About.tsx       # Artist bio section
│   ├── Contact.tsx     # Contact form and Calendly integration
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Gallery.tsx     # Portfolio gallery with filters
│   ├── Hero.tsx        # Hero section
│   └── Layout.tsx      # Main layout with navigation
├── App.tsx             # Main app component
├── main.tsx            # Entry point
├── index.css           # Global styles
└── vite-env.d.ts       # TypeScript environment types
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## License

Copyright (c) 2025 Paramount Tattoo. All rights reserved.

This portfolio website and all its content are proprietary and protected by copyright laws.
Unauthorized use, reproduction, or distribution is prohibited.

For licensing inquiries, please contact: contact@paramounttattoos.com
