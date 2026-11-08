
import './style.css'

// =====================================
// 0. SETTINGS
// =====================================

const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

const finePointer = window.matchMedia(
  '(hover: hover) and (pointer: fine)'
).matches

// =====================================
// 1. THEME: DARK / LIGHT
// =====================================

const themeButton = document.querySelector('#theme-toggle')
const themeIcon = document.querySelector('#theme-icon')

function setTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')

  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀' : '☾'
  }

  localStorage.setItem('portfolio-theme', theme)
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark'
setTheme(savedTheme)

themeButton?.addEventListener('click', () => {
  const nextTheme = document.documentElement.classList.contains('dark')
    ? 'light'
    : 'dark'

  setTheme(nextTheme)
})

// =====================================
// 2. ENGLISH / FRENCH TRANSLATIONS
// =====================================

const translations = {
  en: {
    navHome:'Home',navAbout:'About',navSkills:'Skills',navProjects:'Projects',navExperience:'Experience',navContact:'Contact',
    eyebrow:'WELCOME TO MY DIGITAL SPACE',hello:"Hello, I'm",rolePrefix:'Full Stack',heroDescription:'I build modern, responsive web experiences and turn ideas into useful digital products. Always learning, always creating.',
    seeProjects:'Explore my projects',contactMe:"Let's talk",basedIn:'Based in Fès, Morocco',visualCaption:'Building the web, one idea at a time.',scroll:'SCROLL TO EXPLORE',
    aboutLabel:'A LITTLE ABOUT ME',aboutTitle:'Curious mind. <span class="gradient-text">Creative builder.</span>',aboutIntro:'I enjoy solving problems and creating digital experiences that make a difference.',
    whoTitle:'Who I am',aboutText:"I'm Yassir, a web development enthusiast focused on building clean, responsive and user-friendly applications. I enjoy learning new technologies, collaborating with others and turning challenges into opportunities to grow.",
    trait1:'Problem solver',trait2:'Team player',trait3:'Continuous learner',statProjects:'Curiosity-driven mindset',statLearning:'Learning by building',statGrowth:'Room to grow',
    skillsLabel:'MY TOOLKIT',skillsTitle:'Technologies I <span class="gradient-text">work with</span>',skillsIntro:"Tools I use and technologies I'm actively improving.",
    projectsLabel:'SELECTED WORK',projectsTitle:"Things I've <span class='gradient-text'>been building</span>",projectsIntro:'A few projects that reflect my learning journey and interests.',
    projectAcademy:'An educational management interface concept for organizing students, groups and attendance.',projectJobs:'A job-offer management application concept with candidate and company workflows.',projectCreative:'Small front-end experiments exploring layout, motion, responsive design and interactions.',projectDetails:'Project details ↗',projectNotice:'Note: replace the sample project links with your real GitHub repositories and live demos.',
    journeyLabel:'MY JOURNEY',journeyTitle:'Experience & <span class="gradient-text">education</span>',journeyIntro:'A snapshot of the experiences that have shaped my path.',
    experienceTitle:'Experience',educationTitle:'Education',concentrixRole:'Technical Support Agent · 5 months',astRole:'Internship · 2 months',youcodeRole:'Programming & Artificial Intelligence',istaRole:'Full Stack Web Development',bacRole:'High school diploma',datesNotice:'Please verify dates and titles before publishing your portfolio.',
    contactLabel:"LET'S CONNECT",contactTitle:'Have an idea?<br><span class="gradient-text">Let&apos;s build it.</span>',contactIntro:"I'm open to learning opportunities, internships and interesting collaborations.",
    emailNotice:'Replace this sample email with your real email address.',formName:'Your name',formEmail:'Your email',formMessage:'Your message',sendMessage:'Send message',rights:'Made with curiosity & code.',backTop:'Back to top ↑'
  },

  fr: {
    navHome:'Accueil',navAbout:'À propos',navSkills:'Compétences',navProjects:'Projets',navExperience:'Expérience',navContact:'Contact',
    eyebrow:'BIENVENUE DANS MON UNIVERS',hello:'Bonjour, je suis',rolePrefix:'Développeur',heroDescription:'Je crée des expériences web modernes et responsives et transforme les idées en produits numériques utiles. Toujours en apprentissage, toujours en création.',
    seeProjects:'Découvrir mes projets',contactMe:'Me contacter',basedIn:'Basé à Fès, Maroc',visualCaption:'Construire le web, une idée à la fois.',scroll:'DÉFILER POUR EXPLORER',
    aboutLabel:'À PROPOS DE MOI',aboutTitle:'Esprit curieux. <span class="gradient-text">Créateur passionné.</span>',aboutIntro:'J’aime résoudre des problèmes et créer des expériences numériques utiles.',
    whoTitle:'Qui suis-je ?',aboutText:'Je suis Yassir, passionné par le développement web et la création d’applications propres, responsives et faciles à utiliser. J’aime apprendre de nouvelles technologies, collaborer et transformer les défis en occasions de progresser.',
    trait1:'Résolution de problèmes',trait2:'Esprit d’équipe',trait3:'Apprentissage continu',statProjects:'Esprit curieux',statLearning:'Apprendre en pratiquant',statGrowth:'Toujours progresser',
    skillsLabel:'MES OUTILS',skillsTitle:'Technologies que <span class="gradient-text">j’utilise</span>',skillsIntro:'Les outils que j’utilise et les technologies que je perfectionne.',
    projectsLabel:'MES RÉALISATIONS',projectsTitle:'Ce que je <span class="gradient-text">construis</span>',projectsIntro:'Quelques projets qui représentent mon parcours et mes intérêts.',
    projectAcademy:'Concept d’interface de gestion éducative pour organiser les élèves, les groupes et les présences.',projectJobs:'Concept d’application de gestion des offres d’emploi pour les candidats et les entreprises.',projectCreative:'Expérimentations front-end autour de la mise en page, des animations et du responsive design.',projectDetails:'Détails du projet ↗',projectNotice:'Remarque : remplace les liens exemples par tes vrais dépôts GitHub et démos.',
    journeyLabel:'MON PARCOURS',journeyTitle:'Expérience & <span class="gradient-text">formation</span>',journeyIntro:'Un aperçu des expériences qui ont construit mon parcours.',
    experienceTitle:'Expérience',educationTitle:'Formation',concentrixRole:'Agent support technique · 5 mois',astRole:'Stage · 2 mois',youcodeRole:'Programmation et intelligence artificielle',istaRole:'Développement web full stack',bacRole:'Baccalauréat',datesNotice:'Vérifie les dates et les intitulés avant de publier ton portfolio.',
    contactLabel:'PRENONS CONTACT',contactTitle:'Une idée ?<br><span class="gradient-text">Construisons-la.</span>',contactIntro:'Je suis ouvert aux opportunités d’apprentissage, aux stages et aux collaborations intéressantes.',
    emailNotice:'Remplace cet e-mail exemple par ta vraie adresse.',formName:'Votre nom',formEmail:'Votre e-mail',formMessage:'Votre message',sendMessage:'Envoyer le message',rights:'Créé avec curiosité et du code.',backTop:'Retour en haut ↑'
  }
}

