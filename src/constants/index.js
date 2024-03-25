import {
    // mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactech,
    reactjs,
    redux,
    tailwind,
    rails,
    postsql,
    git,
    figma,
    ruby,
    microverse,
    ibtikar,
    ApexGames,
    TechA,
    carrent,
    jobit,
    tripguide,
    threejs,
    live,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: reactech,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "JavaScript",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Ruby on Rails",
      icon: rails,
    },
    {
      name: "postsql",
      icon: postsql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "ruby",
      icon: ruby,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stuck Developer",
      company_name: "Ibtikar Technologies",
      icon: ibtikar,
      location:"Mauritanie, on-site",

      iconBg: "#383E56",
      date: "feb 2024 - Present",
      points: [
        "Developing and maintaining web applications using React, node js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Apex Games",
      icon: ApexGames,
      location:"United States, Remote",
      iconBg: "#E6DEDD",
      date: "feb 2024 - May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer and Designer",
      company_name: "Tech-A-Intern",
      location:"India, Remote",
      icon: TechA,
      iconBg: "#383E56",
      date: "dec 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using JavaScript and  rails technology.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Microverse",
      icon: microverse,
      location:"United States, Remote",
      iconBg: "#E6DEDD",
      date: "April 2023 - March 2024",
      points: [
        "Developing and maintaining web applications using JavaScript, React, CSS, Ruby, Rails and other related technologies.",
        "I collaborate with developers from Africa, Europe, and Asia to develop high-quality products, both independently and as part of a team. Working with a diverse team from across the world allows us to create impactful solutions.",        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Mentor junior developers and help them grow.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Page To Page Library",
      description:
        "Page to Page Library is a Full Stuck web app that allows users to view and reserve books. Only admins can add and delete books and also give admin permissions to regular users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Postgresql",
          color: "green-text-gradient",
        },
        {
          name: "ruby on rails",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/leloufadel/Page-To-page-Library-Backend",
      live_code_link: "https://page-to-page.onrender.com/",

    },
    {
      name: "Space Travelers' Hub",
      description:
        "Space Travelers' Hub is a web application for a company that provides commercial and scientific space travel services. It allows users to book rockets and join selected space missions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sam2if/Space_Travelers",
      live_code_link: "https://space-travelers-p674.onrender.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };