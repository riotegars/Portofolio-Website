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
      year: "2024",
      desc: "Designing and developing a system to automatically generate document numbers based on user input."
    },
    {
      title: "Technical Writer",
      company: "PT IPC Terminal Petikemas",
      year: "2024",
      desc: "Analyzed system workflows and business processes, documenting them through diagrams and technicalspecifications"
    },
  ];

  const projects = [
    {
      name: "Chelsea FC Performance Analysis",
      tech: "Tableau, Postgree SQL",
      desc: "Interactive dashboard for monitoring operational data and analytics."
    },
    {
      name: "Automation App",
      tech: "Power Apps, Microsoft Ecosystem",
      desc: "Internal workflow automation application to improve efficiency and reduce manual tasks."
    },
    {
      name: "Basketball Training Program",
      tech: "Planning & Sports Development",
      desc: "Structured basketball training program designed for toddler skill development."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Rio Tegar</h1>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center min-h-screen px-6">
        <div className="max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Rio Tegar Syahputra
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Data Enthusiast
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Passionate about Data Intelligent Computing with hands-on experience in Python, data analysis, and machine learning.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-105 transition duration-300 shadow-2xl"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
             A highly motivated graduate with a strong passion for Data Intelligent Computing and hands-on experience in developing data-driven solutions. 
             Skilled in Python for automation, data analysis, and machine learning, with practical knowledge in building and optimizing neural networks using TensorFlow. 
             Demonstrated ability to apply technical expertise to real-world challenges, with a focus on delivering impactful and intelligent outcomes. Committed to continuous learning and contributing to innovative, data-centric environments.


            </p>

          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-black/40 border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.year}</span>
                </div>

                <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 hover:border-purple-500/50"
            >
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mb-6 flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
              <p className="text-blue-400 text-sm mb-4">{project.tech}</p>
              <p className="text-gray-300 leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[2rem] p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Amazing Together
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Open to collaborations, internships, freelance opportunities, and exciting technology projects.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>

          <p className="text-gray-300 text-lg mb-10">
            Interested in working together or discussing a project?
            Feel free to reach out.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:yourmail@email.com"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              Email
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-16">
            © 2026 Rio Tegar Syahutra. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
