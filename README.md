# Developer Portfolio (React + Vite + Tailwind + Framer Motion)

Premium-style developer portfolio website with:

- Sticky responsive navbar with smooth-scroll navigation
- Dark mode toggle
- Full-screen hero with typing animation
- Animated About, Skills, Projects, Timeline, Contact sections
- Project cards with hover motion + 3D tilt effect
- Formspree-ready contact form
- Modern dark-first visual direction

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Project Structure

```text
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── profile.jpg
│   │   ├── zion.png
│   │   ├── gesture.png
│   │   └── clarify.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Timeline.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── DarkModeToggle.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Setup

```bash
npm install
npm run dev
```

## Personalization

- Replace placeholder links in:
  - `src/data/projects.js`
  - `src/components/Contact.jsx`
  - `src/components/Footer.jsx`
- Add your real `public/resume.pdf` for the resume download button.
- Replace placeholder images in `src/assets/` with your actual project/profile images.
- Set your Formspree endpoint in `src/components/Contact.jsx`.
