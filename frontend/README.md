# Uday Jain - Cybersecurity Portfolio

A premium static portfolio website showcasing cybersecurity expertise, built with React and enhanced with glassmorphism effects.

## 🚀 Features

- **Static Frontend Only** - No backend server or database required
- **EmailJS Integration** - Contact form sends emails directly to Gmail
- **Resume Download** - Static PDF served from public folder
- **Glassmorphism Design** - Premium visual effects with backdrop blur
- **Responsive Design** - Works on all devices
- **Fast Performance** - Optimized for speed and SEO

## 🛠️ Tech Stack

- React 19
- Tailwind CSS
- shadcn/ui components
- EmailJS for contact form
- Lucide React icons

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About section
│   ├── Experience.jsx  # Work experience
│   ├── Projects.jsx    # Portfolio projects
│   ├── Certifications.jsx # Certifications & education
│   ├── Contact.jsx     # Contact form
│   ├── Header.jsx      # Navigation
│   └── Footer.jsx      # Footer
├── data/
│   └── mock.js         # Portfolio data & EmailJS config
├── hooks/
│   └── use-toast.js    # Toast notifications
└── App.js              # Main app component

public/
└── Uday_Jain_Resume.pdf # Resume file
```

## 🔧 Setup & Development

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Configure EmailJS** (for contact form):
   - Follow instructions in `EMAILJS_SETUP.md`
   - Update credentials in `src/data/mock.js`

3. **Start development server:**
   ```bash
   yarn start
   ```

4. **Build for production:**
   ```bash
   yarn build
   ```

## 📧 EmailJS Configuration

The contact form uses EmailJS to send emails directly to Gmail without a backend server.

**Template Format:**
- Subject: `New Portfolio Message from {{from_name}}`
- Body includes: Name, Email, Organisation, Message

See `EMAILJS_SETUP.md` for detailed setup instructions.

## 🚀 Deployment

This is a static site that can be deployed to:
- Netlify (recommended)
- Vercel
- GitHub Pages
- Any static hosting service

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

## 📄 Portfolio Content

All portfolio content is stored in `src/data/mock.js`:
- Personal information
- Skills and expertise
- Work experience
- Projects
- Certifications
- Education

## 🎨 Design Features

- **Dark Theme** with orange accents
- **Glassmorphism Effects** with backdrop blur
- **Smooth Animations** and hover effects
- **Premium Typography** with gradient text
- **Responsive Layout** for all screen sizes
- **Accessibility** compliant components

## 🔒 Security Focus

Portfolio specifically designed for cybersecurity professionals:
- Burp Suite expertise highlighted
- SBOM analysis tools showcased
- Security certifications from Qualys, Databricks, EC Council, Outskills
- Professional security experience timeline

## 📱 Performance

- Optimized images and assets
- Minified CSS and JavaScript
- GPU-accelerated animations
- Fast loading times
- SEO optimized

## 🤝 Contact

For questions about this portfolio:
- Email: udayjain1799@gmail.com
- LinkedIn: [linkedin.com/in/uday-jain17/](https://www.linkedin.com/in/uday-jain17/)

---

Built with ❤️ for cybersecurity excellence
