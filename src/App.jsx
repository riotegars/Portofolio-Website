import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";
import profile from "./assets/profile.jpg";
import emailjs from "@emailjs/browser";
import {
  FaPython,
  FaTools,
  FaBriefcase,
  FaDatabase,
  FaBrain,
  FaChartBar,
  FaDownload
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import biLogo from "./assets/logo bi.png";
import ipcLogo from "./assets/Logo_Baru_Pelindo_(2021).png";
import Swal from "sweetalert2";
import { Analytics } from "@vercel/analytics/react";

function AnimatedCounter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let current = 0;

    const timer = setInterval(() => {
      current++;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 300);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}
export default function PortfolioWebsite() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const skills = [
    "Python",
    "SQL",
    "Tableau",
    "Power BI",
    "Power Apps",
    "MS.Office",
    "Data Analysis",
    "Looker Studio"
  ];

  const experiences = [
    {
      title: "Power Apps Developer Intern",
      company: "Bank Indonesia",
      logo: biLogo,
      year: "July 2024 - October 2024",
      desc: [
              "Improving the internal application used by employees for document number generation.",
              "Designing and developing a system to automatically generate document numbers based on user input.",
              "Migrating the database from Excel to SharePoint as the new database to enhance efficiency and security.",
              "Developing a Power Apps-based application to facilitate document management and automation, utilizing SharePoint as the backend."
             ]
    },
    {
      title: "Technical Writer",
      company: "PT IPC Terminal Petikemas",
      logo: ipcLogo,
      year: "August 2025 - Present",
      desc: [
        "Analyzed system workflows and business processes, documenting them through diagrams and technical specifications.",
        "Developed and maintained structured technical documentation, including System Documentation, User Guides, APIDocumentation, and Knowledge Base.",
        "Translated business requirements into clear and actionable technical documentation for both technical and non-technical stakeholders.",
        "Collaborated with product teams, developers, and stakeholders to gather requirements and ensure alignment between business needs and system solutions.",
        "Contributed to the development of analytical documents such as Business Requirement Documents (BRD) and Functional Specification Documents (FSD).",
        "Interpreted data insights to enhance documentation quality and support data-driven decision-making",
      ]
    },
  ];

  const projects = [
   {
      name: "Jakarta Public Transport Accessibility Analysis",
      tech: "Power BI, Python, Pandas, GeoPandas",
      desc: "An end-to-end data analytics project that evaluates public transport accessibility across Jakarta districts by analyzing the gap between population mobility needs and transport infrastructure availability.",
      link: "https://github.com/riotegars/jakarta-public-transport-accessibility-analysis",
      image: "jakarta-dashboard.jpg",
      details:[
                "Developed Demand Score, Supply Score, and Gap Score metrics to measure accessibility inequalities.",
                "Performed geospatial analysis across 44 districts using GeoPandas and Jakarta administrative boundary data",
                "Identified Johar Baru, Koja, and Cilincing as districts with the highest public transport accessibility gaps.",
                "Built an interactive Power BI dashboard to visualize transport accessibility, infrastructure distribution, and underserved areas.",
                "Revealed that public transport infrastructure distribution is not yet fully aligned with mobility demand across several districts in North and East Jakarta."]
    },
    {
      name: "Chelsea FC Performance Analysis",
      tech: "Power BI, PostgreSQL",
      desc: "Interactive dashboard for monitoring operational data and analytics.",
      link: "https://github.com/riotegars/chelsea-performance-analysis",
      image: "Chelsea Dashboard.jpeg",
      details:[
                "Interactive KPI Dashboard",
                "Games Performance Analysis",
                "Match Statistics Tracking",
                "Built using Power BI & PostgreSQL"]
    },
    {
      name: "Sample Superstore Analysis",
      tech: "Power BI, PostgreSQL",
      desc: "This project analyzes the Sample Superstore dataset using SQL. The goal is to explore sales performance, profit trends, and product category insights to better understand business performance.",
      link:"https://github.com/riotegars/sample-superstore-analysis",
      image: "Superstore Dahboard.jpeg", 
      details:[
                "Interactive KPI Dashboard",
                "Technology category generates the highest sales.",
                "Some sub-categories have high discounts but low profit.",
                "Sales trends vary across different regions.",
                "Built using Power BI & PostgreSQL"]

    },
    {
      name: "Covid-19 Dashboard",
      tech: "Tableau",
      desc: "The COVID-19 Spread Dashboard is an interactive visualization project that displays COVID-19 case distribution, recovery rates, and death statistics across different regions.",
      link: "https://public.tableau.com/app/profile/rio.tegar.syahputra/viz/Covid-19Dashboard_17124790268740/Dashboard1?publish=yes",
      image: "Covid Dashboard.png",
      details:[
                "Analyzed global COVID-19 trends and case growth",
                "Created interactive dashboards for cases, deaths, and recoveries",
                "Compared country-level pandemic performance",
                "Built visualizations using Power BI and SQL"
              ]
    },

        {
      name: "Dashboard Performance Superstore",
      tech: "Tableau",
      desc: "Interactive business intelligence project designed to analyze sales, profit, and customer performance data. The dashboard provides insights into product sales, regional performance, and business trends through visual charts and reports, helping users make data-driven decisions effectively.",
      link: "https://public.tableau.com/app/profile/rio.tegar.syahputra/viz/dashboardperformancesuperstore/Dashboard1?publish=yes",
      image: "Sales Dashboard.png",
      details: [
                "Analyzed sales, profit, and customer performance",
                "Identified top-performing products and categories",
                "Created regional and segment-based insights",
                "Developed interactive dashboards using Power BI"
              ]
    },
    {
      name: "Dashboard Highest Grossing Movies",
      tech: "Tableau",
      desc: "The Highest Grossing Movies Dashboard is an interactive data visualization project that analyzes the world’s highest-grossing films based on revenue, genre, ratings, and release year.",
      link: "https://public.tableau.com/app/profile/rio.tegar.syahputra/viz/HighestHolywoodGrossingMovies_17126560146630/Dashboard1",
      image: "Movies Dashboard.png",
      details: [
            "Explored worldwide box office revenue trends",
            "Identified top-grossing movies across genres",
            "Analyzed relationships between ratings and revenue",
            "Built interactive visualizations using Power BI and SQL"
          ]
    }
  ];
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "portofolio_contact",
    "template_p33fscr",
    e.target,
    "rmvUfrkrTrcjpKSIu"
  )
  .then(() => {

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Email sent successfully!",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    e.target.reset();

  })
  .catch((error) => {

    console.error(error);

        Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Email sent successfully!",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: "#ffffff",
      color: "#1f2937",
    });

  });
};
const stats = [
  {
    icon: <FaChartBar />,
    value: 3,
    suffix: "+",
    label: "Analytics Projects",
  },
  {
    icon: <FaBriefcase />,
    value: 2,
    suffix: "",
    label: "Industry Experience",
  },
  {
    icon: <FaTools />,
    value: 8,
    suffix: "+",
    label: "Analytics Tools",
  },
   {
    icon: <FaDatabase />,
    text: "SQL",
    label: "Power BI",
  }
];
const itemsPerPage = 3;

