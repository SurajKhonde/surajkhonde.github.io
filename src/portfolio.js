import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import jeetuImg from "./assets/images/jeetu.jpeg";
import Amansir from "./assets/images/amansir.jpeg";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Suraj Khonde",
  title: "Hi all, I'm Suraj",
  subTitle: emoji(
    "A Full-Stack Web Developer 🚀 building fast, reliable production web apps using JavaScript / React / Next.js / Node.js. I focus on performance, clean architecture, and scalable APIs with MySQL (InnoDB, MVCC, transactions) + MongoDB, plus AWS & Docker."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JB8Wwn-bNacLX4rzR6DoCi6x14o0U_pr/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/SurajKhonde",
  linkedin: "https://www.linkedin.com/in/surajrkhonde/",
  gmail: "surajrkhonde@gmail.com",
  medium: "https://medium.com/@surajrkhonde",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK WEB DEVELOPER — PRODUCTION-READY, PERFORMANCE-FOCUSED",
  skills: [
    emoji("⚡ Build responsive, accessible UI with React / Next.js + TailwindCSS"),
    emoji("⚡ Design & develop secure REST APIs (auth, validation, rate limiting) using Node.js"),
    emoji("⚡ Database design + optimization in MySQL (MVCC, transactions, indexing) and MongoDB"),
    emoji("⚡ Deploy & scale apps with AWS + Docker; automate CI/CD pipelines")
  ],

  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "TailwindCSS", fontAwesomeClassname: "fas fa-wind" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fas fa-layer-group" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "MySQL (InnoDB)", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-code-branch" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Visvesvaraya Technological University (VTU)",
      logo: require("./assets/images/VTU-Logo-250x250-1.webp"),
      subHeader: "Bachelor of Engineering (Mechanical)",
      duration: "September 2013 - Jan 2018",
      desc:
        "Engineering background with strong analytical/problem-solving skills and hands-on project experience.",
      descBullets: [
        "Completed multiple design + analysis projects, improving approach to debugging and system thinking.",
        "Led team collaboration and presentations during final-year projects."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend (React / Next.js)", progressPercentage: "75%" },
    { Stack: "Backend (Node.js)", progressPercentage: "80%" },
    { Stack: "Deployment (AWS / Docker / CI/CD)", progressPercentage: "65%" }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer (Backend / Full Stack)",
      company: "Advento Technologies, Hyderabad",
      companylogo: require("./assets/images/advento.png"), // add this image in assets/images/
      date: "Sep 2025 – Jan 2026",
      desc:
        "Delivered backend features for a banking virtual assistant supporting high-volume customer conversations with smooth escalation to human support, improving resolution experience and operational reliability.",
      descBullets: [
        "Built a reliable bot-to-agent handoff flow that transfers the customer along with full conversation context, helping agents start faster and reducing repeated questions.",
        "Designed and maintained customer queue + agent routing logic to ensure fair assignment, minimal waiting time, and stable handling during peak traffic.",
        "Improved operational reliability with background workflows and safeguards (retries, timeouts, monitoring hooks) for follow-ups, session cleanup, and failure recovery."
      ]
    },
    {
      role: "Full Stack Engineer (MERN)",
      company: "Technoloader Pvt Ltd - Blockchain Development Company",
      companylogo: require("./assets/images/technoloader.png"),
      date: "May 2024 – July 2025",
      desc:
        "Improved app performance and stability for production users by optimizing frontend bundles, API response times, and data flows.",
      descBullets: [
        "Reduced frontend bundle size by ~40% using code-splitting, dependency cleanup, and build optimizations.",
        "Improved API response times (25ms → 8ms) by optimizing query patterns, payloads, and server-side logic.",
        "Implemented caching and smart data-fetching patterns to reduce repeated requests and improve perceived speed.",
        "Improved reliability through structured error handling, logging, and better request validation."
      ]
    },
    {
      role: "Software Engineer (MERN)",
      company: "Avisirah Technologies Pvt Ltd",
      companylogo: require("./assets/images/avrish.jpg"),
      date: "March 2022 – Feb 2024",
      desc:
        "Built and maintained full-stack web applications (admin panels + customer-facing modules) with a focus on reusable UI, clean APIs, and documentation.",
      descBullets: [
        "Built end-to-end features across frontend + backend for student-focused web apps.",
        "Documented APIs using Swagger/OpenAPI to improve developer collaboration and onboarding.",
        "Created reusable components and shared utilities to speed up delivery and maintain consistency.",
        "Worked closely with team to ship features, fix bugs, and improve UX iteratively."
      ]
    },
    {
      role: "Financial Advisor - Equity & Bond Investments",
      company: "Aditya Birla Capital",
      companylogo: require("./assets/images/AditaB.jpeg"),
      date: "Jan 2019 – Feb 2022",
      desc:
        "Managed client portfolios and created research reports, building strong communication, ownership, and client-facing problem-solving skills.",
      descBullets: [
        "Managed a portfolio of 33+ clients and helped them plan equity/bond investments.",
        "Onboarded 10+ new clients through trust-building and clear financial communication.",
        "Prepared research summaries to support data-driven investment decisions."
      ]
    }
  ]
};


// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big projects
const bigProjects = {
  title: "Big Projects",
  subtitle: "PRODUCTS I CONTRIBUTED TO (PRODUCTION / CLIENT PROJECTS)",
  projects: [
    {
      image: require("./assets/images/dyntech.png"),
      projectName: "Dyntech",
      projectDesc:
        "Trading platform enabling clients to trade crypto and other assets with a secure, user-friendly experience.",
      footerLink: [{ name: "Dyntech", url: "https://dynamic.dyntech.io/" }]
    },
    {
      image: require("./assets/images/mahadefi.png"),
      projectName: "Mahadefi",
      projectDesc:
        "Staking platform with automated contract-based flow for blockchain transactions and user operations.",
      footerLink: [{ name: "Mahadefi", url: "http://www.mahadefi.com/" }]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "I write about what I learn while building production web apps.",
  displayMediumBlogs: "true",
  blogs: [], // keep empty when using Medium feed
  display: true
};

// Talks Sections
const talkSection = {
  title: "Talks",
  subtitle: emoji("I like to share what I learn 😅"),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open.",
  number: "+91 7348887772",
  email_address: "surajrkhonde@gmail.com"
};

const testimonialSection = {
  display: true,
  title: "Professional Recommendations",
  subtitle: "Endorsements from teammates & peers",
  testimonialCards: [
    {
      title: "Aman Faridi",
      description:
        "Delivered high-quality work on time, with strong ownership and excellent collaboration.",
      image: Amansir,
      imageAlt: "Aman Faridi",
      footer: [
        {
          url: "https://www.linkedin.com/in/aman-faridi-712402232/",
          name: "Read more on LinkedIn"
        }
      ]
    },
    {
      title: "Jeetu Kumawat",
      description:
        "Strong developer and dependable teammate who cares about product quality and team success.",
      image: jeetuImg,
      imageAlt: "Jeetu Kumawat",
      footer: [
        {
          url: "https://www.linkedin.com/in/jeetu-kumawat-9a3061184/",
          name: "Read more on LinkedIn"
        }
      ]
    }
  ]
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection,
  testimonialSection
};
