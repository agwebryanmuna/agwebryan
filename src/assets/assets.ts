import javascript from './javascript.svg'
import express from './express.svg'
import next from './next.svg'
import node from './node.svg'
import reactIcon from './react.svg'
import tailwindcss from './tailwindcss.svg'
import typescript from './typescript.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'

const assets = {github, linkedin, javascript, express, next, node, reactIcon, tailwindcss, typescript}

export const projectsList = [
  {
    id: 8,
    name: "QuickStay",
    description:
      "A modern, full-stack web application for discovering, booking, and managing your favorite Hotels.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express.js"],
    github: "https://github.com/agwebryanmuna/QuickStay.git",
    liveDemo: "https://quick-stay-olive-five.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dx4rloqv5/image/upload/v1753973727/hotel-booking_zz8ogn.png"
  },
  {
    id: 1,
    name: "QuickChat",
    description:
      "QuickChat is a modern, full-stack real-time chat application designed for seamless, secure, and engaging communication. Built with a focus on performance, scalability, and user experience, QuickChat demonstrates best practices in both frontend and backend development using the latest technologies.",
    technologies: [
      "React",
      "Socket.io",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript"
    ],
    github: "https://github.com/agwebryanmuna/React-ChatApp",
    liveDemo: "https://react-chat-app-pink.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dx4rloqv5/image/upload/v1752885693/quickchat_bxlerp.png"
  },
  {
    id: 2,
    name: "Forever",
    description:
      "Forever is a modern, full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js) and designed for a seamless shopping experience. This project demonstrates best practices in web development, scalable architecture, and a beautiful, responsive UI—perfect for your portfolio or as a foundation for a real-world online store.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript"
    ],
    github: "https://github.com/agwebryanmuna/Forever_E-commerce.git",
    liveDemo: "https://forever-e-commerce-eight.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dx4rloqv5/image/upload/v1752896137/forever_vt097a.png"
  },
  {
    id: 7,
    name: "Bookit",
    description:
      "A modern, full-stack web application for discovering, booking, and managing your favorite workspace.",
    technologies: ["React", "Tailwind CSS", "Next.js", "TypeScript"],
    github: "https://github.com/agwebryanmuna/Bookit.git",
    liveDemo: "https://bookit-renx.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dx4rloqv5/image/upload/v1753635278/bookit-client_i9wfrj.png"
  },
  {
    id: 4,
    name: "Pokemon",
    description:
      "This is a modern, web application that lets you browse, search, filter, and save your favorite Pokémon!",
    technologies: ["React", "Tailwind CSS", "Next.js", "TypeScript"],
    github: "https://github.com/agwebryanmuna/Pokemon-App.git",
    liveDemo: "https://pokemon-app-virid-eta.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dx4rloqv5/image/upload/v1753177495/pokemon_c9wo5z.png"
  },
  {
    id: 5,
    name: "Reactive Movies",
    description:
      "The Movies App is a sleek, lightning-fast web application that lets you search for movies in real time, explore trending titles, and enjoy a seamless browsing experience—all powered by modern web technologies.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/agwebryanmuna/React-Movie-Search-App.git",
    liveDemo: "https://react-movie-search-app-psi.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dx4rloqv5/image/upload/v1753177644/Movie_a8uu6i.png"
  },
  {
    id: 6,
    name: "Reactive Weather",
    description:
      "A modern, responsive weather dashboard that delivers real-time weather data and beautiful visualizations. Built with a focus on performance, user experience, and clean code.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript"],
    github: "https://github.com/agwebryanmuna/React-weather-app.git",
    liveDemo: "https://react-weather-app-iota-jet.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dx4rloqv5/image/upload/v1753177967/weather_yflvzh.png"
  },
 
  {
    id: 3,
    name: "Blogga",
    description:
      "This is a modern, full-stack blogging platform designed for seamless content creation, sharing, and discovery. Built with a focus on performance, security, and user experience, this project demonstrates my skills in both frontend and backend development using the latest technologies.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript"
    ],
    github: "https://github.com/agwebryanmuna/React-blog-app.git",
    liveDemo: "https://react-blog-app-red.vercel.app/",
    thumbnail: "https://res.cloudinary.com/dx4rloqv5/image/upload/v1753177532/screenshot_iyk3st.png"
  },
];

export const techStack = [
  "React",
  "Socket.io",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Next.js"
]

export const EXPERIENCE = [
  {
    id: 1,
    company: 'DeBrights’ Int.',
    position: 'Web Developer Instructor',
    duration: 'Aug 2021 – Present',
    description: 'I teach and mentor students in full-stack web development using the MERN stack, Next.js, and other modern tools, delivering lessons on key topics such as React components, Node.js APIs, MongoDB schemas, and authentication with JWT or Firebase. I support learners through debugging, code reviews, and reinforcing best practices for clean, maintainable code. I also guide students in building real-world projects like CRUD applications and authentication systems with responsive UI design. In addition, I provide feedback on GitHub submissions, promote version control, collaborative workflows, and Agile principles, while staying current with evolving web technologies to ensure relevant, up-to-date instruction.'
  },{
    id: 2,
    company: 'AfroVision Group',
    position: 'Web Developer',
    duration: 'Jun 2023 – Jan 2024',
    description: 'Built a Progressive Web App (PWA) using Next.js for the frontend and Node.js for the backend, leveraging TypeScript to ensure high-quality, maintainable, and easily testable code. Implemented secure user authentication with react-hook-form and JWT, and styled the user interface using Tailwind CSS for rapid development and responsive design. Developed RESTful APIs with Express.js and integrated them seamlessly with React-based frontends to deliver a robust, full-stack application experience.'
  },{
    id: 3,
    company: 'QMagic AI',
    position: 'Mobile Developer',
    duration: 'Mar 2023 – May 2023',
    description: 'Developed the Qmagic AI application using the Flutter framework to create visually appealing and interactive user interfaces, employing the Flutter BLoC pattern to manage interactions between the UI and business logic. Integrated push notifications through Firebase Messaging and enabled WhatsApp alerts for completed tasks using the Twilio API. Built RESTful APIs with Node.js and Express.js for backend functionality, and utilized Firebase Cloud Firestore to cache and manage data for offline access. Collaborated with team members using Git for version control, and applied various debugging techniques such as console logging, breakpoints, and debuggers to identify and resolve issues efficiently.'
  },
]

export default assets
