import Navigation from '@/components/Navigation';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Menu from '@/sections/Menu';
import About from '@/sections/About';
import Gallery from '@/sections/Gallery';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a1f17] text-[#f5f0e8]">
      <Navigation />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