let currentLanguage = localStorage.getItem('portfolio-language') || 'en'

const languageButton = document.querySelector('#language-toggle')

function applyLanguage(language) {
  if (!translations[language]) return

  currentLanguage = language
  document.documentElement.lang = language

  if (languageButton) {
    languageButton.textContent = language === 'en' ? 'FR' : 'EN'
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n
    const translation = translations[language][key]

    if (translation) {
      element.innerHTML = translation
    }
  })

  localStorage.setItem('portfolio-language', language)
}

applyLanguage(currentLanguage)

languageButton?.addEventListener('click', () => {
  applyLanguage(currentLanguage === 'en' ? 'fr' : 'en')
})

// =====================================
// 3. MOBILE NAVIGATION
// =====================================

const menuToggle = document.querySelector('#menu-toggle')
const navLinks = document.querySelector('#nav-links')

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open')

  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.textContent = isOpen ? '×' : '☰'
})

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')

    menuToggle?.setAttribute('aria-expanded', 'false')

    if (menuToggle) {
      menuToggle.textContent = '☰'
    }
  })
})

// =====================================
// 4. TYPING ANIMATION
// =====================================

const typedRole = document.querySelector('#typed-role')

const roles = [
  'Web Developer',
  'Frontend Developer',
  'Creative Coder',
  'Full Stack Developer'
]

let roleIndex = 0
let characterIndex = 0
let deleting = false

function typeRole() {
  if (!typedRole) return

  const currentRole = roles[roleIndex]

  typedRole.textContent = currentRole.slice(0, characterIndex)

  if (!deleting && characterIndex < currentRole.length) {
    characterIndex++
    setTimeout(typeRole, 95)

  } else if (!deleting) {
    deleting = true
    setTimeout(typeRole, 1300)

  } else if (characterIndex > 0) {
    characterIndex--
    setTimeout(typeRole, 42)

  } else {
    deleting = false
    roleIndex = (roleIndex + 1) % roles.length
    setTimeout(typeRole, 350)
  }
}

if (typedRole) {
  if (reducedMotion) {
    typedRole.textContent = roles[0]
  } else {
    typeRole()
  }
}

// =====================================
// 5. REVEAL ANIMATION ON SCROLL
// =====================================

const revealItems = document.querySelectorAll('.reveal')

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  revealItems.forEach((item, index) => {
    item.style.setProperty(
      '--reveal-delay',
      `${Math.min(index % 4, 3) * 80}ms`
    )

    if (reducedMotion) {
      item.classList.add('visible')
    } else {
      revealObserver.observe(item)
    }
  })

} else {
  revealItems.forEach((item) => item.classList.add('visible'))
}

// =====================================
// 6. PORTRAIT 3D TILT
// =====================================

const tiltCard = document.querySelector('.tilt-card')

