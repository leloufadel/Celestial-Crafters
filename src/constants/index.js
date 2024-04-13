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
    bankist,
    threejs,
    live,
    financial,
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
        "Lala is a great and kind worker. Always making sure to provide help and look out for others. Patient, well spoken, and great at communication. She was also great at helping solving problems and was incredibly creative at finding solutions!.",
      name: "Santiago Ruido",
      designation: "Lala and Santiago worked together at",
      company: "Microverse",
      image: "https://media.licdn.com/dms/image/D4E35AQHy_2Ykxqi7cQ/profile-framedphoto-shrink_800_800/0/1694763598907?e=1713646800&v=beta&t=wM5FLqBN-04pUY-GTCs_NnxiCIV6DS6W5CWzkkmNLtk",
    },
    {
      testimonial:
        "Lala Aicha is a brave and intelligent lady. She is willing to challenge herself to study new things to achieve her goals. She would be a reliable and valuable member of any team or company having her.",
      name: "Khanh DOM",
      designation: "lala worked with Khanh on the same team at",
      company: "Microverse",
      image: "https://avatars.githubusercontent.com/u/68627859?v=4",
    },
    {
      testimonial:
        "Lala Aicha is an exceptional software engineer who I've had the pleasure of collaborating with. Her passion for pair-programming, love for JavaScript, and proficiency in React make her a standout talent in the field. I highly recommend her as a skilled and motivated software engineer.",
      name: "Omar Faruk",
      designation: "Full-Stack Engineer at",
      company: "StreetFoodFinder",
      image: "https://media.licdn.com/dms/image/D5603AQFFNYdrnfgn4A/profile-displayphoto-shrink_200_200/0/1693855844663?e=1718236800&v=beta&t=VRKkwx79j-wgQHaTMyfvEf5aciodD2bg0_W609jqiqY",
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
    ,
    {
      name: "Financial Metrics App",
      description:
        " An application that showcases the financial statements of selected companies in the US. The data is in real time, audited, standardized and up to date from the US stock market.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: financial,
      source_code_link: "https://github.com/leloufadel/Financial-Metrics-App",
      live_code_link: "https://financial-metrics-app.onrender.com/",
    },
    {
      name: "Bankist Project",
      description:
        " A Virtual banking experience. Bankist is a fictional online bank. It is a project introduced by Jonas Schmedtmann in order to practice DOM manipulation and user interaction. Bankist has the option to log in to the account and use different functionalities, almost like in an actual bank.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bankist,
      source_code_link: "https://github.com/leloufadel/Bankist-Project",
      live_code_link: "https://github.com/leloufadel/Bankist-Project",
    },
    {
      name: "Recipe Guide",
      description:
        "Recipe Search App is a web application that allows users to search for their favorite recipes and displays a list of recipes based on the search query. It integrates with the Edamam API to fetch recipe data and provides a user-friendly interface for finding and exploring various recipes.",
      tags: [
        {
          name: "javaScript",
          color: "blue-text-gradient",
        },
        {
          name: "API",
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