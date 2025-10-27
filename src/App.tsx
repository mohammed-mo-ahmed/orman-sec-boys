// App.tsx
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { NewsTicker } from './components/NewsTicker';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Extracurricular } from './pages/Extracurricular';
import { Resources } from './pages/Resources';
import { News } from './pages/News';
import { Gallery } from './pages/Gallery';
import { Alumni } from './pages/Alumni';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        {/* ScrollToTop */}
        <ScrollToTop />

        <div className="min-h-screen flex flex-col">
          <Navigation />
          <NewsTicker />

          <main className="flex-1 bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about/overview" element={<About section="overview" />} />
              <Route path="/about/vision" element={<About section="vision" />} />
              <Route path="/about/history" element={<About section="history" />} />
              <Route path="/about/teachers" element={<About section="teachers" />} />

              <Route path="/extracurricular/student-union" element={<Extracurricular section="student-union" />} />
              <Route path="/extracurricular/clubs" element={<Extracurricular section="clubs" />} />
              <Route path="/extracurricular/competitions" element={<Extracurricular section="competitions" />} />
              <Route path="/extracurricular/achievements" element={<Extracurricular section="achievements" />} />
              <Route path="/extracurricular/library" element={<Extracurricular section="library" />} />

              <Route path="/resources" element={<Resources />} />
              <Route path="/news" element={<News />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
