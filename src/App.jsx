import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import {
  SiReact,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiPostman,
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  SiHtml5,
  SiExpress,
  SiFlask,
  SiVite,
  SiC,
  SiFigma,
} from "react-icons/si";

import "./style.css";

const techCategories = [
  {
    title: "Languages",
    items: [
      { icon: <SiC />, name: "C Langugae" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiJavascript />, name: "JavaScript" },
    ],
  },

  {
  title: "Frontend",
  items: [
    { icon: <SiReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiHtml5 />, name: "HTML5" },
  ],
},

  {
    title: "Backend",
    items: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiFlask />, name: "Flask" },
    ],
  },

  {
    title: "Databases",
    items: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiRedis />, name: "Redis" },
    ],
  },

  {
    title: "Machine Learning",
    items: [
      { icon: <SiPython />, name: "Scikit-Learn" },
      { icon: <SiPython />, name: "Pandas" },
      { icon: <SiPython />, name: "NumPy" },
      { icon: <SiPython />, name: "LightGBM" },
      { icon: <SiPython />, name: "XGBoost" },
    ],
  },

  {
  title: "Tools",
  items: [
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVite />, name: "Vite" },
  ],
},
];

const cpProfiles = [
  {
    icon: <SiCodeforces />,
    name: "Codeforces",
    rating: "1421",
    rank: "Specialist",
    link: "https://codeforces.com/profile/phogatnishantt",
  },

  {
    icon: <SiCodechef />,
    name: "CodeChef",
    rating: "1639",
    rank: "3★ Coder",
    link: "https://www.codechef.com/users/phogatx05",
  },

  {
    icon: <SiLeetcode />,
    name: "LeetCode",
    rating: "Problem Solving",
    rank: "DSA & CP",
    link: "https://leetcode.com/u/phogatnishantt/",
  },

  {
    icon: "🏆",
    name: "AtCoder",
    rating: "180",
    rank: "Highest Rating",
    link: "https://atcoder.jp/users/phogatnishantt",
  },
];

const projects = [
  {
    title: "Customer Retention Analytics",
    description:
      "AI-powered customer churn prediction platform designed to identify at-risk customers before they leave. Built using FastAPI, React, LightGBM and Scikit-Learn with interactive analytics dashboards and real-time prediction capabilities.",

    tech: [
      "React",
      "FastAPI",
      "LightGBM",
      "Scikit-Learn",
      "PostgreSQL",
    ],

    github:
      "https://github.com/phogatnishantt/Customer-retention-analytics",
  },

  {
    title: "Real-Time Stock Market Analytics",
    description:
      "Modern stock analytics platform providing market tracking, trend analysis, historical insights and scalable backend architecture using React, Node.js, PostgreSQL, Redis and Docker.",

    tech: [
      "React",
      "Node.js",
      "Redis",
      "Docker",
      "PostgreSQL",
    ],

    github: "https://github.com/phogatnishantt",
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="aurora aurora1"></div>
      <div className="aurora aurora2"></div>
      <div className="aurora aurora3"></div>
      <nav className="navbar">
        <div className="logo">
          Nishant Phogat<span></span>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#tech">Tech Stack</a>
          <a href="#cp">CP Profiles</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section id="home" className="hero">
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="hero-badge">
              Full Stack Developer • ML Enthusiast • Competitive Programmer
            </span>

            <h1>
              Nishant
              <br />
              <span>Phogat</span>
            </h1>

            <p>
              Crafting scalable applications, AI-powered
              solutions and high-performance systems using
              modern web technologies and machine learning.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="https://github.com/phogatnishantt"
                target="_blank"
                rel="noreferrer"
                className="glass-btn"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/nishant-phogat-3478a7360/"
                target="_blank"
                rel="noreferrer"
                className="glass-btn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:phogatnishant0508@gmail.com"
                className="glass-btn"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hero-right">
          <div className="hero-orb react">
            <SiReact />
          </div>

          <div className="hero-orb node">
            <SiNodedotjs />
          </div>

          <div className="hero-orb python">
            <SiPython />
          </div>

          <div className="hero-orb postgres">
            <SiPostgresql />
          </div>

          <div className="hero-orb docker">
            <SiDocker />
          </div>

          <div className="hero-orb fastapi">
            <SiFastapi />
          </div>
        </div>
      </section>
      <section id="tech" className="section">
        <div className="section-header">
          <span className="section-tag">TECH STACK</span>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="tech-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className="tech-card-header">
                <h3>{category.title}</h3>
              </div>

              <div className="tech-floating-container">
                {category.items.map((tech, i) => (
                  <div
                    key={tech.name}
                    className={`tech-pill tech-pill-${
                      (i % 5) + 1
                    }`}
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="cp" className="section">
        <div className="section-header">
          <span className="section-tag">
            COMPETITIVE PROGRAMMING
          </span>

          <h2>Problem Solving Journey</h2>
        </div>

        <div className="cp-grid">
          {cpProfiles.map((profile, index) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              key={profile.name}
              className="cp-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="cp-icon">
                {profile.icon}
              </div>

              <h3>{profile.name}</h3>

              <div className="cp-info">
                <span>{profile.rating}</span>
                <p>{profile.rank}</p>
              </div>

              <div className="cp-link">
                View Profile →
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      <section id="projects" className="section">
        <div className="section-header">
          <span className="section-tag">
            FEATURED PROJECTS
          </span>

          <h2>Things I've Built</h2>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="project-glow"></div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  <Github size={18} />
                  View Repository
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="contact" className="section">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="contact-glow"></div>

          <span className="section-tag">
            CONTACT
          </span>

          <h2>
            Let's Build Something Amazing
          </h2>

          <p>
            Open to Software Engineering,
            Full Stack Development,
            Machine Learning opportunities
            and exciting collaborations.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:phogatnishant0508@gmail.com"
              className="primary-btn"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://github.com/phogatnishantt"
              target="_blank"
              rel="noreferrer"
              className="glass-btn"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/nishant-phogat-3478a7360/"
              target="_blank"
              rel="noreferrer"
              className="glass-btn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}