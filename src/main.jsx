import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Braces,
} from "lucide-react";
import "./styles.css";

const skills = [
  ["01", "React / Next.js", "Frontend"],
  ["02", "Node.js / Express", "Backend"],
  ["03", "MongoDB", "Database"],
  ["04", "Python / Django", "Backend"],
  ["05", "JavaScript", "Language"],
  ["06", "REST APIs", "Architecture"],
];

const projects = [
  {
    number: "01",
    title: "GAMEVAULT",
    type: "E-COMMERCE / GAMING",
    description:
      "A modern e-commerce platform where gamers can buy game bundles, DLCs, and digital credits instantly. Built with a fast, responsive interface and secure checkout experience.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    number: "02",
    title: "FOOTWEAR",
    type: "E-COMMERCE / RETAIL",
    description:
      "A modern footwear shopping experience focused on seamless product discovery, high-performance filtering, responsive design, and a frictionless checkout flow.",
    tags: ["React", "Express", "MongoDB"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [...document.querySelectorAll("section[id]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.4, 0.7] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="grid-bg" aria-hidden="true" />
      <header className="nav">
        <button className="brand" onClick={() => go("home")} aria-label="Go home">
          ANSHIF<span>.</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "projects", "education", "contact"].map((item) => (
            <button
              key={item}
              className={active === item ? "nav-link active" : "nav-link"}
              onClick={() => go(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <a
          className="github-button"
          href="https://github.com/anshifpk"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB <ArrowUpRight size={14} />
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              <span>Anshif</span>
              <span className="outline">Ali P.K</span>
            </h1>
            <p className="role">FULL STACK DEVELOPER</p>
            <p className="intro">
              Full-Stack Engineer specializing in React/Next.js and Node.js/Python.
              Passionate about writing clean code, optimizing performance, and
              building seamless APIs.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => go("projects")}>
                VIEW PROJECTS <ArrowUpRight size={15} />
              </button>
              <button className="button ghost" onClick={() => go("contact")}>
                CONTACT ME
              </button>
            </div>
          </div>

          <div className="hero-photo reveal delay">
            <div className="photo-frame">
              <img src="/anshif-profile.jpg" alt="Anshif Ali P.K." />
              <div className="photo-overlay" />
              <div className="photo-index">01</div>
            </div>
            <p className="photo-caption">FULL STACK / 2026</p>
          </div>

          <div className="hero-side-label">SCROLL TO EXPLORE ↓</div>
        </section>

        <section id="about" className="section content-section">
          <div className="section-head">
            <span>01</span>
            <h2>ABOUT</h2>
          </div>
          <div className="about-grid">
            <div>
              <p className="display-text">
                I build <em>digital products</em> that balance sharp interfaces
                with dependable engineering.
              </p>
            </div>
            <div className="body-copy">
              <p>
                Certified Full-Stack Developer and BCA (FYUGP) student. Proficient
                in building dynamic web applications using the MERN stack
                (MongoDB, Express.js, React, Node.js) and Python/Django.
              </p>
              <p>
                Backed by professional certifications, I focus on clean,
                efficient code and practical solutions that feel fast and
                effortless to use.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section content-section">
          <div className="section-head">
            <span>02</span>
            <h2>SKILLS</h2>
          </div>
          <div className="skills-grid">
            {skills.map(([num, title, type], i) => (
              <article className="skill-card" key={title}>
                <span className="card-number">{num}</span>
                <div className="skill-icon">
                  {i % 4 === 0 ? <Code2 /> : i % 4 === 1 ? <Server /> : i % 4 === 2 ? <Database /> : <Braces />}
                </div>
                <h3>{title}</h3>
                <p>{type}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section content-section">
          <div className="section-head">
            <span>03</span>
            <h2>SELECTED PROJECTS</h2>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="project-arrow"><ArrowUpRight /></div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section content-section">
          <div className="section-head">
            <span>04</span>
            <h2>EDUCATION</h2>
          </div>
          <div className="education-card">
            <div>
              <p className="mini-label">CURRENT STUDIES</p>
              <h3>BCA — Artificial Intelligence</h3>
              <p>FYUGP</p>
            </div>
            <div className="education-stack">
              <span>MERN STACK</span>
              <span>PYTHON</span>
              <span>DJANGO</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">05 / LET'S CONNECT</p>
          <h2>HAVE A PROJECT<br /><span>IN MIND?</span></h2>
          <a className="email-link" href="mailto:anshifparakkalathil@gmail.com">
            anshifparakkalathil@gmail.com <ArrowUpRight />
          </a>
          <div className="socials">
            <a href="https://github.com/anshifpk" target="_blank" rel="noreferrer"><Github /> GitHub</a>
            <a href="https://www.instagram.com/an.shff/" target="_blank" rel="noreferrer"><span className="ig">◎</span> Instagram</a>
            <a href="https://www.linkedin.com/in/anshif-ali-pk-727418438" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 ANSHIF ALI P.K.</span>
        <span>BUILT WITH REACT / VITE</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
