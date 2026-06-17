# Portfolio Website - Deployment Guide

## Quick Setup Instructions

### Option 1: Push to GitHub (Recommended)

1. Download the portfolio code from the workspace
2. In your terminal, navigate to the `Portfolio-website` folder
3. Run these commands:

```bash
# Initialize git (if not already done)
git init
git remote add origin https://github.com/Pearltechie/Portfolio-website.git

# Add and commit all files
git add .
git commit -m "feat: Initial portfolio website with animations and interactions"

# Push to GitHub
git push -u origin main --force
```

### Option 2: Deploy Directly to Vercel

1. Download the portfolio code
2. Go to [vercel.com](https://vercel.com)
3. Log in and click "Import Project"
4. Upload the portfolio folder or connect to GitHub
5. Vercel will auto-detect Next.js
6. Click Deploy!

## What's Included

### Sections
- **Hero** - Animated intro with parallax effects
- **About** - Your background and highlights
- **Skills** - Animated skill bars
- **Projects** - Video demos with modal playback
- **Contact** - Formspree integration + social links
- **Footer** - Social links + back-to-top

### Features
- Custom animated cursor with hover effects
- Framer Motion animations throughout
- Dark theme with gradient accents
- Fully responsive design
- Smooth scroll behavior
- YouTube video embeds (auto-play in modal)
- Formspree contact form
- All your social media links

### Files Structure
```
src/
├── app/
│   ├── globals.css    # Global styles + animations
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Main page
├── components/
│   ├── About.tsx
│   ├── Contact.tsx    # Formspree integrated
│   ├── CustomCursor.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx   # YouTube videos
│   ├── Skills.tsx
│   └── icons/
│       └── SocialIcons.tsx
└── hooks/
    └── useScrollReveal.ts
```

## After Deployment

1. Your site will be live at `https://your-username.vercel.app`
2. Update the project links in `src/components/Projects.tsx` with actual URLs
3. Add your real profile photo to `public/` folder
4. Customize colors in `src/app/globals.css`

## Customization

### Colors
Edit CSS variables in `globals.css`:
```css
:root {
  --accent: #6366f1;           /* Primary accent */
  --accent-secondary: #ec4899; /* Pink accent */
  --accent-tertiary: #22d3ee;  /* Cyan accent */
  --background: #0a0a0a;       /* Background */
}
```

### Contact Form
The Formspree form is already configured with your endpoint. If you want to change it, update the URL in `src/components/Contact.tsx`.

### Social Links
All social links are in the component files:
- `src/components/Navigation.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

## Need Help?

If you encounter any issues:
1. Make sure you're logged into GitHub/Vercel
2. Check that your GitHub token has "repo" permissions
3. Try clearing browser cache if deployment fails

---

Built with ❤️ by OpenHands
