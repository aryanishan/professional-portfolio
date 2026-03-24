import { useEffect, useMemo, useState } from 'react';
import {
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  FolderGit2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  SunMedium,
  Moon,
  Trophy,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const heroStats = [
  { value: '700+', label: 'Problems Solved' },
  { value: '6.45', label: 'CGPA' },
  { value: '3+', label: 'Featured Projects' },
  { value: '3', label: 'Certifications' },
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'C', 'Kotlin', 'Java'],
  },
  {
    title: 'Backend & Frameworks',
    items: ['NodeJS', 'ReactJS', 'ExpressJS', 'Fast API', 'REST APIs', 'WebSockets', 'Scikit-learn', 'Jetpack Compose'],
  },
  {
    title: 'Core CS',
    items: ['Data Structure', 'Algorithms', 'OOP', 'System Design', 'Computer Network', 'Operating System', 'DBMS'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'MySQL', 'PowerBI', 'Docker', 'Linux'],
  },
  {
    title: 'Soft Skills',
    items: ['Problem-Solving', 'Adaptability', 'Rapid Learning', 'User-Centric Thinking', 'Collaboration'],
  },
];

const experiences = [
  {
    title: 'Skill Development Trainee',
    organization: 'Lovely Professional University',
    period: "Jun 2025 - Jul 2025",
    location: 'Phagwara, Punjab',
    tags: ['Power BI', 'Python', 'MySQL', 'Excel'],
    points: [
      'Designed interactive Power BI dashboards using DAX, data modeling, and real business datasets to turn raw data into decision-ready reports.',
      'Built end-to-end ML pipelines covering data cleaning, feature engineering, model training, and performance evaluation in Python.',
      'Applied MySQL and Excel for structured data management, complex JOIN queries, pivot tables, VLOOKUPs, and automated reporting.',
    ],
  },
];

const projects = [
  {
    eyebrow: 'Featured Project',
    category: 'Collaboration Platform',
    title: 'Creator Connect App',
    description:
      'Built a scalable platform enabling small content creators to connect, collaborate, and grow using a microservices architecture to handle profiles, matching, and interactions independently.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'REST APIs'],
    bullets: [
      'Developed secure backend services for authentication, creator matching, and data management',
      'Integrated a payment system to support monetization and premium collaboration tools',
      'Structured the system for efficient service-to-service communication and smooth UX',
    ],
    github: 'https://github.com/aryanishan',
    live: '#',
  },
  {
    eyebrow: 'Featured Project',
    category: 'Travel Platform',
    title: 'Travel Companion App',
    description:
      'Developed a platform that matches travelers based on destination, schedule, and preferences, enabling safer and more social travel experiences.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs'],
    bullets: [
      'Implemented intelligent user matching and group formation for collaborative trip planning',
      'Built the project with scalable and modular system design for future enhancements',
      'Prepared the architecture for guide booking, payments, and recommendation features',
    ],
    github: 'https://github.com/aryanishan',
    live: '#',
  },
  {
    eyebrow: 'Featured Project',
    category: 'Machine Learning',
    title: 'Spam SMS Detector',
    description:
      'Trained an NLP-based machine learning model using TF-IDF and Naive Bayes to classify SMS messages as spam or ham with high accuracy.',
    tags: ['Python', 'Scikit-learn', 'Flask', 'Fast API', 'NLP'],
    bullets: [
      'Built an API to serve real-time predictions using the exported model',
      'Classifies whether the received message is spam or not',
      'Used NLP with TF-IDF and Naive Bayes for practical text classification',
    ],
    github: 'https://github.com/aryanishan',
    live: '#',
  },
];

const highlightStats = [
  { value: '3', label: 'Projects Shipped', icon: FolderGit2 },
  { value: '700+', label: 'Problems Solved', icon: Trophy },
  { value: '3', label: 'Certificates', icon: GraduationCap },
  { value: '1', label: 'Training Program', icon: BriefcaseBusiness },
];

