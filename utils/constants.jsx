import { icons_svg } from "@/components/icons/icons_svgs";

export const Constants = {
  accentColor: "#8E2DE2",
  logo: "Ram",
  username: "Ram Charan",
  jobTitle: "Software Developer",
  description:
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
  resume_path: "/resumes/resume_cv.pdf",
  stats: [
    { num: 1.2, text: "Years of experience" },
    { num: 4, text: "Projects completed" },
    { num: 8, text: "Technologies learned" },
  ],
  services: [
    {
      num: "01",
      title: "Frontend Development",
      link: "https://github.com/RCoffice18",
      description:
        "Creating visually appealing, responsive, and user-friendly interfaces using modern technologies like HTML, CSS, JavaScript, and frameworks.",
    },
    {
      num: "02",
      title: "Backend Development",
      link: "https://github.com/RCoffice18",
      description:
        "Building robust server-side applications and databases ensuring secure, scalable, and efficient data processing and storage.",
    },
    {
      num: "03",
      title: "Java Full Stack Development",
      link: "https://github.com/RCoffice18",
      description:
        "Developing complete applications with expertise in both front-end and back-end technologies using Java and related frameworks.",
    },
    {
      num: "04",
      title: "API Design",
      link: "https://github.com/RCoffice18",
      description:
        "Crafting efficient, secure, and scalable APIs for seamless communication between different software systems and applications.",
    },
  ],
  mail: "rcoffice18@gmail.com",
  contactNo: "(+91) 877 860 7415",
  linkedIn: "https://www.linkedin.com/in/ram-charan-611826196/",
  gitHub: "https://github.com/RCoffice18",
};

export const about = {
  title: "About me",
  description:
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ram Charan M",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 877 860 7415",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "GitHub",
      fieldValue: "https://github.com/RCoffice18",
      isLink: true,
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "https://www.linkedin.com/in/ram-charan-611826196/",
      isLink: true,
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Tamil, English",
    },
  ],
};

export const experience = {
  title: "My experience",
  description:
    "I excel in developing full stack applications using modern technologies and methodologies.",
  experienceList: [
    {
      company: "Cerulean Solutions",
      position: "Full Stack Developer",
      duration: "2023 - 2024",
    },
  ],
};

export const education = {
  title: "education",
  description:
    "I excel in cloud computing with AWS and Azure, and hold a diploma in JAVA programming.",
  educationList: [
    {
      institution: "Elysium Academy",
      degree: "TESBO Cloud - AWS, Azure",
      duration: "April 2022 - March 2023",
    },
    {
      institution: "GAT Academy",
      degree: "Diploma in JAVA",
      duration: "April 2022 - June 2022",
    },
    {
      institution: "NPR College of Engineering",
      degree: "Bachelor of Civil Engineering",
      duration: "2015 - 2019",
    },
    {
      institution: "Velammal Matriculation School",
      degree: "HSLC",
      duration: "2015",
    },
    {
      institution: "Velammal Matriculation School",
      degree: "SSLC",
      duration: "2013",
    },
  ],
};

export const skills = {
  title: "My skills",
  description:
    "Proficient in HTML5, CSS3, JavaScript, React JS, Next JS, Node JS, and SASS for web development.",
  skillList: [
    {
      icon: icons_svg.html5,
      color: "#E44D26",
      name: "Html 5",
    },
    {
      icon: icons_svg.css3,
      color: "#1572B6",
      name: "Css 3",
    },
    {
      icon: icons_svg.js,
      color: "#F7DF1E",
      name: "Javascript",
    },
    {
      icon: icons_svg.reactjs,
      color: "#61DAFB",
      name: "React JS",
    },
    {
      icon: icons_svg.tailwindCss,
      color: "#61DAFB",
      name: "Tailwind CSS",
    },
    {
      icon: icons_svg.nextjs,
      color: "#000000",
      name: "Next JS",
    },
    {
      icon: icons_svg.nodejs,
      color: "#68A063",
      name: "Node JS",
    },
    {
      icon: icons_svg.sass,
      color: "#CC6699",
      name: "SASS",
    },
  ],
};

export const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Banking Application",
    description:
      "A secure and user-friendly web app for managing banking activities, built using HTML5, CSS3, JavaScript, and React Framework.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Javascript" },
      { name: "React" },
    ],
    image: "/assets/banking.png",
    github: "/",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Learning Platform Application",
    description:
      "A comprehensive online platform facilitating learning and course management, utilizing React, Tailwind.css, JavaScript, Node.js, and MongoDB.",
    stack: [
      { name: "React" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/lms.png",
    github:
      "https://github.com/RCoffice18/React-Projects/tree/main/Downloads/Extracted%20FIles/project_syncfusion_dashboard-main",
  },
  {
    num: "03",
    category: "fullstack",
    title: "AI Customer Support Application",
    description:
      "An intelligent customer support system leveraging AI, developed with HTML5, CSS3, JavaScript, React, Node.js, and MSSQL.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "MSSQL" }],
    image: "/assets/twilio.png",
    github: "https://github.com/RCoffice18/twilio/tree/master",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Portfolio",
    description:
      "Modern portfolio using NextJS, styled with Tailwind CSS, and animated with Framer Motion for a dynamic, responsive design.",
    stack: [
      { name: "NextJS" },
      { name: "Tailwind.Css" },
      { name: "Framer Motion" },
    ],
    image: "/assets/portfolio.png",
    github: "https://github.com/RCoffice18/ram-portfolio/",
  },
];

export const info = [
  {
    icon: icons_svg.phone,
    title: "Phone",
    description: "(+91) 877 860 7415",
  },
  {
    icon: icons_svg.mail,
    title: "Email",
    description: "rcoffice18@gmail.com",
  },
  {
    icon: icons_svg.map,
    title: "Address",
    description: "1277/B, Maran Illam, Valli Chandra Nagar, Sivaganga - 630561",
  },
];

export const mailInfo = {
  EMAIL_SERVICE: "smtp.gmail.com",
  EMAIL_USER: "ceruleansolution@gmail.com",
  EMAIL_PASS: "seku plyx abnk iowt",
};
