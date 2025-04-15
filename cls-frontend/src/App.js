import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from "./components/nav.jsx";
import Homep from "./pages/homeP.jsx";
import Footer from "./components/footer.jsx";
import AboutUsP from "./pages/aboutUsP.jsx";
import ContactUs from "./pages/contactUsP.jsx";
import Projects from "./pages/projectsP.jsx";
import ProductP from "./pages/productP.jsx";
import GalleryP from "./pages/galleryP.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";
import LoadingScreen from './components/loadingScreen.jsx';
import MessengerButton from './components/messengerButton.jsx';

// ✅ Component inside Router so useLocation works
const AppContent = () => {
  const location = useLocation();
  const isGalleryP = location.pathname.startsWith('/properties/');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Homep />} />
        <Route path='/about-us' element={<AboutUsP />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/properties/:city' element={<ProductP />} />
        <Route path='/properties/:city/:property' element={<GalleryP />} />
      </Routes>
      <MessengerButton stacked={isGalleryP} />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