const education = [
  {
    title: 'B.Tech in Computer Science and Engineering',
    school: 'Lovely Professional University',
    meta: 'CGPA: 6.45',
    status: 'Aug 2023 - Present',
  },
  {
    title: 'Intermediate (PCM)',
    school: 'New Stepping Stones International School',
    meta: 'Percentage: 60.2%',
    status: 'Mar 2022 - May 2023',
  },
  {
    title: 'Matriculation',
    school: 'New Stepping Stones International School',
    meta: 'Percentage: 84.8%',
    status: 'Mar 2020 - May 2021',
  },
];

const achievements = [
  { title: 'Solved 700+ coding problems across LeetCode, sharpening problem-solving skills', date: 'Ongoing' },
  { title: 'Participated in Code-A-Haunt 24hrs Hackathon', date: '2025' },
  { title: 'Built multiple full stack and ML projects aligned with practical product ideas', date: '2025 - 2026' },
];

const certifications = [
  { title: 'Build Generative AI Apps and Solution', date: "Aug '25" },
  { title: 'Master Generative AI and Generative AI Tools', date: "Aug '25" },
  { title: 'Fundamentals of Network Communication', date: "Oct '24" },
];

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'myteamo34221@gmail.com',
    href: 'mailto:myteamo34221@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9555886922',
    href: 'tel:+919555886922',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kanpur, Uttar Pradesh',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/aryanishan',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aryan-gupta-ag01/',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:myteamo34221@gmail.com',
  },
];

const testimonialCards = [
  {
    quote: 'Recommendations and references can be shared during applications or interviews.',
    name: 'References',
    role: 'Available on request',
  },
  {
    quote: 'This portfolio highlights project work, training, certifications, and academic progress in one place.',
    name: 'Profile Summary',
    role: 'Student Developer',
  },
  {
    quote: 'Focused on clean frontend presentation, full stack learning, and problem-solving driven development.',
    name: 'Work Style',
    role: 'Full Stack Learner',
  },
];

