import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Training from './components/Training';
import Certifications from './components/Certifications';
import CVSection from './components/CVSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="noise-bg">
      <Cursor />
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Training />
        <Certifications />
        <CVSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
