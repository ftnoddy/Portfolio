# 🚀 Modern React Portfolio

A stunning, responsive portfolio website built with React, Vite, and Tailwind CSS. Features dark/light mode, smooth animations, and a professional design showcasing skills, projects, and experience.

## ✨ Features

- **🎨 Modern UI/UX**: Clean, professional design with gradient effects and animations
- **🌓 Dark/Light Mode**: Toggle between themes with smooth transitions
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎭 Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **📄 Resume Integration**: Direct download of actual resume PDF
- **📧 Contact Form**: Interactive contact form with validation and animations
- **🔧 Real Data**: Actual professional experience and project information

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS animations
- **Build Tool**: Vite
- **Icons**: React Feather
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 🏗️ Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with enhanced styling
│   │   ├── Hero.jsx            # Hero section with profile photo
│   │   ├── Skills.jsx          # Skills showcase with progress bars
│   │   ├── Projects.jsx        # Project portfolio with GitHub stats
│   │   ├── Experience.jsx      # Professional experience timeline
│   │   ├── Contact.jsx         # Contact form and information
│   │   └── Footer.jsx          # Footer with social links
│   ├── assets/
│   │   ├── AtindraMohanDasResume.pdf
│   │   └── WhatsApp Image 2025-06-12 at 18.28.48.jpeg
│   ├── App.jsx                 # Main app component
│   ├── index.css              # Global styles and animations
│   └── main.jsx               # App entry point
├── public/
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ftnoddy/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Name, title, description
- `src/components/Experience.jsx` - Work experience details
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Contact information

### Assets
Replace the following files in `src/assets/`:
- Profile photo
- Resume PDF file

### Styling
- Modify `src/index.css` for global styles
- Update Tailwind classes in components for design changes
- Customize color scheme by updating gradient classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌟 Key Components

### Header
- Sticky navigation with backdrop blur
- Enhanced typography with gradient logo
- Animated underline effects on hover
- Mobile-friendly hamburger menu

### Hero Section
- Animated profile photo with floating elements
- Gradient text effects and animations
- Call-to-action buttons
- Tech stack badges

### Skills Section
- Animated progress bars
- Categorized skill sets
- Statistics showcase
- Hover animations

### Projects Section
- GitHub-style project cards
- Project categories and status badges
- Detailed descriptions and tech stacks
- Responsive grid layout

### Experience Section
- Timeline-based layout
- Company details and achievements
- Technology tags
- Education and certifications

### Contact Section
- Interactive contact form
- Contact information cards
- Social media links
- Availability status

## 🎭 Animations

- **Fade-in animations** on scroll using Intersection Observer
- **Hover effects** on cards and buttons
- **Loading states** for form submissions
- **Smooth transitions** between theme modes
- **Custom keyframe animations** for enhanced UX

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-feather": "^2.0.10",
  "vite": "^6.0.1"
}
```

## 🚀 Deployment

### Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Atindra Mohan Das**
- Backend Software Developer
- 3+ Years Experience in MERN Stack
- Specialized in Node.js, MongoDB, and AWS

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the fast build tool
- React Feather for beautiful icons

---

⭐ **Star this repository if you found it helpful!**