function SectionTitle({ title, accent, subtitle }) {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{accent}</span>
      </h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const configuredApiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').trim();
  const apiBaseUrl = useMemo(
    () => configuredApiBaseUrl || (import.meta.env.DEV ? 'http://localhost:5000' : ''),
    [configuredApiBaseUrl]
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitError('Please fill in your name, email, and message.');
      return;
    }

    setLoading(true);
    setSubmitError('');

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `${form.subject ? `Subject: ${form.subject}\n\n` : ''}${form.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send your message right now.');
      }

      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError(error.message || 'Unable to send your message right now.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            Aryan Gupta
          </a>

          <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme(current => (current === 'light' ? 'dark' : 'light'))}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <SunMedium size={18} />}
            </button>

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(current => !current)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="container hero-content">
            <p className="hero-kicker">Computer Science Student, Full Stack Developer, and Problem Solver</p>
            <h1>
              Hi, I&apos;m <span>Aryan Gupta</span>
            </h1>
            <h3>Building scalable apps across web development, backend systems, and machine learning</h3>
            <p className="hero-copy">
              Working with JavaScript, TypeScript, Python, ReactJS, NodeJS, ExpressJS, Fast
              API, databases, and core computer science fundamentals. Focused on useful
              products, scalable architecture, and consistent hands-on learning.
            </p>

            <div className="hero-meta">
              <span>
                <MapPin size={16} />
                Kanpur, Uttar Pradesh
              </span>
              <span>
                <GraduationCap size={16} />
                Lovely Professional University (CGPA: 6.45)
              </span>
            </div>

            <div className="hero-actions">
              <a className="primary-btn" href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
              <a className="secondary-btn" href="/aryan-cv-latest.jpg" target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                View Resume
              </a>
            </div>

            <div className="social-links" aria-label="Social links">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="stats-row">
              {heroStats.map(stat => (
                <div key={stat.label} className="stat-block">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="skills">
          <div className="container">
            <SectionTitle
              title="Technical"
              accent="Skills"
              subtitle="Updated directly from your CV with languages, frameworks, core CS fundamentals, databases, and tools."
            />

            <div className="card-grid skills-grid">
              {skillGroups.map(group => (
                <article key={group.title} className="panel-card">
                  <h3>{group.title}</h3>
                  <div className="chip-list">
                    {group.items.map(item => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="experience">
          <div className="container">
            <SectionTitle
              title="Training &"
              accent="Experience"
              subtitle="Hands-on learning and project-based development experience aligned with your CV."
            />

            <div className="experience-list">
              {experiences.map(item => (
                <article key={`${item.title}-${item.period}`} className="panel-card experience-card">
                  <div className="experience-header">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="company-line">{item.organization}</p>
                    </div>
                    <div className="experience-meta">
                      <span>
                        <CalendarDays size={16} />
                        {item.period}
                      </span>
                      <span>
                        <MapPin size={16} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="chip-list">
                    {item.tags.map(tag => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="bullet-list">
                    {item.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="container">
            <SectionTitle
              title="Featured"
              accent="Projects"
              subtitle="Projects updated to reflect the exact apps and direction shown in your CV."
            />

            <div className="project-grid">
              {projects.map(project => (
                <article key={project.title} className="panel-card project-card">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p className="project-copy">{project.description}</p>

                  <div className="chip-list">
                    {project.tags.map(tag => (
                      <span key={tag} className="chip chip-hash">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <ul className="project-highlights">
                    {project.bullets.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noreferrer" className="secondary-btn">
                      <Github size={18} />
                      Code
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="primary-btn">
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="stats-cards">
              {highlightStats.map(({ value, label, icon: Icon }) => (
                <article key={label} className="panel-card mini-stat">
                  <Icon size={24} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="education">
          <div className="container">
            <SectionTitle
              title="Education &"
              accent="Achievements"
              subtitle="Academic background, certificates, and achievements refreshed from your latest CV."
            />

            <div className="three-col-grid">
              <div>
                <h3 className="column-heading">Education</h3>
                <div className="stack-list">
                  {education.map(item => (
                    <article key={item.title} className="panel-card compact-card">
                      <h4>{item.title}</h4>
                      <p>{item.school}</p>
                      <strong>{item.meta}</strong>
                      <span>{item.status}</span>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="column-heading">Awards & Achievements</h3>
                <div className="stack-list">
                  {achievements.map(item => (
                    <article key={item.title} className="panel-card compact-card">
                      <h4>{item.title}</h4>
                      <span>{item.date}</span>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="column-heading">Certifications</h3>
                <div className="stack-list">
                  {certifications.map(item => (
                    <article key={item.title} className="panel-card compact-card">
                      <h4>{item.title}</h4>
                      <span>{item.date}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block" id="testimonials">
          <div className="container">
            <SectionTitle
              title="Profile"
              accent="Notes"
              subtitle="A clean placeholder section in the same visual style for future recommendations or references."
            />

            <div className="card-grid testimonial-grid">
              {testimonialCards.map(card => (
                <article key={card.name} className="panel-card testimonial-card">
                  <p className="quote-mark">99</p>
                  <p className="testimonial-copy">{card.quote}</p>
                  <div className="testimonial-meta">
                    <strong>{card.name}</strong>
                    <span>{card.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block contact-section" id="contact">
          <div className="container">
            <SectionTitle
              title="Get in"
              accent="Touch"
              subtitle="Open to internships, collaborative work, and opportunities to keep building stronger software."
            />

            <div className="contact-layout">
              <div className="contact-info">
                <h3>Contact Information</h3>

                <div className="contact-list">
                  {contactLinks.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="contact-item">
                      <div className="contact-icon">
                        <Icon size={22} />
                      </div>
                      <div>
                        <span>{label}</span>
                        {href ? (
                        <a href={href}>{value}</a>
                        ) : (
                          <p>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="follow-block">
                  <h3>Follow Me</h3>
                  <div className="social-links">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <form className="panel-card contact-form" onSubmit={handleSubmit}>
                <h3>Send Message</h3>

                {sent ? (
                  <div className="success-box">
                    <p>Your message has been sent successfully.</p>
                    <button type="button" className="primary-btn" onClick={() => setSent(false)}>
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                    />
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                    />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={6}
                    />

                    <button type="submit" className="primary-btn submit-btn" disabled={loading}>
                      <Send size={18} />
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {submitError ? <p className="error-text">{submitError}</p> : null}
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
