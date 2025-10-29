import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { NewsTicker } from './components/NewsTicker';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Overview } from './pages/about/overview';
import { Vision } from './pages/about/vision';
import { History } from './pages/about//history';
import { Teachers } from './pages/about/teachers';
import { Clubs } from './pages/extracurricular/Clubs';
import { Competitions } from './pages/extracurricular/Competitions';
import { Achievements } from './pages/extracurricular/Achievements';
import { Library } from './pages/extracurricular/Library';
import { StudentUnion } from './pages/extracurricular/StudentUnion';
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
        
        <ScrollToTop />

        <div className="min-h-screen flex flex-col">
          <Navigation />
          <NewsTicker />

          <main className="flex-1 bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/overview" element={<Overview />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/history" element={<History />} />
              <Route path="/teachers" element={<Teachers />} />

              <Route path="/student-union" element={<StudentUnion />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/library" element={<Library />} />



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
