# 🚀 Portfolio — Dark & Futuristic

A sleek, animated portfolio built with **React + Tailwind CSS + Vite**.

## ✨ Features

- 🌗 **Dark / Light theme toggle** (persists via localStorage)
- 🔤 **Typewriter animation** in Hero section
- 📊 **Animated skill bars** triggered on scroll
- 🗂️ **Filterable project grid**
- 📬 **Contact form** with validation
- 🖱️ **Custom cursor** (desktop)
- 📱 **Fully responsive** with mobile drawer nav
- ⚡ **Intersection Observer** for scroll-triggered animations

## 🛠️ Tech Stack

- React 18
- Tailwind CSS 3
- Vite 5
- Lucide React (icons)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky nav + theme toggle + mobile drawer
│   ├── Hero.jsx         # Typewriter + CTA + social links
│   ├── About.jsx        # Bio + stats cards
│   ├── Skills.jsx       # Animated skill bars + tech badges
│   ├── Projects.jsx     # Filterable project cards
│   ├── Contact.jsx      # Contact form with validation
│   ├── Footer.jsx
│   └── Cursor.jsx       # Custom cursor (desktop only)
├── hooks/
│   ├── useTheme.js      # Dark/light toggle with localStorage
│   └── useScrollSpy.js  # Active nav highlight on scroll
├── index.css            # Tailwind + CSS variables + custom styles
├── App.jsx
└── main.jsx
```

## 🎨 Customization

**Change your name/role**: Edit `Hero.jsx` → `ROLES` array and name string  
**Update projects**: Edit `Projects.jsx` → `PROJECTS` array  
**Update skills**: Edit `Skills.jsx` → `SKILL_CATEGORIES`  
**Change colors**: Edit `index.css` → `:root` and `.dark` CSS variables  
**Change accent color**: Update `--accent` and `--accent2` in `index.css`

## 🌐 Deployment

Deploy instantly on **Vercel** or **Netlify**:

```bash
npm run build
# Upload /dist folder to your host
```
