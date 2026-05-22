import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Trophy,
  Terminal,
} from "lucide-react";

import {
  SiReact,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

export default function App() {
  const skills = [
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "C++",
      icon: <SiCplusplus />,
    },
    {
      name: "Python",
      icon: <SiPython />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
    },
  ];

  const stats = [
    {
      title: "Codeforces",
      value: "1332",
      desc: "Max Rating",
    },
    {
      title: "CodeChef",
      value: "1629",
      desc: "Max Rating",
    },
    {
      title: "LeetCode",
      value: "1540",
      desc: "Contest Rating",
    },
    {
      title: "DSA Problems",
      value: "400+",
      desc: "Solved",
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}

      <nav className="navbar">
        <h1>Nishant Phogat</h1>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#stats">Stats</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}

      <section className="hero">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-left"
        >
          <p className="tag"></p>

          <h1>
            Nishant
            <span> Phogat</span>
          </h1>

          <h2>
            Competitive Programmer & Full Stack Developer
          </h2>

          <p className="hero-desc">
            Computer Science student at NIT Durgapur passionate about
            competitive programming, scalable systems and modern web
            applications.
          </p>

          <div className="hero-buttons">

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
              className="secondary-btn"
            >
              <Github size={18} />
              GitHub
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-right"
        >
          <div className="glow-circle"></div>
        </motion.div>

      </section>

      {/* About */}

      <section className="section" id="about">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass-card"
        >
          <h3>About Me</h3>

          <p>
            I am pursuing B.Tech in Computer Science Engineering from
            National Institute of Technology, Durgapur. I actively
            participate in competitive programming and build scalable
            full stack applications using modern technologies.
          </p>

        </motion.div>

      </section>

      {/* Skills */}

      <section className="section" id="skills">

        <h2 className="section-title">
          Tech Stack
        </h2>

        <div className="skills-grid">

          {
            skills.map((skill, index) => (

              <motion.div
                whileHover={{ scale: 1.08 }}
                key={index}
                className="skill-card"
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h3>{skill.name}</h3>

              </motion.div>

            ))
          }

        </div>

      </section>

      {/* Stats */}

      <section className="section" id="stats">

        <h2 className="section-title">
          Coding Profiles
        </h2>

        <div className="stats-grid">

          {
            stats.map((item, index) => (

              <motion.div
                whileHover={{ y: -8 }}
                key={index}
                className="stats-card"
              >
                <Trophy className="stats-icon" />

                <h3>{item.title}</h3>

                <h1>{item.value}</h1>

                <p>{item.desc}</p>

              </motion.div>

            ))
          }

        </div>

        <div className="platform-links">

          <a
            href="https://codeforces.com/profile/phogatnishantt"
            target="_blank"
          >
            Codeforces
          </a>

          <a
            href="https://www.codechef.com/users/phogatx05"
            target="_blank"
          >
            CodeChef
          </a>

          <a
            href="https://leetcode.com/"
            target="_blank"
          >
            LeetCode
          </a>

        </div>

      </section>

      {/* Projects */}

      <section className="section" id="projects">

        <h2 className="section-title">
          Featured Project
        </h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="project-card"
        >

          <Terminal className="project-icon" />

          <h2>
            Real Time Stock Market Analytics Platform
          </h2>

          <p>
            Full stack stock analytics platform using React.js,
            Node.js, PostgreSQL, Redis and Prisma ORM with live
            market tracking, portfolio management and interactive
            dashboards.
          </p>

          <div className="project-tech">

            <span>React</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Redis</span>

          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/phogatnishantt/Stock-Market-Platform"
              target="_blank"
            >
              <Github size={18} />
              Repository
            </a>

          </div>

        </motion.div>

      </section>

      {/* Contact */}

      <section className="section" id="contact">

        <div className="contact-card">

          <h2>
            Let's Connect
          </h2>

          <p>
            Open for collaborations, projects and opportunities.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:phogatnishant0508@gmail.com"
              className="primary-btn"
            >
              <Mail size={18} />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/nishant-phogat-3478a7360/"
              target="_blank"
              className="secondary-btn"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}