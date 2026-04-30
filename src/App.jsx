import { useEffect, useState } from 'react'

function App() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Portfolio Inquiry')
    const body = encodeURIComponent(
      `Hi Iflaq,\n\n${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:ifuubhat72@gmail.com?subject=${subject}&body=${body}`
  }

  useEffect(() => {
    document.title = 'Iflaq Khurshid — Full Stack Developer'

    const dot = document.getElementById('curDot')
    const ring = document.getElementById('curRing')
    const nav = document.getElementById('nav')
    const body = document.body

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let rafId

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dot) {
        dot.style.left = `${mx}px`
        dot.style.top = `${my}px`
      }
    }

    const animateRing = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ring) {
        ring.style.left = `${rx}px`
        ring.style.top = `${ry}px`
      }
      rafId = requestAnimationFrame(animateRing)
    }

    const interactiveSelector = 'a,button,[class*="card"],.proj-link,.skill-item,.cert-card'
    const hoverTargets = Array.from(document.querySelectorAll(interactiveSelector))
    const addHoverClass = () => body.classList.add('hovering')
    const removeHoverClass = () => body.classList.remove('hovering')

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', addHoverClass)
      el.addEventListener('mouseleave', removeHoverClass)
    })

    const onScroll = () => {
      if (nav) nav.classList.toggle('solid', window.scrollY > 50)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = Array.from(document.querySelectorAll('.reveal'))
    revealElements.forEach((el) => observer.observe(el))

    document.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll)
    onScroll()
    animateRing()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
      observer.disconnect()
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', addHoverClass)
        el.removeEventListener('mouseleave', removeHoverClass)
      })
    }
  }, [])

  return (
    <>
      <div className="cur" id="curDot">
        <div className="cur-dot" />
      </div>
      <div className="cur" id="curRing">
        <div className="cur-ring" />
      </div>

      <nav id="nav">
        <a className="nav-logo" href="#">
          IK<span>.dev</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="nav-hire" href="mailto:ifuubhat72@gmail.com">Hire Me →</a>
      </nav>

      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-glow2" />

        <div className="hero-left">
          <div className="hero-status">
            <span className="status-dot" />
            Available for opportunities
          </div>
          <div className="hero-greeting">Hello, World! I&apos;m</div>
          <h1 className="hero-name">
            IFLAQ
            <br />
            <span className="line2">KHURSHID</span>
          </h1>
          <div className="hero-role">Full Stack Developer</div>
          <p className="hero-bio">
            Computer Science engineer from Kashmir building production-grade web applications.
            Passionate about crafting seamless user experiences backed by robust, scalable backends.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-cyan">View My Work</a>
            <a href="#contact" className="btn-ghost">Get In Touch</a>
          </div>
          <div className="hero-socials">
            <a className="social-link" href="https://github.com/Iflaqbhat" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.21.694.825.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
              /Iflaqbhat
            </a>
            <a className="social-link" href="tel:+916005154365">
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              +91 6005154365
            </a>
              <a className="social-link" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
            <a className="social-link" href="https://x.com/RollNo__07" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              @RollNo__07
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="terminal">
            <div className="terminal-bar">
              <div className="tb-dots"><div className="tb-dot" /><div className="tb-dot" /><div className="tb-dot" /></div>
              <span className="tb-title">iflaq@dev ~ portfolio.js</span>
            </div>
            <div className="terminal-body">
              <span className="t-line"><span className="t-prompt">❯</span> <span className="t-cmd">node portfolio.js</span></span>
              <span className="t-blank" />
              <span className="t-line"><span className="t-out"><span className="t-key">const</span> developer = {'{'}</span></span>
              <span className="t-line"><span className="t-out">  name: <span className="t-str">&quot;Iflaq Khurshid&quot;</span>,</span></span>
              <span className="t-line"><span className="t-out">  location: <span className="t-str">&quot;Kashmir, India 🏔️&quot;</span>,</span></span>
              <span className="t-line"><span className="t-out">  cgpa: <span className="t-val">7.9</span>,</span></span>
              <span className="t-line"><span className="t-out">  role: <span className="t-str">&quot;Frontend Developer&quot;</span>,</span></span>
              <span className="t-line"><span className="t-out">  stack: [</span></span>
              <span className="t-line"><span className="t-out">    <span className="t-str">&quot;React&quot;</span>, <span className="t-str">&quot;Node.js&quot;</span>,</span></span>
              <span className="t-line"><span className="t-out">    <span className="t-str">&quot;Express&quot;</span>, <span className="t-str">&quot;PostgreSQL&quot;</span>,</span></span>
              <span className="t-line"><span className="t-out">    <span className="t-str">&quot;MongoDB&quot;</span>, <span className="t-str">&quot;TypeScript&quot;</span></span></span>
              <span className="t-line"><span className="t-out">  ],</span></span>
              <span className="t-line"><span className="t-out">  available: <span className="t-val">true</span>,</span></span>
              <span className="t-line"><span className="t-out">  coffee: <span className="t-str">&quot;always ☕&quot;</span></span></span>
              <span className="t-line"><span className="t-out">{'}'}</span></span>
              <span className="t-blank" />
              <span className="t-line"><span className="t-comment">// Ready to build something great!</span></span>
            </div>
          </div>
        </div>

        <div className="hero-scroll"><div className="scroll-bar" />scroll</div>
      </section>

      <div className="sec-divider" />

      <section id="about">
        <div className="sec-label reveal">About Me</div>
        <h2 className="sec-title reveal">WHO I <span>AM</span></h2>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>I&apos;m <strong>Iflaq Khurshid</strong>, a Computer Science &amp; Engineering graduate from BGS Institute of Technology with a CGPA of 7.9. I specialize in building full-stack web applications that are both technically solid and beautifully designed.</p>
            <p>From crafting pixel-perfect React UIs to architecting scalable Node.js backends — I enjoy every layer of the stack. I&apos;ve worked as a <strong>freelance developer at Habitat Inc.</strong>, handling real-world codebases, PR analysis, and behavioral spec writing. I also interned at <strong>SnapSec.co</strong> as a Frontend Developer.</p>
            <p>When I&apos;m not coding, I&apos;m exploring the mountains of <strong>Kashmir</strong> or diving into new frameworks. I believe great software is built at the intersection of clean code and thoughtful design.</p>
            <div className="about-highlight">&quot;I don&apos;t just write code — I build products people enjoy using.&quot;</div>
          </div>

          <div>
            <div className="about-stats reveal">
              <div className="stat-card"><div className="stat-num">7.9</div><div className="stat-lbl">CGPA in CSE</div></div>
              <div className="stat-card"><div className="stat-num">2</div><div className="stat-lbl">Work Experiences</div></div>
              <div className="stat-card"><div className="stat-num">85%</div><div className="stat-lbl">Class XII Score</div></div>
            </div>
          </div>

        </div>
      </section>

      <div className="sec-divider" />

      <section id="experience">
        <div className="sec-label reveal">Work History</div>
        <h2 className="sec-title reveal">EXPERIENCE</h2>
        <div className="exp-list">
          <div className="exp-card reveal">
            <div className="exp-accent-line" />
            <div className="exp-head">
              <div><div className="exp-company">Habitat Inc.</div><div className="exp-role">Freelance Software Developer · Remote</div></div>
              <div className="exp-meta"><div className="exp-period">Sep 2025 — Present</div><div className="exp-badge">● Active</div></div>
            </div>
            <ul className="exp-bullets">
              <li>Habitat builds the evaluation set used to measure how well frontier AI coding agents handle real software engineering — and my job is to turn merged pull requests from real production codebases into well-formed tasks that those agents are tested against.</li>
              <li>For each task I pick a single non-trivial PR and split it into two clean patches: a golden patch with only the production code (the answer the AI is meant to converge on) and a separate test patch carrying the PR&apos;s tests, renamed so they sit alongside the AI&apos;s output without colliding.</li>
              <li>Then I write the task description — the only thing the AI actually sees. It explains the expected behavior in plain language without leaking the implementation, and every behavior in the description has to be backed by a test while every test has to map back to something in the description. Anything outside that one-to-one mapping fails QA.</li>
              <li>Before a task ships I verify the whole thing locally — the tests must fail on the base commit and pass once the golden patch is applied — and I tune the difficulty so the strongest agents solve it sometimes but not every time.</li>
              <li>Once it&apos;s live, I read every failed AI attempt to make sure each failure is fair; when one traces back to ambiguous wording in the description, I rewrite that section and resubmit until the task settles in the right difficulty band.</li>
            </ul>
          </div>

          <div className="exp-card reveal">
            <div className="exp-accent-line" />
            <div className="exp-head">
              <div><div className="exp-company">SnapSec.co</div><div className="exp-role">Frontend Developer Intern · Remote</div></div>
              <div className="exp-meta"><div className="exp-period">Mar 2025 — Apr 2025</div><div className="exp-badge past">Completed</div></div>
            </div>
            <ul className="exp-bullets">
              <li>Built and optimized multiple responsive UI components using React.js and Tailwind CSS, contributing to a measurable <strong style={{ color: 'var(--accent)' }}>15% improvement</strong> in user engagement metrics.</li>
              <li>Collaborated closely with cross-functional team members to deliver product features on time in an agile remote environment.</li>
              <li>Gained hands-on production experience with modern frontend tooling, component-driven architecture, and remote team collaboration workflows.</li>
            </ul>
          </div>

        </div>
      </section>

      <div className="sec-divider" />

      <section id="projects">
        <div className="sec-label reveal">What I&apos;ve Built</div>
        <h2 className="sec-title reveal">PROJECTS</h2>
        <div className="proj-grid">
          <div className="proj-card reveal">
            <div className="proj-num">01</div>
            <div className="proj-top">
              <span className="proj-icon">🎓</span>
              <div className="proj-name">Coursell</div>
              <p className="proj-desc">A full-stack online course marketplace where students discover, buy, and stream video-based courses, while instructors run a protected admin dashboard to publish and manage the catalog.</p>

              <div className="proj-features">
                <div className="proj-feat-group">
                  <div className="proj-feat-label">Users can</div>
                  <ul className="proj-feat-list">
                    <li>Browse the public catalog without an account</li>
                    <li>Register or sign in via JWT-secured auth</li>
                    <li>Buy courses and access them in &quot;My Courses&quot;</li>
                    <li>Stream lessons with auto-detected video duration</li>
                    <li>View course detail pages with lesson lists and pricing</li>
                  </ul>
                </div>
                <div className="proj-feat-group">
                  <div className="proj-feat-label">Admins can</div>
                  <ul className="proj-feat-list">
                    <li>Sign in to a role-protected admin panel</li>
                    <li>Create, edit, and delete courses</li>
                    <li>Set title, description, price, thumbnail, and YouTube/Vimeo links</li>
                    <li>Auto-fetch video durations without third-party API keys</li>
                    <li>See total courses, purchases, and learner activity at a glance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="proj-tech"><span className="tech-tag">React</span><span className="tech-tag">TypeScript</span><span className="tech-tag">Node.js</span><span className="tech-tag">Express</span><span className="tech-tag">MongoDB</span><span className="tech-tag">Mongoose</span><span className="tech-tag">Chakra UI</span><span className="tech-tag">JWT</span><span className="tech-tag">Vite</span><span className="tech-tag">Netlify</span><span className="tech-tag">Render</span></div>
            <div className="proj-links"><a className="proj-link" href="https://github.com/Iflaqbhat/coursel" target="_blank" rel="noreferrer">GitHub</a><a className="proj-link" href="https://coursell.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a></div>
          </div>

          <div className="proj-card reveal">
            <div className="proj-num">02</div>
            <div className="proj-top">
              <span className="proj-icon">🎨</span>
              <div className="proj-name">Canvaso</div>
              <p className="proj-desc">A two-sided online art gallery built for a real client — an editorial visitor storefront paired with a private curator&apos;s admin panel in a single app, backed end-to-end by Supabase (Postgres + Auth + Storage) with Row-Level Security.</p>

              <div className="proj-features">
                <div className="proj-feat-group">
                  <div className="proj-feat-label">Visitors can</div>
                  <ul className="proj-feat-list">
                    <li>Browse a curator-set hero banner and themed collection rooms</li>
                    <li>Open artist residency pages with bios and portfolios</li>
                    <li>View artwork detail pages with full-resolution images and curator audio notes</li>
                    <li>Send purchase inquiries on a single piece or acquire a whole collection</li>
                    <li>Sign in via email or Google OAuth and save artworks to favorites</li>
                  </ul>
                </div>
                <div className="proj-feat-group">
                  <div className="proj-feat-label">Curators (admins) can</div>
                  <ul className="proj-feat-list">
                    <li>Sign in to a private back-of-house panel</li>
                    <li>Add, edit, and remove artworks with image and audio upload</li>
                    <li>Manage artist profiles — portrait, bio, residency, nationality</li>
                    <li>Open new collection rooms, set their banners, audio, and bundle pricing</li>
                    <li>Edit the homepage hero banner — title, eyebrow, description, CTA, image</li>
                    <li>Triage incoming inquiries, mark them replied, and email buyers directly</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="proj-tech"><span className="tech-tag">React</span><span className="tech-tag">TypeScript</span><span className="tech-tag">Supabase</span><span className="tech-tag">PostgreSQL</span><span className="tech-tag">RLS</span><span className="tech-tag">Google OAuth</span><span className="tech-tag">TanStack Query</span><span className="tech-tag">Tailwind CSS</span><span className="tech-tag">Shadcn UI</span><span className="tech-tag">Radix UI</span><span className="tech-tag">React Router</span><span className="tech-tag">Vite</span></div>
            <div className="proj-links"><a className="proj-link" href="https://github.com/Iflaqbhat/Art-Gallery" target="_blank" rel="noreferrer">GitHub</a><a className="proj-link" href="https://maison-curator.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a></div>
          </div>

          <div className="proj-card reveal">
            <div className="proj-num">03</div>
            <div className="proj-top">
              <span className="proj-icon">⚕️</span>
              <div className="proj-name">ZenOps AI</div>
              <p className="proj-desc">A marketing landing page for a healthcare AI platform — four specialized agents (AI Nurse, AI Receptionist, AI Scribe, AI Medical Coder) packaged behind HIPAA / SOC 2 compliance messaging, EHR integration claims, pricing tiers, and a polished demo-booking flow.</p>

              <div className="proj-features">
                <div className="proj-feat-group">
                  <div className="proj-feat-label">The site delivers</div>
                  <ul className="proj-feat-list">
                    <li>Animated hero with headline stats (24/7 availability, 40% cost reduction, 48hr setup)</li>
                    <li>Four agent cards explaining each AI&apos;s role inside a clinical workflow</li>
                    <li>EHR integration messaging — Epic, Cerner, Athenahealth, 150+ systems</li>
                    <li>Compliance badges (HIPAA, SOC 2, ISO 27001, HITRUST, GDPR, PIPEDA)</li>
                    <li>Three-tier pricing (Starter, Professional, Enterprise) with feature comparison</li>
                    <li>Customer testimonials, FAQ accordion, and a sticky &quot;Book a Demo&quot; CTA</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="proj-tech"><span className="tech-tag">HTML</span><span className="tech-tag">CSS</span><span className="tech-tag">JavaScript</span><span className="tech-tag">Responsive Design</span><span className="tech-tag">Netlify</span></div>
            <div className="proj-links"><a className="proj-link" href="https://zen0ps.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a></div>
          </div>

          <div className="proj-card reveal">
            <div className="proj-num">04</div>
            <div className="proj-top">
              <span className="proj-icon">📚</span>
              <div className="proj-name">AI Tools Dictionary</div>
              <p className="proj-desc">A curated directory of 500+ AI tools organized by category — search, compare, and find the right tool for the job. Covers chat &amp; NLP, image generation, code assistance, video, audio, voice, and data analytics with featured picks and direct links to every tool.</p>

              <div className="proj-features">
                <div className="proj-feat-group">
                  <div className="proj-feat-label">The site delivers</div>
                  <ul className="proj-feat-list">
                    <li>500+ AI tools indexed across nine categories</li>
                    <li>Featured grid (ChatGPT, GPT-4, Claude, Gemini, Perplexity, Jasper, ElevenLabs, DALL·E 3, Remove.bg, and more)</li>
                    <li>Category browse and keyword search across the catalog</li>
                    <li>Side-by-side comparisons, ratings, and capability tags on each tool</li>
                    <li>Three-tier pricing (Free, Pro, Enterprise) with feature breakdown</li>
                    <li>Trusted-by logo rail and a newsletter signup for new tool drops</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="proj-tech"><span className="tech-tag">HTML</span><span className="tech-tag">CSS</span><span className="tech-tag">JavaScript</span><span className="tech-tag">Responsive Design</span><span className="tech-tag">Netlify</span></div>
            <div className="proj-links"><a className="proj-link" href="https://aitoolsdictionary.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a></div>
          </div>

          <div className="proj-card reveal">
            <div className="proj-num">05</div>
            <div className="proj-top">
              <span className="proj-icon">🏔️</span>
              <div className="proj-name">WanderKashmir</div>
              <p className="proj-desc">A travel-guide web app that showcases Kashmir&apos;s destinations, helping visitors explore landmarks, plan itineraries, and discover lesser-known spots — built with React + Redux and a fully responsive Tailwind UI.</p>

              <div className="proj-features">
                <div className="proj-feat-group">
                  <div className="proj-feat-label">Users can</div>
                  <ul className="proj-feat-list">
                    <li>Browse a gallery of destinations with photos and descriptions</li>
                    <li>Filter and search places by region or category</li>
                    <li>Open detail pages with travel info, highlights, and best-time-to-visit</li>
                    <li>Save spots they want to visit (Redux-managed local state)</li>
                    <li>View the experience seamlessly on mobile, tablet, and desktop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="proj-tech"><span className="tech-tag">React</span><span className="tech-tag">Redux</span><span className="tech-tag">Tailwind CSS</span></div>
            <div className="proj-links"><a className="proj-link" href="#" target="_blank" rel="noreferrer">GitHub</a><a className="proj-link" href="#" target="_blank" rel="noreferrer">Live Demo</a></div>
          </div>

          <div className="proj-card reveal">
            <div className="proj-num">06</div>
            <div className="proj-top">
              <span className="proj-icon">📝</span>
              <div className="proj-name">Notes App</div>
              <p className="proj-desc">A full-stack personal notes application with end-to-end JWT authentication — every note is private to its owner via a protected REST API, with a clean React client for the day-to-day capture flow.</p>

              <div className="proj-features">
                <div className="proj-feat-group">
                  <div className="proj-feat-label">Users can</div>
                  <ul className="proj-feat-list">
                    <li>Register and log in with hashed passwords (bcrypt)</li>
                    <li>Stay signed in via JWT-protected sessions</li>
                    <li>Create new notes with a title and body</li>
                    <li>Edit and delete only their own notes</li>
                    <li>List and search through their personal notes archive</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="proj-tech"><span className="tech-tag">React</span><span className="tech-tag">Node.js</span><span className="tech-tag">Express</span><span className="tech-tag">JWT</span><span className="tech-tag">bcrypt</span><span className="tech-tag">Vite</span></div>
            <div className="proj-links"><a className="proj-link" href="#" target="_blank" rel="noreferrer">GitHub</a></div>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      <section id="education">
        <div className="sec-label reveal">Academic Background</div>
        <h2 className="sec-title reveal">EDUCATION</h2>

        <div className="edu-block reveal">
          <div className="edu-row">
            <div>
              <div className="edu-deg">B.E. in Computer Science &amp; Engineering</div>
              <div className="edu-inst">BGS Institute of Technology</div>
            </div>
            <div className="edu-right">
              <div className="edu-grade">7.9 / 10</div>
              <div className="edu-year">Graduated 2024</div>
            </div>
          </div>
          <div className="edu-row">
            <div>
              <div className="edu-deg">Higher Secondary Education (Class XII)</div>
              <div className="edu-inst">Jammu &amp; Kashmir State Board</div>
            </div>
            <div className="edu-right">
              <div className="edu-grade">85%</div>
              <div className="edu-year">Passed 2020</div>
            </div>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      <section id="skills">
        <div className="sec-label reveal">My Arsenal</div>
        <h2 className="sec-title reveal">SKILLS &amp; <span>TOOLS</span></h2>

        <div className="skills-wrap">
          <div className="skill-group reveal"><div className="sg-label">Languages</div><div className="skill-items"><div className="skill-item"><span className="si-dot" style={{ background: '#f7df1e' }} />JavaScript</div><div className="skill-item"><span className="si-dot" style={{ background: '#3178c6' }} />TypeScript</div></div></div>
          <div className="skill-group reveal"><div className="sg-label">Frontend</div><div className="skill-items"><div className="skill-item"><span className="si-dot" style={{ background: '#e34f26' }} />HTML5</div><div className="skill-item"><span className="si-dot" style={{ background: '#1572b6' }} />CSS3</div><div className="skill-item"><span className="si-dot" style={{ background: '#61dafb' }} />React.js</div><div className="skill-item"><span className="si-dot" style={{ background: '#06b6d4' }} />Tailwind CSS</div><div className="skill-item"><span className="si-dot" style={{ background: '#319795' }} />Chakra UI</div><div className="skill-item"><span className="si-dot" style={{ background: '#764abc' }} />Redux</div><div className="skill-item"><span className="si-dot" style={{ background: '#646cff' }} />Vite</div></div></div>
          <div className="skill-group reveal"><div className="sg-label">Backend</div><div className="skill-items"><div className="skill-item"><span className="si-dot" style={{ background: '#339933' }} />Node.js</div><div className="skill-item"><span className="si-dot" style={{ background: '#000000' }} />Express.js</div><div className="skill-item"><span className="si-dot" style={{ background: '#00e5ff' }} />REST APIs</div><div className="skill-item"><span className="si-dot" style={{ background: '#ff6900' }} />JWT Auth</div><div className="skill-item"><span className="si-dot" style={{ background: '#5a67d8' }} />bcrypt</div></div></div>
          <div className="skill-group reveal"><div className="sg-label">Databases &amp; ORM</div><div className="skill-items"><div className="skill-item"><span className="si-dot" style={{ background: '#336791' }} />PostgreSQL</div><div className="skill-item"><span className="si-dot" style={{ background: '#47a248' }} />MongoDB</div><div className="skill-item"><span className="si-dot" style={{ background: '#4479a1' }} />MySQL</div><div className="skill-item"><span className="si-dot" style={{ background: '#2d3748' }} />Prisma</div><div className="skill-item"><span className="si-dot" style={{ background: '#00ed64' }} />Atlas</div></div></div>
          <div className="skill-group full reveal"><div className="sg-label">Tools &amp; Platforms</div><div className="skill-items"><div className="skill-item"><span className="si-dot" style={{ background: '#f05032' }} />Git</div><div className="skill-item"><span className="si-dot" style={{ background: '#181717' }} />GitHub</div><div className="skill-item"><span className="si-dot" style={{ background: '#00c7b7' }} />Netlify</div><div className="skill-item"><span className="si-dot" style={{ background: '#430098' }} />Render</div><div className="skill-item"><span className="si-dot" style={{ background: '#007acc' }} />VS Code</div><div className="skill-item"><span className="si-dot" style={{ background: '#ff6c37' }} />Postman</div></div></div>

          <div className="cert-grid reveal">
            <a className="cert-card" href="https://drive.google.com/file/d/1BUloWS6fbrlTUUzflrdptAqTMtcoIfT6/view" target="_blank" rel="noreferrer">
              <div className="cert-icon">🏆</div>
              <div>
                <div className="cert-name">MERN Stack Development</div>
                <div className="cert-org">Acciojob</div>
                <div className="cert-year">2025</div>
              </div>
            </a>
            <a className="cert-card" href="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MNQRSAR5VI7J/CERTIFICATE_LANDING_PAGE~MNQRSAR5VI7J.jpeg" target="_blank" rel="noreferrer">
              <div className="cert-icon">⚛️</div>
              <div>
                <div className="cert-name">Developing Frontend Apps with React</div>
                <div className="cert-org">Coursera</div>
                <div className="cert-year">2025</div>
              </div>
            </a>
            <a className="cert-card" href="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8SDEBU4WRZ53/CERTIFICATE_LANDING_PAGE~8SDEBU4WRZ53.jpeg" target="_blank" rel="noreferrer">
              <div className="cert-icon">☕</div>
              <div>
                <div className="cert-name">Introduction to Java</div>
                <div className="cert-org">Coursera</div>
                <div className="cert-year">2025</div>
              </div>
            </a>
          </div>
        </div>

        <div className="tech-orbit reveal">
          <div className="tech-row">
            <div className="tech-chip">JavaScript</div><div className="tech-chip">TypeScript</div><div className="tech-chip">React.js</div><div className="tech-chip">Node.js</div><div className="tech-chip">Express.js</div><div className="tech-chip">MongoDB</div><div className="tech-chip">PostgreSQL</div><div className="tech-chip">MySQL</div><div className="tech-chip">Tailwind CSS</div><div className="tech-chip">Redux</div><div className="tech-chip">Prisma</div><div className="tech-chip">REST API</div>
            <div className="tech-chip">JavaScript</div><div className="tech-chip">TypeScript</div><div className="tech-chip">React.js</div><div className="tech-chip">Node.js</div><div className="tech-chip">Express.js</div><div className="tech-chip">MongoDB</div><div className="tech-chip">PostgreSQL</div><div className="tech-chip">MySQL</div><div className="tech-chip">Tailwind CSS</div><div className="tech-chip">Redux</div><div className="tech-chip">Prisma</div><div className="tech-chip">REST API</div>
          </div>
          <div className="tech-row2">
            <div className="tech-chip">Git</div><div className="tech-chip">GitHub</div><div className="tech-chip">Netlify</div><div className="tech-chip">Render</div><div className="tech-chip">JWT Auth</div><div className="tech-chip">bcrypt</div><div className="tech-chip">Vite</div><div className="tech-chip">VS Code</div><div className="tech-chip">Postman</div><div className="tech-chip">Chakra UI</div><div className="tech-chip">MongoDB Atlas</div><div className="tech-chip">MERN Stack</div>
            <div className="tech-chip">Git</div><div className="tech-chip">GitHub</div><div className="tech-chip">Netlify</div><div className="tech-chip">Render</div><div className="tech-chip">JWT Auth</div><div className="tech-chip">bcrypt</div><div className="tech-chip">Vite</div><div className="tech-chip">VS Code</div><div className="tech-chip">Postman</div><div className="tech-chip">Chakra UI</div><div className="tech-chip">MongoDB Atlas</div><div className="tech-chip">MERN Stack</div>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      <section id="contact">
        <div className="contact-inner">
          <div className="sec-label reveal sec-label-center">Let&apos;s Connect</div>
          <h2 className="contact-big reveal">LET&apos;S<br /><span>WORK</span><br />TOGETHER</h2>
          <p className="contact-sub reveal">Open to full-time roles, freelance projects, and interesting collaborations. Based in Kashmir — working worldwide.</p>
          <div className="contact-cards reveal">
            <a className="contact-card" href="mailto:ifuubhat72@gmail.com"><span className="cc-icon">✉️</span><div className="cc-info"><div className="cc-label">Email</div><div className="cc-val">ifuubhat72@gmail.com</div></div></a>
            <a className="contact-card" href="tel:+916005154365"><span className="cc-icon">📞</span><div className="cc-info"><div className="cc-label">Phone</div><div className="cc-val">+91 6005154365</div></div></a>
            <a className="contact-card" href="https://github.com/Iflaqbhat" target="_blank" rel="noreferrer"><span className="cc-icon">💻</span><div className="cc-info"><div className="cc-label">GitHub</div><div className="cc-val">github.com/Iflaqbhat</div></div></a>
            <a className="contact-card" href="https://linkedin.com" target="_blank" rel="noreferrer"><span className="cc-icon">🔗</span><div className="cc-info"><div className="cc-label">LinkedIn</div><div className="cc-val">View Profile</div></div></a>
            <a className="contact-card" href="https://x.com/RollNo__07" target="_blank" rel="noreferrer"><span className="cc-icon">𝕏</span><div className="cc-info"><div className="cc-label">Twitter / X</div><div className="cc-val">@RollNo__07</div></div></a>
          </div>
        </div>
      </section>

      <div className="sec-divider" />

      <section id="get-in-touch">
        <div className="sec-label reveal">Get In Touch</div>
        <h2 className="sec-title reveal">SEND A <span>MESSAGE</span></h2>
        <p className="git-sub reveal">Have a question or want to work together? Feel free to contact me.</p>

        <div className="git-grid">
          <div className="git-info reveal">
            <div className="git-card">
              <div className="git-card-title">Contact Information</div>

              <a className="git-row" href="mailto:ifuubhat72@gmail.com">
                <div className="git-row-icon">✉️</div>
                <div>
                  <div className="git-row-label">Email</div>
                  <div className="git-row-val">ifuubhat72@gmail.com</div>
                </div>
              </a>

              <a className="git-row" href="tel:+916005154365">
                <div className="git-row-icon">📞</div>
                <div>
                  <div className="git-row-label">Phone</div>
                  <div className="git-row-val">+91 6005154365</div>
                </div>
              </a>

              <div className="git-social-block">
                <div className="git-row-label" style={{ marginBottom: '14px' }}>Social Profiles</div>
                <div className="git-socials">
                  <a className="git-social" href="https://github.com/Iflaqbhat" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.21.694.825.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
                  </a>
                  <a className="git-social" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                  <a className="git-social" href="https://x.com/RollNo__07" target="_blank" rel="noreferrer" aria-label="X / Twitter">
                    <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a className="git-social" href="mailto:ifuubhat72@gmail.com" aria-label="Email">
                    <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="git-form reveal" onSubmit={handleSubmit}>
            <div className="git-card">
              <div className="git-field">
                <label htmlFor="git-name">Your Name</label>
                <input
                  id="git-name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="git-field">
                <label htmlFor="git-email">Your Email</label>
                <input
                  id="git-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="git-field">
                <label htmlFor="git-subject">Subject</label>
                <input
                  id="git-subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="git-field">
                <label htmlFor="git-message">Message</label>
                <textarea
                  id="git-message"
                  name="message"
                  rows="5"
                  placeholder="Your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="git-submit">Send Message →</button>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-name"><span>IFLAQ</span> KHURSHID</div>
        <div className="footer-copy">© 2025 · Built with ❤️ from Kashmir 🏔️</div>
        <a className="footer-back" href="#">↑ Back to Top</a>
      </footer>
    </>
  )
}

export default App
