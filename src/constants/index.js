import {
  vitv,
  kalvium,
  sric,
  KHGS,
  SMP,
  ftp,
  text,
  eshop
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlask,
  SiFigma,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
} from "react-icons/si";

import {
  FaHardHat,
  FaNodeJs,
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";


import { DiCss3, DiJava, DiMsqlServer} from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1LcrlpQ0ylomkwbKHMKgYB-xxpDPk_Q_U/view?usp=sharing";

export const callToAction = "https://www.linkedin.com/in/harshith-renikindi-2b92871bb";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: vitv,
    title: "Vellore Institute Of Technology,Vellore",
    degree: "Master of Technology[Integrated]",
    duration: "July 2019 - August 2024",
    content1: "Major: Computer Science and Engineering",
    content2: "As a recent Master's graduate in Computer Science and Engineering from Vellore Institute of Technology, I have a strong academic foundation and a passion for solving complex challenges through innovative solutions. I am eager to contribute to the future of technology and collaborate with like-minded developers to drive meaningful advancements.",
  },
  {
    id: "education-2",
    icon: sric,
    title: "Sri Chaitanya Junior College",
    degree: "Intermediate",
    duration: "April 2017 - April 2019",
    content1: "Major: Mathematics, Physics, and Chemistry",
  },
  {
    id: "education-3",
    icon: KHGS,
    title: "Kennedy High The Global School",
    degree: "Seconday Education",
    duration: "April 2016 - April 2017",
    content1: "Major: Central Board Of Secondary Education",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries and Tools",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-3",
        icon: FaNodeJs,
        name: "NodeJS",
      },
      {
        id: "t-1",
        icon: SiFigma,
        name: "Figma",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: SiMongodb,
        name: "Mongodb",
      },
    ],
  }
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Kalvium, India",
    logo: kalvium,
    link: "https://kalvium.com/",
    positions: [
      {
        title: "Tehnical Mentor",
        duration: "Sep2024-Present",
        content: [
          {
            text: "•Guiding 30+ students in full-stack development and programming, increasing project completion rates by 45%.",
            link: "",
          },
          {
            text: "•Delivered targeted training sessions, improving student coding proficiency and career readiness.",
            link: "",
          },
        ],
      },
      {
        title: "Tehnical Mentor-Intern",
        duration: "Feb2024-Sep2024",
        content: [
          {
            text: "•Designed an evaluation framework for internships,resulting in a 60% improvement in project quality ratings.",
            link: "",
          },
          {
            text: "•Achieved 95% accuracy in submission-type coverage, ensuring reliable assessments.",
            link: "",
          },
        ],
      },    
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Stock Market Price prediction",
    github: "https://github.com/hrenikindi/Stock-market-price-prediction",
    link:"https://github.com/hrenikindi/Stock_price_prediction",
    image: SMP,
    content:
      "Predicting the Stocks Price Using the Historical data of the Stocks!, trained model using BPNN! Project implemented using Matlab and Python",
    stack: [
      // {
      //   id: "icon-1",
      //   icon: SiReact,
      //   name: "React"
      // },
    ],
  },
  {
    id: "project-2",
    title: "Flight Ticket Price Prediction",
    github: "https://github.com/hrenikindi/Flight-Ticket-Price-Prediction",
    image: ftp,
    content:
      "In this I have trained a model which helps us to predict the flight ticket price considering few features!",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
  {
    id: "project-3",
    title: "Text Summarization",
    github: "https://github.com/hrenikindi/Text-Summarization",
    image: text,
    content:
      "Created a smart text summarization tool that condenses lengthy content while maintaining essential information.🚀",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
  {
    id: "project-4",
    title: "Ecommerce Website using MERN Stack",
    github: "https://github.com/hrenikindi/ecommerce",
    image: eshop,
    content:
      "Created Ecommerce website using the MERN stack which helped me to learn about the MERN in-depth, and used github to learn about the version control in-depth.",
    stack: [
      {
        id: "icon-1",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "icon-2",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "icon-3",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "Mongodb",
      },
      {
        id: "icon-5",
        icon: FaNodeJs,
        name: "NodeJS",
      },
      {
        id: "icon-6",
        icon: SiReact,
        name: "ReactJS",
      },
    ],
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/harshith-renikindi-2b92871bb/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/hrenikindi",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:harshithrenikindhi801@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/hrenikindi?igsh=MW9rMHg1em1oaDk0OA==",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Harshith Renikindi",
  contact:"+91-9390048916",
  githubUsername: 'hrenikindi',
  tagLine: "Full-Stack Developer | Machine Learning Enthusiast | Guiding the Next Generation of Tech Talent @ Kalvium",
  intro: `I am a Master's graduate in Computer Science and Engineering from VIT, currently working as a Technical Mentor at Kalvium. With expertise in AI, Python, and web technologies, My focus lies in solving complex challenges and driving innovation in the tech industry.`
}



