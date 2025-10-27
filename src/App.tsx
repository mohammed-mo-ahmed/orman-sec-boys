import { useState, useEffect } from 'react';
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

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  // 👇 هنا السحر — كل ما الصفحة تتغير، نرجع لأعلى الصفحة
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === '/') {
      return <Home onNavigate={setCurrentPage} />;
    }

    if (currentPage === '/about/overview') {
      return <About section="overview" />;
    }
    if (currentPage === '/about/vision') {
      return <About section="vision" />;
    }
    if (currentPage === '/about/history') {
      return <About section="history" />;
    }
    if (currentPage === '/about/teachers') {
      return <About section="teachers" />;
    }

    if (currentPage === '/extracurricular/student-union') {
      return <Extracurricular section="student-union" />;
    }
    if (currentPage === '/extracurricular/clubs') {
      return <Extracurricular section="clubs" />;
    }
    if (currentPage === '/extracurricular/competitions') {
      return <Extracurricular section="competitions" />;
    }
    if (currentPage === '/extracurricular/achievements') {
      return <Extracurricular section="achievements" />;
    }
    if (currentPage === '/extracurricular/library') {
      return <Extracurricular section="library" />;
    }

    if (currentPage === '/resources') {
      return <Resources />;
    }

    if (currentPage === '/news') {
      return <News />;
    }

    if (currentPage === '/gallery') {
      return <Gallery />;
    }

    if (currentPage === '/alumni') {
      return <Alumni />;
    }

    if (currentPage === '/faq') {
      return <FAQ onNavigate={setCurrentPage} />;
    }

    if (currentPage === '/contact') {
      return <Contact />;
    }

    return <Home onNavigate={setCurrentPage} />;
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <NewsTicker />
        <main className="flex-1 bg-gray-50">{renderPage()}</main>
        <Footer onNavigate={setCurrentPage} />
      </div>
    </LanguageProvider>
  );
}

export default App;
