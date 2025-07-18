# 🚀 Portfolio Website - Zaid Hafeez

A stunning, modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Responsive Design**: Perfect on all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Dark Theme**: Eye-catching black, white, and green color scheme
- **Smooth Navigation**: Navbar for desktop, sidebar for mobile
- **Interactive Sections**: Hero, About, Services, Contact
- **Animations**: Subtle Framer Motion animations for enhanced UX
- **Single Source of Truth**: Organized constants for easy content updates

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Languages**: JavaScript/JSX

## 📁 Project Structure

```
src/
├── assets/
│   ├── Icons.js          # All icons organized by category
│   └── Images.js         # All images and image paths
├── components/
│   ├── Navbar.jsx        # Desktop navigation
│   ├── Sidebar.jsx       # Mobile navigation
│   ├── ScrollToTop.jsx   # Scroll to top button
│   └── index.js          # Components export
├── constants/
│   ├── navigation.js     # Navigation items
│   ├── personalData.js   # Personal information
│   ├── services.js       # Services and tech stack
│   ├── projects.js       # Project data (for future use)
│   └── index.js          # Constants export
├── sections/
│   ├── HeroSection.jsx   # Hero/landing section
│   ├── AboutSection.jsx  # About me section
│   ├── ServicesSection.jsx # Services/tech stack
│   ├── ContactSection.jsx  # Contact form
│   └── index.js          # Sections export
├── App.jsx               # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles and Tailwind
```

## 🎨 Design System

### Colors (CSS Variables)
- **Primary**: `--color-primary` (#ffffff - White)
- **Secondary**: `--color-secondary` (#000000 - Black)
- **Accent**: `--color-accent` (#10b981 - Green-500)

### Key Features
- **Custom CSS Variables**: Consistent color usage throughout
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Framer Motion for enhanced UX
- **Single Source of Truth**: All data in constants folder

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zaidhafeezvu/zaidhafeezvu.github.io.git
   cd zaidhafeezvu.github.io
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

## 📝 Customization Guide

### 1. Update Personal Information
Edit `src/constants/personalData.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  email: "your@email.com",
  // ... update all fields
};
```

### 2. Update Services/Tech Stack
Edit `src/constants/services.js`:
```javascript
export const services = [
  {
    title: "Your Service",
    description: "Service description...",
    technologies: ["Tech1", "Tech2"],
    // ... customize services
  }
];
```

### 3. Add Your Images
- Add your profile photo to `public/images/`
- Update image paths in `src/assets/Images.js`
- Use Unsplash or Freepik for vectors and backgrounds

### 4. Customize Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  --color-accent: #your-color;
}
```

## 📂 Adding Content

### Adding New Sections
1. Create component in `src/sections/`
2. Export in `src/sections/index.js`
3. Import and use in `App.jsx`

### Adding Images
1. Place images in `public/images/`
2. Update paths in `src/assets/Images.js`
3. Import and use in components

### Adding Icons
1. Import from Lucide React in `src/assets/Icons.js`
2. Organize by category
3. Use throughout the app

## 🏗️ Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy**
   - GitHub Pages: Push to `main` branch
   - Vercel: Connect GitHub repository
   - Netlify: Drag and drop `dist` folder

## 📱 Responsive Design

- **Mobile First**: Sidebar navigation for small screens
- **Desktop**: Navbar for larger screens
- **Breakpoints**: Tailwind CSS responsive utilities
- **Smooth Transitions**: Between different screen sizes

## 🎯 Performance Optimizations

- **Vite**: Fast development and optimized builds
- **CSS**: Tailwind CSS for minimal bundle size
- **Images**: Optimized image loading
- **Animations**: Lightweight Framer Motion animations

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and pull requests!

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub](https://github.com/your-username)

---

Made with ❤️ by [Zaid Hafeez](https://github.com/zaidhafeezvu)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
