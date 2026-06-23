import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { FeaturedProject } from './components/FeaturedProject';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="page-shell min-h-screen overflow-hidden text-slate-950">
      <div className="ambient-grid" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FeaturedProject />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
