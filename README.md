# Yassir Portfolio

A responsive personal portfolio built with HTML, Tailwind CSS v4, vanilla JavaScript and Vite.

## 1. Requirements
- Node.js (LTS)
- VS Code (recommended)

## 2. Install
Open the project folder in VS Code, then run:

```bash
npm install
```

## 3. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal (usually http://localhost:5173).

## 4. Build for production

```bash
npm run build
npm run preview
```

The production files will be generated in `dist/`.

## 5. Personalize before publishing
1. Replace `public/images/yassir.png` with your preferred portrait. Keep the same filename.
2. In `src/main.js`, replace `hello@example.com` with your real email in the contact form.
3. In `index.html`, replace the sample GitHub and LinkedIn profile URLs with your real profiles.
4. Replace sample GitHub project links with your repository URLs and add real live demo links.
5. Add your CV PDF at `public/cv/yassir-cv.pdf`, then add a Download CV link if you want one.
6. Verify the education and experience dates/titles before publishing.

## 6. Main files
- `index.html`: page structure and sections.
- `src/style.css`: Tailwind import, custom styles, responsive layout and animations.
- `src/main.js`: theme, language, mobile menu, typing effect, reveal animation, 3D tilt and contact form.
- `vite.config.js`: Vite + Tailwind CSS v4 integration.

## Notes
- Theme and language preferences are saved in localStorage.
- The contact form uses `mailto:`. It opens the visitor's email application; it does not send messages to a server.
- The project is a front-end portfolio. It does not require a backend.