const nextProjects = () => {
  if (startIndex + itemsPerPage < projects.length) {
    setStartIndex(startIndex + itemsPerPage);
  }
};

const prevProjects = () => {
  if (startIndex - itemsPerPage >= 0) {
    setStartIndex(startIndex - itemsPerPage);
  }
};
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* Background Glow */}
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-200 blur-[150px] rounded-full opacity-15" />

      {/* Navbar */}
     <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm">

  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* Logo */}
    <div className="flex items-center gap-3">

      <div className="w-10 h-10 rounded-full bg-gradient-to-r bg-gradient-to-r from-blue-700 to-slate-800 flex items-center justify-center text-white font-bold shadow-md">
        R
      </div>

      <h1 className="text-xl font-bold tracking-wide text-gray-900">
        Rio Tegar Syahputra
      </h1>

    </div>

    {/* Menu */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
      <a
        href="#home"
        className="hover:text-blue-800 transition relative group"
      >
        Home
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
      </a>
      <a
        href="#about"
        className="hover:text-blue-800 transition relative group"
      >
        About
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
      </a>

      <a
        href="#experience"
        className="hover:text-blue-800 transition relative group"
      >
        Experience
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
      </a>

      <a
        href="#projects"
        className="hover:text-blue-800 transition relative group"
      >
        Projects
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
      </a>

      <a
        href="#contact"
        className="hover:text-blue-800 transition relative group"
      >
        Contact
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-800 transition-all group-hover:w-full"></span>
      </a>

      {/* Resume Button */}
      <a
        href="/CV - Rio Tegar Syahputra.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-xl bg-gradient-to-r bg-gradient-to-r from-blue-700 to-slate-800 text-white shadow-md hover:scale-105 transition"
      >
        Resume
      </a>

    </div>

  </div>
</nav>

      {/* Hero Section */}
  <section 
  id="home"
  className="relative min-h-screen flex items-center px-6 pt-24 md:pt-0">  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

  {/* Left Side */}
  <div>

    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
      Rio Tegar Syahputra

<TypeAnimation
  sequence={[
    "Data Analyst",
    2000,
    "Business Intelligence Analyst",
    2000,
    "Data Visualization Specialist",
    2000,
    "SQL & Power BI Enthusiast",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="block mt-3 text-3xl md:text-3xl font-bold leading-relaxed bg-gradient-to-r from-blue-700 to-slate-800 bg-clip-text text-transparent"
/>
    </h1>

    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
      Transforming raw data into actionable insights through SQL, Power BI, Tableau, and Python. Passionate about data storytelling, business intelligence, and data-driven decision making.
    </p>

    <div className="grid grid-cols-3 gap-4 mt-8 max-w-md">

    <div className="
      group
      bg-white/80
      backdrop-blur-sm
      rounded-2xl
      p-4
      text-center
      shadow-md
      border
      border-gray-300

      hover:-translate-y-3
      hover:shadow-5x1
      hover:border-white

      transition-all
      duration-300
      cursor-pointer
    ">

      <h3 className="
        text-2xl
        font-bold
        text-blue-800
        transition-transform
        duration-300
        group-hover:scale-110
      ">
        <AnimatedCounter end={5} suffix="+" />
      </h3>

      <p className="text-sm text-gray-500">
        Projects
      </p>

    </div>

    <div className="
      group
      bg-white/80
      backdrop-blur-sm
      rounded-2xl
      p-4
      text-center
      shadow-md
      border
      border-gray-300

      hover:-translate-y-3
      hover:shadow-5x1
      hover:border-white

      transition-all
      duration-300
      cursor-pointer
    ">

      <h3 className="
        text-2xl
        font-bold
        text-blue-800
        transition-transform
        duration-300
        group-hover:scale-110
      ">
        <AnimatedCounter end={2} suffix="+" />
      </h3>

      <p className="text-sm text-gray-500">
        Eksperience
      </p>

    </div>

    <div className="
      group
      bg-white/80
      backdrop-blur-sm
      rounded-2xl
      p-4
      text-center
      shadow-md
      border
      border-gray-300

      hover:-translate-y-3
      hover:shadow-5x1
      hover:border-white

      transition-all
      duration-300
      cursor-pointer
    ">

      <h3 className="
        text-2xl
        font-bold
        text-blue-800
        transition-transform
        duration-300
        group-hover:scale-110
      ">
        <AnimatedCounter end={8} suffix="+" />
      </h3>

      <p className="text-sm text-gray-500">
        Analytics Tools
      </p>

    </div>

</div>
    <div className="mt-10 flex flex-col sm:flex-row gap-4">

      <a
        href="#projects"
        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-700 to-slate-800 text-white font-semibold hover:scale-105 transition duration-300 shadow-xl"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="px-8 py-4 rounded-2xl border border-gray-300 hover:bg-gray-100 transition duration-300"
      >
        Contact Me
      </a>

    </div>

  </div>

  {/* Right Side */}
  <div className="flex justify-center">

    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-slate-800 blur-3xl opacity-20 rounded-full"></div>

    <img
      src={profile}
      alt="Rio Tegar"
      className="
        relative
        w-[350px]
        h-[350px]
        object-cover
        rounded-full
        border-8
        border-white
        shadow-2xl
        hover:scale-105
        transition-all
        duration-500
      "
    />

    </div>

  </div>

</div>
      </section>

      
  
      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              A highly motivated graduate with a strong passion for Data Intelligent Computing and hands-on experience in developing data-driven solutions.
              Skilled in Python for automation, data analysis, and machine learning, with practical knowledge in building and optimizing neural networks using TensorFlow.
              Demonstrated ability to apply technical expertise to real-world challenges, with a focus on delivering impactful and intelligent outcomes.
              Committed to continuous learning and contributing to innovative, data-centric environments.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">

            {skills.map((skill, index) => (

              <div
                key={index}
                className="bg-gray-100 border border-gray-200 rounded-2xl p-5 hover:bg-gray-200 transition"
              >
                <p className="font-medium">
                  {skill}
                </p>
              </div>

            ))}

          </div>

        </div>
      </section>
              {/* Projects */}
  <section
  id="projects"
  className="max-w-6xl mx-auto px-6 py-24"
>

  <div className="flex justify-between items-center mb-12">

    <h2 className="text-4xl font-bold">
      Featured Projects
    </h2>

    <div className="flex gap-3">

<button
  onClick={prevProjects}
  className="
    w-12 h-12
    rounded-xl
    border border-gray-200
    bg-white/80
    backdrop-blur-md
    shadow-md
    hover:shadow-lg
    hover:-translate-y-1
    transition-all
  "
>
  ←
</button>

<button
  onClick={nextProjects}
  className="
    w-12 h-12
    rounded-xl
    bg-blue-800
    text-white
    shadow-md
    hover:bg-blue-900
    hover:-translate-y-1
    hover:shadow-lg
    transition-all
  "
>
  →
</button>

    </div>

  </div>

  <motion.div
    key={startIndex}
    initial={{ x: 80, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
     }}
    className="grid md:grid-cols-3 gap-8"
  >
    {projects
    .slice(startIndex, startIndex + 3)
    .map((project, index) => (

      <div
        key={index}
        onClick={() => setSelectedProject(project)}
        className="
          cursor-pointer
          bg-white
          border
          border-gray-200
          rounded-3xl
          p-8
          shadow-lg
          hover:-translate-y-2
          hover:shadow-xl
          transition-all
          duration-300
        "
      >

          <div className="
            w-14 h-14
            rounded-2xl
            bg-blue-900
            text-white
            flex
            items-center
            justify-center
            font-bold
            mb-6
          ">
            {startIndex + index + 1}
          </div>

          <h3 className="text-xl font-bold mb-3">
            {project.name}
          </h3>

          <p className="text-blue-700 text-sm mb-4">
            {project.tech}
          </p>

          <p className="text-gray-600 text-sm line-clamp-4">
            {project.desc}
          </p>

          <div className="mt-6 text-blue-700 font-medium">
            View Details →
          </div>

        </div>

      ))}

  </motion.div>

      {/* Technical Skills */}
<section id="skills" className="py-24 px-6 bg-gray-50">

  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <div className="text-center mb-20">

      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Technical Skills
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-slate-700 mx-auto rounded-full mb-4" />

      <p className="text-gray-600 text-lg">
        Areas of Expertise
      </p>

    </div>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

        <div className="text-blue-800 text-5xl mb-6 flex justify-center">
          <FaPython />
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">
          Programming
        </h3>

        <div className="space-y-4 text-gray-600">

          <p>✓ Python</p>
          <p>✓ SQL</p>
          <p>✓ TensorFlow</p>
          <p>✓ Data Structures</p>
          <p>✓ Automation Scripting</p>

        </div>

      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

        <div className="text-blue-800 text-5xl mb-6 flex justify-center">
          <FaDatabase />
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">
          Data Analytics
        </h3>

        <div className="space-y-4 text-gray-600">

          <p>✓ Data Cleaning</p>
          <p>✓ PostgreSQL</p>
          <p>✓ Data Visualization</p>
          <p>✓ Statistical Analysis</p>
          <p>✓ Exploratory Data Analysis</p>

        </div>

      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

        <div className="text-blue-800 text-5xl mb-6 flex justify-center">
          <FaBrain />
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">
          Machine Learning
        </h3>

        <div className="space-y-4 text-gray-600">

          <p>✓ CNN</p>
          <p>✓ Neural Networks</p>
          <p>✓ Model Training</p>
          <p>✓ Image Classification</p>
          <p>✓ Deep Learning</p>

        </div>

      </div>

        {/* Technical Skills */}
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

          <div className="text-blue-800 text-5xl mb-6 flex justify-center">
            <FaChartBar />
          </div>

          <h3 className="text-2xl font-bold text-center mb-8">
            Business Intelligence
          </h3>

          <div className="space-y-4 text-gray-600">

            <p>✓ Power BI</p>
            <p>✓ Tableau</p>
            <p>✓ Looker Studio</p>
            <p>✓ Dashboard Development</p>
            <p>✓ Reporting & Insights</p>

          </div>

        </div>

      </div>

    </div>

  </section>

      {/* Experience */}
      <section id="experience" className="bg-gray-50 py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Experience
          </h2>

          <div className="space-y-8">

            {experiences.map((exp, index) => (

              <div
                key={index}
               className="
                            group
                            bg-white
                            rounded-3xl
                            p-8
                            shadow-lg
                            border
                            border-gray-200
                            hover:-translate-y-3
                            hover:shadow-5x1
                            hover:border-grey-500
                            transition-all
                            duration-300
                          "
              >

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">

                  <div className="flex items-center gap-4">

                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-14 h-14 object-contain rounded-xl bg-white p-1 shadow-sm"
                />

                <div>
                  <h3 className="text-2xl font-semibold">
                    {exp.title}
                  </h3>

                  <p className="text-blue-900 font-medium">
                    {exp.company}
                  </p>
                </div>

              </div>

                  <span className="text-gray-500 mt-2 md:mt-0">
                    {exp.year}
                  </span>

                </div>

                <div className="space-y-3">
                  {exp.desc.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">

                      <FaCheckCircle className="text-blue-800 mt-1 text-sm" />

                      <p className="text-gray-600 leading-relaxed">
                        {item}
                      </p>

                    </div>
                  ))}
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>



</section>
      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-800 to-slate-800 border border-gray-200 rounded-[2rem] p-12 text-center shadow-xl">

          <h2 className="text-white text-4xl font-bold mb-6">
            Let’s Build Something Amazing Together
          </h2>

          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Open to collaborations, freelance opportunities, and exciting technology projects.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-2 rounded-2xl bg-gray-900 text-white font-semibold hover:scale-105 transition"
          >
            Get In Touch
          </a>

        </div>

      </section>

  {/* Contact */}
      <section
      id="contact"
       className="py-24 px-6 bg-gray-50 border-t border-gray-200"
      >
    <div className="max-w-5xl mx-auto">
    {/* Title */}
    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Get In Touch
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-slate-800 mx-auto rounded-full mb-4" />

      <p className="text-gray-500 text-xl">
        Let's discuss opportunities
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-start">      {/* Left Side */}
      <div>

        <h3 className="text-4xl font-bold mb-8 text-gray-900">
          Contact Information
        </h3>

        <p className="text-gray-600 text-base leading-relaxed mb-12">
          I'm currently open to discussing new opportunities,
          collaborations, or infrastructure challenges.
          Feel free to reach out!
        </p>

        {/* Email */}
        <div className="flex items-start gap-5 mb-7">
          <div className="text-blue-800 text-2xl mt-1">
            <FaEnvelope />
          </div>

          <div>
            <h4 className="font-bold text-xl text-gray-900">
              Email
            </h4>

            <p className="text-gray-600 text-lg">
              tegarsrio12@email.com
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-5 mb-7">
          <div className="text-blue-800 text-2xl mt-1">
            <FaMapMarkerAlt />
          </div>

          <div>
            <h4 className="font-bold text-xl text-gray-900">
              Location
            </h4>

            <p className="text-gray-600 text-lg">
              Jakarta Selatan, Indonesia
            </p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-start gap-5 mb-14">
          <div className="text-blue-800 text-2xl mt-1">
            <FaLinkedin />
          </div>

          <div>
            <h4 className="font-bold text-xl text-gray-900">
              LinkedIn
            </h4>

            <p className="text-gray-600 text-lg">
              linkedin.com/in/riotegarsyahputra
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">

          <a
            href="mailto:tegarsrio12@email.com"
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-gray-800 hover:scale-110 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/in/riotegarsyahputra"
            target="_blank"
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-gray-800 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/riotegarsyahputra"
            target="_blank"
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-gray-800 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

        </div>
      </div>

      {/* Right Side Form */}
      <div>

        <form onSubmit={sendEmail} className="space-y-10">

          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-10 bg-transparent border-b border-gray-300 py-2 outline-none text-lg focus:border-blue-500 transition"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-10 bg-transparent border-b border-gray-300 py-2 outline-none text-lg focus:border-blue-500 transition"
            />
          </div>

          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-10 bg-transparent border-b border-gray-300 py-2 outline-none text-lg focus:border-blue-500 transition"
            />
          </div>

          <div>
            <textarea
              rows="3"
              name="message"
              placeholder="Your Message"
              className="w-full px-10 bg-transparent border-b border-gray-300 py-2 outline-none text-lg focus:border-blue-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-10 py-3 rounded-2xl bg-blue-900 text-white text-lg font-semibold hover:bg-blue-700 transition shadow-xl"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

    {/* Footer */}
    <div className="text-center mt-24 text-gray-500">
      © 2026 Rio Tegar Syahputra. All rights reserved.
    </div>

  </div>
</section>  
{selectedProject && (

  <div
    className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/30
      backdrop-blur-md
      p-4
    "
    onClick={() => setSelectedProject(null)}
  >

    <div
      onClick={(e) => e.stopPropagation()}
      className="
        bg-white
        rounded-[16px]
        overflow-hidden
        max-w-xl
        w-full
        max-h-[90vh]
        overflow-y-auto
        shadow-2xl
        relative
      "
    >

      {/* Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="
        bg-white
        rounded-[32px]
        overflow-hidden
        max-w-3xl
        w-full
        max-h-[85vh]
        overflow-y-auto
        shadow-2xl
        relative
        "
      >
        ✕
      </button>

      {/* Banner */}
      <img
        src={selectedProject.image}
        alt={selectedProject.name}
        className="w-full h-80 object-contain"
      />

      {/* Content */}
      <div className="p-6">

        <h2 className="text-3xl font-bold mb-2">
          {selectedProject.name}
        </h2>

        <p className="text-blue-500 font-medium mb-6">
          {selectedProject.tech}
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Key Insights
        </h3>

        <ul className="space-y-3">

          {selectedProject.details?.map((item, index) => (

            <li
              key={index}
              className="flex items-center gap-3"
            >
              📊 {item}
            </li>

          ))}

        </ul>

      </div>

    </div>

  </div>

)}
    </div>
  );
  }