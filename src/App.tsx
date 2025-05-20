import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.1 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.1 });
  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.1 });
  const { ref: certificationsRef, inView: certificationsInView } = useInView({ threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1 });

  const sections = [
    { id: 'home', inView: heroInView },
    { id: 'projects', inView: projectsInView },
    { id: 'skills', inView: skillsInView },
    { id: 'experience', inView: experienceInView },
    { id: 'education', inView: educationInView },
    { id: 'certifications', inView: certificationsInView },
    { id: 'contact', inView: contactInView },
  ];

  const activeSection = sections.find(section => section.inView)?.id || 'home';

  return (
    <div className="relative bg-gradient-to-br from-[#1e1133] to-[#2a1758] text-white min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg')] opacity-5 bg-fixed bg-cover bg-center"></div>
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <main>
          <AnimatePresence>
            <section ref={heroRef} id="home" className="min-h-screen">
              <Hero />
            </section>
            <section ref={projectsRef} id="projects" className="py-20">
              <Projects />
            </section>
            <section ref={skillsRef} id="skills" className="py-20 bg-black/20">
              <Skills />
            </section>
            <section ref={experienceRef} id="experience" className="py-20">
              <Experience />
            </section>
            <section ref={educationRef} id="education" className="py-20 bg-black/20">
              <Education />
            </section>
            <section ref={certificationsRef} id="certifications" className="py-20">
              <Certifications />
            </section>
            <section ref={contactRef} id="contact" className="py-20">
              <Contact />
            </section>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;