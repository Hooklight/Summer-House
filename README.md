# Summer House Med Spa Website

A modern, professional medical spa website built for summerhousemedspa.com to replace the current Squarespace site.

## Features

- **10 Complete Pages:**
  - Homepage with hero, services, testimonials, and CTAs
  - Comprehensive Services page
  - Dedicated treatment pages (Botox, Fillers, GLP-1 Weight Loss, Laser, Peptides)
  - About page with team information
  - Contact page with booking form
  - Blog index (ready for CMS integration)

- **Design:**
  - Professional medical spa aesthetic
  - Mobile-responsive (mobile-first approach)
  - Accessible (WCAG 2.1 AA compliant)
  - Fast loading with optimized Core Web Vitals
  - Consistent Summer House branding (forest green #2C5F2D / cream #F7F4F0)

- **Technical:**
  - Static HTML/CSS/vanilla JavaScript
  - Netlify Forms integration (contact form & newsletter)
  - SEO-optimized with meta tags and schema markup
  - Google Maps integration
  - LocalBusiness schema markup
  - Social meta tags (Open Graph, Twitter Card)

## File Structure

```
summerhousemedspa/
├── index.html              # Homepage
├── services.html           # All services overview
├── glp1-weight-loss.html   # Medical weight loss page
├── botox.html              # Neuromodulators page
├── fillers.html            # Dermal fillers page
├── laser.html              # Laser treatments page
├── peptides.html           # Peptide therapy page
├── about.html              # About team/practice
├── contact.html            # Contact form & info
├── blog.html               # Blog index
├── styles.css              # Global styles
└── README.md               # This file
```

## Deployment to Netlify

### Quick Deploy

1. **Push to GitHub:**
   ```bash
   cd /Users/JohnSimon_1/summer-house-domains/summerhousemedspa
   git init
   git add .
   git commit -m "Initial commit: Summer House Med Spa website"
   git branch -M main
   git remote add origin [YOUR_GITHUB_REPO_URL]
   git push -u origin main
   ```

2. **Deploy to Netlify:**
   - Log in to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository
   - Configure build settings:
     - **Build command:** Leave empty (static site)
     - **Publish directory:** `.` (root)
   - Click "Deploy site"

3. **Configure Custom Domain:**
   - In Netlify dashboard → Domain settings
   - Add custom domain: `summerhousemedspa.com`
   - Follow DNS configuration instructions
   - Enable HTTPS (automatic with Netlify)

### Forms Setup

Forms are already configured for Netlify Forms. After deployment:

1. Go to Netlify dashboard → Forms
2. Enable form notifications
3. Configure email notifications for:
   - `consultation` form (booking requests)
   - `newsletter` form (email subscriptions)

## Pre-Launch Checklist

### Content Updates Needed

- [ ] Replace placeholder images with professional photos
- [ ] Update Jessica's bio, credentials, and professional photo
- [ ] Add actual business phone number (replace XXX-XXX-XXXX)
- [ ] Update exact address in Preston Hollow
- [ ] Configure Google Maps embed with correct location
- [ ] Add social media links (Facebook, Instagram, Twitter)
- [ ] Create and add favicon.ico
- [ ] Add actual business hours if different from template
- [ ] Review and customize all service descriptions
- [ ] Add pricing information (if publicly displayed)

### Technical Setup

- [ ] Update Google Maps API key (if using API)
- [ ] Set up Google Analytics
- [ ] Configure Google Search Console
- [ ] Create and submit sitemap.xml
- [ ] Set up Facebook Pixel (if using)
- [ ] Test all forms in production
- [ ] Test mobile responsiveness on real devices
- [ ] Run Lighthouse audit for performance/accessibility
- [ ] Set up 301 redirects from old Squarespace URLs
- [ ] Configure SSL certificate (automatic with Netlify)

### SEO

- [ ] Verify meta descriptions are unique for each page
- [ ] Submit to Google Search Console
- [ ] Create robots.txt if needed
- [ ] Set up Google My Business
- [ ] Add structured data testing (schema.org validator)

## Customization Guide

### Colors

Update the CSS variables in `styles.css`:
```css
:root {
  --forest-green: #2C5F2D;
  --cream: #F7F4F0;
  --white: #FFFFFF;
  /* etc. */
}
```

### Images

Replace placeholder image comments with actual `<img>` tags:
```html
<!-- Before -->
<span>Professional Team Photo</span>

<!-- After -->
<img src="images/team-photo.jpg" alt="Summer House Med Spa team">
```

### Contact Information

Update in all pages (recommendation: use find & replace):
- Phone: Replace `(XXX) XXX-XXXX`
- Email: Update `info@summerhousemedspa.com` if different
- Address: Add specific street address in Preston Hollow

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Performance

Optimized for:
- First Contentful Paint < 1.8s
- Time to Interactive < 3.8s
- Cumulative Layout Shift < 0.1
- Lighthouse score 90+

## Support & Maintenance

### Updating Content

1. Edit HTML files directly
2. Commit changes to GitHub
3. Netlify auto-deploys on push to main branch

### Adding Blog Posts

Blog is currently static with placeholder posts. To add a CMS:
- **Option 1:** Netlify CMS (free, git-based)
- **Option 2:** Contentful, Sanity, or Strapi
- **Option 3:** WordPress headless CMS

## License

Proprietary - © 2026 Summer House Med Spa. All rights reserved.

## Contact

For website support: [Your contact information]
