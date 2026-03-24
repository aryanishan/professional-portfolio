import { useEffect, useMemo, useState } from 'react';
import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
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
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
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
    images: ['/my-training-certificate.png'],
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
    github: 'https://github.com/aryanishan/creator-connect',
    live: '',
    images: [
      '/creator-connect-1.png',
      '/creator-connect-2.png',
      '/creator-connect-3.png',
      '/creator-connect-4.png',
      '/creator-connect-5.png',
      '/creator-connect-6.png',
      '/creator-connect-7.png',
    ],
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
    github: 'https://github.com/aryanishan/Travel-Companion-Project',
    live: 'https://travel-companion-project-1.onrender.com',
    images: [
      '/travel-companion-1.png',
      '/travel-companion-2.png',
      '/travel-companion-3.png',
      '/travel-companion-4.png',
      '/travel-companion-5.png',
      '/travel-companion-6.png',
    ],
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
    github: 'https://github.com/aryanishan/Spam-message-detector',
    live: 'https://spam-message-detector-l7vv.onrender.com',
    images: [
      '/spam-sms-1.png',
      '/spam-sms-2.png',
      '/spam-sms-3.png',
      '/spam-sms-4.png',
      '/spam-sms-5.png',
      '/spam-sms-6.png',
    ],
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
  {
    title: 'Build Generative AI Apps and Solution',
    date: "Aug '25",
    images: ['/build-ai-generative.png'],
  },
  {
    title: 'Master Generative AI and Generative AI Tools',
    date: "Aug '25",
    images: ['/master-generative-ai.png'],
  },
  {
    title: 'Fundamentals of Network Communication',
    date: "Oct '24",
    images: ['/fundamentals-of-computer-network.png'],
  },
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
  const [gallery, setGallery] = useState(null);

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

  useEffect(() => {
    if (!gallery) return undefined;

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setGallery(null);
      }

      if (event.key === 'ArrowRight') {
        setGallery(current => ({
          ...current,
          index: (current.index + 1) % current.images.length,
        }));
      }

      if (event.key === 'ArrowLeft') {
        setGallery(current => ({
          ...current,
          index: (current.index - 1 + current.images.length) % current.images.length,
        }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gallery]);

  const showPreviousImage = () => {
    setGallery(current => ({
      ...current,
      index: (current.index - 1 + current.images.length) % current.images.length,
    }));
  };

  const showNextImage = () => {
    setGallery(current => ({
      ...current,
      index: (current.index + 1) % current.images.length,
    }));
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
            <p className="hero-kicker">Full Stack Developer, AI/ML Engineer, and Data Scientist</p>
            <h1>
              Hi, I&apos;m <span>Aryan Gupta</span>
            </h1>
            <h3>Building scalable products across full stack development, AI/ML systems, and data-driven solutions</h3>
            <p className="hero-copy">
              I work across modern web development, machine learning, and data science with
              JavaScript, TypeScript, Python, ReactJS, NodeJS, ExpressJS, Fast API, SQL,
              NoSQL, and analytics tools. I focus on building scalable applications,
              intelligent systems, and practical solutions backed by strong engineering and
              data thinking.
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

                  {item.images?.length ? (
                    <button
                      type="button"
                      className="image-btn image-btn-inline"
                      onClick={() => setGallery({ title: item.title, images: item.images, index: 0 })}
                    >
                      View Image
                    </button>
                  ) : null}
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
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer" className="primary-btn">
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    ) : (
                      <span className="primary-btn disabled-btn" aria-disabled="true">
                        <ExternalLink size={18} />
                        Demo Unavailable
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="image-btn"
                    onClick={() => setGallery({ title: project.title, images: project.images, index: 0 })}
                  >
                    View Images
                  </button>
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
              title="My"
              accent="Education"
              subtitle="Academic background and formal education details from your latest CV."
            />

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
        </section>

        <section className="section-block" id="achievements">
          <div className="container">
            <SectionTitle
              title="My"
              accent="Achievements"
              subtitle="Competitive coding, hackathon participation, and milestones that reflect your growth."
            />

            <div className="stack-list">
              {achievements.map(item => (
                <article key={item.title} className="panel-card compact-card">
                  <h4>{item.title}</h4>
                  <span>{item.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" id="certifications">
          <div className="container">
            <SectionTitle
              title="My"
              accent="Certifications"
              subtitle="Courses and certifications that support your AI, networking, and technical learning path."
            />

            <div className="stack-list">
              {certifications.map(item => (
                <article key={item.title} className="panel-card compact-card">
                  <h4>{item.title}</h4>
                  <span>{item.date}</span>
                  {item.images?.length ? (
                    <button
                      type="button"
                      className="image-btn image-btn-inline certificate-image-btn"
                      onClick={() => setGallery({ title: item.title, images: item.images, index: 0 })}
                    >
                      View Image
                    </button>
                  ) : null}
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

      {gallery ? (
        <div className="gallery-overlay" onClick={() => setGallery(null)}>
          <div className="gallery-modal" onClick={event => event.stopPropagation()}>
            <button type="button" className="gallery-close" onClick={() => setGallery(null)}>
              <X size={20} />
            </button>

            <div className="gallery-top">
              <h3>{gallery.title}</h3>
              <span>
                {gallery.index + 1} / {gallery.images.length}
              </span>
            </div>

            <div className="gallery-frame">
              <button type="button" className="gallery-nav prev" onClick={showPreviousImage} aria-label="Previous image">
                <ChevronLeft size={22} />
              </button>

              <img
                src={gallery.images[gallery.index]}
                alt={`${gallery.title} screenshot ${gallery.index + 1}`}
                className="gallery-image"
              />

              <button type="button" className="gallery-nav next" onClick={showNextImage} aria-label="Next image">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
