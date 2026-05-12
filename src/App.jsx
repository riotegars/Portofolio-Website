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
  FaDatabase,
  FaBrain,
  FaChartBar
} from "react-icons/fa";

export default function PortfolioWebsite() {
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
      name: "Chelsea FC Performance Analysis",
      tech: "Power BI, PostgreSQL",
      desc: "Interactive dashboard for monitoring operational data and analytics.",
      link: "https://github.com/riotegars/chelsea-performance-analysis"
    },
    {
      name: "Sample Superstore Analysis",
      tech: "Power BI, PostgreSQL",
      desc: "This project analyzes the Sample Superstore dataset using SQL. The goal is to explore sales performance, profit trends, and product category insights to better understand business performance.",
      link:"https://github.com/riotegars/sample-superstore-analysis"
    },
    {
      name: "Breast Cancer Classification Using Weighted CNN",
      tech: "TensorFlow, Python",
      desc: "This project focuses on classifying breast cancer using a weighted Convolutional Neural Network (CNN) implemented in TensorFlow. The model is designed to handle imbalanced datasets by assigning different weights to classes, improving classification performance and accuracy.",
      link: "https://github.com/riotegars/breast-cancer-clasification-using-weighted-CNN"
    },
    {
      name: "Covid-19 Dashboard",
      tech: "Tableau",
      desc: "The COVID-19 Spread Dashboard is an interactive visualization project that displays COVID-19 case distribution, recovery rates, and death statistics across different regions.",
      link: "https://public.tableau.com/app/profile/rio.tegar.syahputra/viz/Covid-19Dashboard_17124790268740/Dashboard1?publish=yes"
    },
        {
      name: "Dashboard Performance Superstore",
      tech: "Tableau",
      desc: "Interactive business intelligence project designed to analyze sales, profit, and customer performance data. The dashboard provides insights into product sales, regional performance, and business trends through visual charts and reports, helping users make data-driven decisions effectively.",
      link: "https://public.tableau.com/app/profile/rio.tegar.syahputra/viz/dashboardperformancesuperstore/Dashboard1?publish=yes"
    },
    {
      name: "Dashboard Highest Grossing Movies",
      tech: "Tableau",
      desc: "The Highest Grossing Movies Dashboard is an interactive data visualization project that analyzes the world’s highest-grossing films based on revenue, genre, ratings, and release year.",
      link: "https://public.tableau.com/app/profile/rio.tegar.syahputra/viz/HighestHolywoodGrossingMovies_17126560146630/Dashboard1"
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
      alert("Message Sent Successfully!");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 blur-3xl rounded-full opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 blur-3xl rounded-full opacity-40" />

      {/* Navbar */}
     <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm">

  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* Logo */}
    <div className="flex items-center gap-3">

      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
        R
      </div>

      <h1 className="text-xl font-bold tracking-wide text-gray-900">
        Rio Tegar Syahputra
      </h1>

    </div>

    {/* Menu */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">

      <a
        href="#about"
        className="hover:text-blue-600 transition relative group"
      >
        About
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
      </a>

      <a
        href="#experience"
        className="hover:text-blue-600 transition relative group"
      >
        Experience
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
      </a>

      <a
        href="#projects"
        className="hover:text-blue-600 transition relative group"
      >
        Projects
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
      </a>

      <a
        href="#contact"
        className="hover:text-blue-600 transition relative group"
      >
        Contact
        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
      </a>

      {/* Resume Button */}
      <a
        href="#"
        className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:scale-105 transition"
      >
        Home
      </a>

    </div>

  </div>
</nav>

      {/* Hero Section */}
  <section className="relative min-h-screen flex items-center px-6 pt-24 md:pt-0">  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

  {/* Left Side */}
  <div>

    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
      Rio Tegar Syahputra

      <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Data Enthusiast
      </span>
    </h1>

    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
      Passionate about Data Intelligent Computing with hands-on experience
      in Python, data analysis, and machine learning.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row gap-4">

      <a
        href="#projects"
        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-xl"
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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-3xl opacity-20 rounded-full"></div>

      <img
        src={profile}
        alt="Rio Tegar"
        className="relative w-[350px] h-[350px] object-cover rounded-full border-8 border-white shadow-2xl"
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

      {/* Technical Skills */}
<section id="skills" className="py-24 px-6 bg-gray-50">

  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <div className="text-center mb-20">

      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Technical Skills
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />

      <p className="text-gray-500 text-lg">
        Areas of Expertise
      </p>

    </div>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300">

        <div className="text-blue-600 text-5xl mb-6 flex justify-center">
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

        <div className="text-blue-600 text-5xl mb-6 flex justify-center">
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

        <div className="text-blue-600 text-5xl mb-6 flex justify-center">
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

          <div className="text-blue-600 text-5xl mb-6 flex justify-center">
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
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:border-blue-400 transition"
              >

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {exp.title}
                    </h3>

                    <p className="text-blue-500">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-gray-500 mt-2 md:mt-0">
                    {exp.year}
                  </span>

                </div>

                <div className="space-y-3">
                  {exp.desc.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">

                      <FaCheckCircle className="text-blue-500 mt-1 text-sm" />

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

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300 hover:border-purple-400 hover:shadow-2xl cursor-pointer"
          >

              <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mb-6 flex items-center justify-center text-xl font-bold text-white">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {project.name}
              </h3>

              <p className="text-blue-500 text-sm mb-4">
                {project.tech}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {project.desc}
              </p>

            </a>

          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-100 to-purple-100 border border-gray-200 rounded-[2rem] p-12 text-center shadow-xl">

          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Amazing Together
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
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

      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />

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
          <div className="text-blue-600 text-2xl mt-1">
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
          <div className="text-blue-600 text-2xl mt-1">
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
          <div className="text-blue-600 text-2xl mt-1">
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
            className="w-full px-10 py-3 rounded-2xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition shadow-xl"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

    {/* Footer */}
    <div className="text-center mt-24 text-gray-500">
      © 2026 Rio Tegar Syahutra. All rights reserved.
    </div>

  </div>
</section>  
    </div>
  );
  }