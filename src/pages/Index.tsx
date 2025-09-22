import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links in the whole document
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className='min-h-screen bg-background font-zalando'>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
