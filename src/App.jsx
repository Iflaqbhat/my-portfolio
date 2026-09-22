import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Mail,
  Moon,
  Sun,
} from 'lucide-react'
import avatar from './assets/avatar-anime.png'
import habitatLogo from './assets/habitat-logo.svg'
import canvasoPreview from './assets/project-canvaso.png'
import coursellPreview from './assets/project-coursell.png'
import zenopsPreview from './assets/project-zenops.png'
import snapsecLogo from './assets/snapsec-logo.png'

const projects = [
  {
    name: 'Coursell',
    description:
      'A full-stack course marketplace with authentication, protected course access, admin publishing tools, and video lessons.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://coursell.netlify.app/',
    code: 'https://github.com/Iflaqbhat/coursel',
    image: coursellPreview,
  },
  {
    name: 'Canvaso',
    description:
      'A deployed full-stack art gallery with Clerk authentication, role-protected curator tools, PostgreSQL data, and customer inquiry workflows.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Clerk', 'Render'],
    live: 'https://canvaso-gallery.onrender.com/',
    code: 'https://github.com/Iflaqbhat/Art-Gallery',
    image: canvasoPreview,
  },
  {
    name: 'ZenOps AI',
    description:
      'A responsive healthcare AI product site with clear feature storytelling, pricing, trust messaging, and demo calls to action.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    live: 'https://zen0ps.netlify.app/',
    image: zenopsPreview,
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Tools & Infrastructure',
    skills: ['Git', 'GitHub', 'Netlify', 'Render', 'Postman', 'VS Code'],
  },
]

const experience = [
  {
    company: 'Habitat Inc.',
    role: 'AI Code Evaluator',
    location: 'Remote',
    date: 'Nov 2025 - Dec 2025',
    logo: habitatLogo,
    detail:
      'Created rigorous coding evaluations from real open-source pull requests. I analyzed production changes, wrote precise task specifications, prepared golden solution patches and test patches, and validated edge cases to measure how reliably AI coding agents could understand and modify unfamiliar codebases.',
  },
  {
    company: 'SnapSec.co',
    role: 'Frontend Developer Intern',
    location: 'Remote',
    date: 'Jan 2025 - Mar 2025',
    logo: snapsecLogo,
    detail:
      'Built responsive React and Tailwind interfaces for a cybersecurity product, developed reusable UI components, improved layouts across screen sizes, and collaborated with a remote team to turn product requirements into clear, usable frontend experiences.',
  },
]

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="site-shell">
      <header className="floating-nav">
        <a className="avatar-link" href="#top" aria-label="Go to the top">
          <img src={avatar} alt="Iflaq Khurshid" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button
            className="icon-button"
            type="button"
            onClick={() => setDark((current) => !current)}
            aria-label={dark ? 'Use light theme' : 'Use dark theme'}
            title={dark ? 'Use light theme' : 'Use dark theme'}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="intro-section">
          <h1>Hi, I&apos;m Iflaq</h1>
          <p>
            A <strong>full-stack developer and AI code evaluator</strong> who enjoys
            building clean, modern web products and testing how well coding agents
            handle real software engineering tasks. I work with{' '}
            <strong>TypeScript, React, Node.js,</strong> and databases to turn useful
            ideas into dependable software.
          </p>
          <p>
            I&apos;m open to <strong>freelance projects, collaborations,</strong> and{' '}
            <strong>full-time opportunities.</strong>
          </p>

          <div className="action-row">
            <a className="button secondary" href="https://github.com/Iflaqbhat" target="_blank" rel="noreferrer">
              <Code2 size={16} /> GitHub
            </a>
            <a className="button primary" href="mailto:ifuubhat72@gmail.com">
              <Mail size={16} /> Get in touch
            </a>
          </div>

          <div className="social-row">
            <a href="https://x.com/RollNo__07" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://github.com/Iflaqbhat" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:ifuubhat72@gmail.com">Email</a>
            <span>Kashmir, India</span>
          </div>
        </section>

        <section className="section-block" id="experience">
          <div className="section-title"><h2>Experience</h2></div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <div className="company-mark">
                  {item.logo ? <img src={item.logo} alt={`${item.company} logo`} /> : <BriefcaseBusiness size={19} />}
                </div>
                <div className="experience-copy">
                  <div className="experience-heading">
                    <div><h3>{item.company}</h3><p>{item.role} <span aria-hidden="true">&middot;</span> {item.location}</p></div>
                    <time>{item.date}</time>
                  </div>
                  <p className="experience-detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <a className="project-preview" href={project.live} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={`${project.name} website preview`} loading="lazy" />
                </a>
                <div className="project-body">
                  <div className="project-heading">
                    <h3>{project.name}</h3>
                    <div className="project-links">
                      {project.code && <a href={project.code} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}><Code2 size={17} /></a>}
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ExternalLink size={17} /></a>
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <div className="tech-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <a className="project-action" href={project.live} target="_blank" rel="noreferrer">View project <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="skills">
          <div className="section-title"><h2>Skills &amp; Tools</h2></div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2>Let&apos;s build something useful.</h2>
          <p>I&apos;m available for full-time roles, freelance work, and thoughtful collaborations.</p>
          <a className="button primary" href="mailto:ifuubhat72@gmail.com"><Mail size={16} /> Get in touch</a>
        </section>
      </main>

      <footer>Designed &amp; developed by Iflaq.</footer>
    </div>
  )
}

export default App