if (tiltCard && finePointer && !reducedMotion) {
  tiltCard.addEventListener('pointermove', (event) => {
    const rect = tiltCard.getBoundingClientRect()

    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    const rotateY = (x - 0.5) * 9
    const rotateX = (0.5 - y) * 9

    tiltCard.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      rotate(0deg)
    `
  })

  tiltCard.addEventListener('pointerleave', () => {
    tiltCard.style.transform = 'rotate(2deg)'
  })
}

// =====================================
// 7. CONTACT FORM
// =====================================

const contactForm = document.querySelector('#contact-form')
const formFeedback = document.querySelector('#form-feedback')

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault()

  const formData = new FormData(contactForm)

  const name = formData.get('name')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''

  // Change this to your real email address
  const destinationEmail = 'hello@example.com'

  const subject = encodeURIComponent(
    `Portfolio message from ${name}`
  )

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )

  if (formFeedback) {
    formFeedback.textContent = currentLanguage === 'en'
      ? 'Your email app will open with the message ready to send.'
      : 'Votre application e-mail va s’ouvrir avec le message prêt à envoyer.'
  }

  window.location.href =
    `mailto:${destinationEmail}?subject=${subject}&body=${body}`
})

// =====================================
// 8. CURRENT YEAR
// =====================================

const yearElement = document.querySelector('#year')

if (yearElement) {
  yearElement.textContent = new Date().getFullYear()
}

// =====================================
// 9. SCROLL PROGRESS BAR
// =====================================

const progressBar = document.createElement('div')
progressBar.className = 'motion-progress'

document.body.appendChild(progressBar)

function updateScrollProgress() {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight

  const progress = maxScroll > 0
    ? (window.scrollY / maxScroll) * 100
    : 0

  progressBar.style.width = `${progress}%`
}

window.addEventListener('scroll', updateScrollProgress, {
  passive: true
})

updateScrollProgress()

// =====================================
// 10. HERO SPOTLIGHT
// =====================================

const hero = document.querySelector('.hero')

if (hero && finePointer && !reducedMotion) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect()

    hero.style.setProperty(
      '--mouse-x',
      `${event.clientX - rect.left}px`
    )

    hero.style.setProperty(
      '--mouse-y',
      `${event.clientY - rect.top}px`
    )
  }, { passive: true })
}

// =====================================
// 11. PREMIUM CUSTOM CURSOR
// =====================================

if (finePointer && !reducedMotion) {

  // Small cursor dot
  const cursorDot = document.createElement('div')
  cursorDot.className = 'custom-cursor'

  // Smooth follower ring
  const cursorRing = document.createElement('div')
  cursorRing.className = 'cursor-follower'

  // Large soft glow
  const cursorAura = document.createElement('div')
  cursorAura.className = 'cursor-aura'

  document.body.append(
    cursorAura,
    cursorRing,
    cursorDot
  )

  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2

  let ringX = mouseX
  let ringY = mouseY

  let auraX = mouseX
  let auraY = mouseY

  window.addEventListener('pointermove', (event) => {
    mouseX = event.clientX
    mouseY = event.clientY

    cursorDot.style.left = `${mouseX}px`
    cursorDot.style.top = `${mouseY}px`
  }, { passive: true })

  // Smooth cursor animation
  function animateCursor() {
    ringX += (mouseX - ringX) * 0.16
    ringY += (mouseY - ringY) * 0.16

    auraX += (mouseX - auraX) * 0.075
    auraY += (mouseY - auraY) * 0.075

    cursorRing.style.left = `${ringX}px`
    cursorRing.style.top = `${ringY}px`

    cursorAura.style.left = `${auraX}px`
    cursorAura.style.top = `${auraY}px`

    requestAnimationFrame(animateCursor)
  }

  animateCursor()

  // Cursor hover effect
  document.querySelectorAll(
    'a, button, input, textarea, .project-card, .skill-card'
  ).forEach((element) => {

    element.addEventListener('pointerenter', () => {
      cursorRing.classList.add('active')
    })

    element.addEventListener('pointerleave', () => {
      cursorRing.classList.remove('active')
    })
  })

  // Cursor click effect
  document.addEventListener('pointerdown', () => {
    cursorRing.classList.add('clicking')
  })

  document.addEventListener('pointerup', () => {
    cursorRing.classList.remove('clicking')
  })
}

// =====================================
// 12. MAGNETIC BUTTONS
// =====================================

if (finePointer && !reducedMotion) {

  document.querySelectorAll('.hero-actions .button').forEach((button) => {

    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect()

      const x = event.clientX - rect.left - rect.width / 2
      const y = event.clientY - rect.top - rect.height / 2

      button.style.transform = `
        translate(${x * 0.10}px, ${y * 0.10}px)
      `
    })

    button.addEventListener('pointerleave', () => {
      button.style.transform = ''
    })
  })
}

// =====================================
// 13. 3D PROJECT & SKILL CARDS
// =====================================

if (finePointer && !reducedMotion) {

  document.querySelectorAll(
    '.project-card, .skill-card'
  ).forEach((card) => {

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect()

      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height

      const rotateY = (x - 0.5) * 7
      const rotateX = (0.5 - y) * 7

      // Mouse position for CSS spotlight
      card.style.setProperty(
        '--mouse-x',
        `${event.clientX - rect.left}px`
      )

      card.style.setProperty(
        '--mouse-y',
        `${event.clientY - rect.top}px`
      )

      card.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-4px)
      `
    })

    card.addEventListener('pointerleave', () => {
      card.style.transform = ''
    })
  })
}

// =====================================
// 14. CLICK PARTICLES
// =====================================

if (!reducedMotion) {

  document.addEventListener('click', (event) => {

    if (event.target.closest('input, textarea')) return

    for (let i = 0; i < 9; i++) {

      const particle = document.createElement('span')

      const angle = (Math.PI * 2 * i) / 9
      const distance = 24 + Math.random() * 34

      particle.className = 'click-particle'

      particle.style.left = `${event.clientX}px`
      particle.style.top = `${event.clientY}px`

      particle.style.setProperty(
        '--tx',
        `${Math.cos(angle) * distance}px`
      )

      particle.style.setProperty(
        '--ty',
        `${Math.sin(angle) * distance}px`
      )

      document.body.appendChild(particle)

      particle.addEventListener('animationend', () => {
        particle.remove()
      }, { once: true })
    }
  })
}

// =====================================
// 15. ACTIVE NAVIGATION ON SCROLL
// =====================================

const pageSections = document.querySelectorAll(
  'main section[id]'
)

if ('IntersectionObserver' in window) {

  const sectionObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return

        document.querySelectorAll('.nav-links a').forEach((link) => {

          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          )
        })
      })
    },
    {
      rootMargin: '-35% 0px -55% 0px'
    }
  )

  pageSections.forEach((section) => {
    sectionObserver.observe(section)
  })
}
