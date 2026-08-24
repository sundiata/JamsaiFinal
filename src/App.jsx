import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MarqueeBar from './components/MarqueeBar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MobileDonateBar from './components/MobileDonateBar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Programs from './pages/Programs.jsx';
import Donate from './pages/Donate.jsx';
import Volunteer from './pages/Volunteer.jsx';
import Events from './pages/Events.jsx';
import News from './pages/News.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-cream">
      <ScrollToTop />
      <MarqueeBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <MobileDonateBar />
    </div>
  );
}
