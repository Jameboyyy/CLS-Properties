import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav.jsx";
import Homep from "./pages/homeP.jsx";
import Footer from "./components/footer.jsx";
import AboutUsP from "./pages/aboutUsP.jsx";
import ContactUs from "./pages/contactUsP.jsx";
import Projects from "./pages/projectsP.jsx";
import ProductP from "./pages/productP.jsx";
import GalleryP from "./pages/galleryP.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

function App() {
  return (
    <Router>
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
      <Footer />
    </Router>
  );
}

export default App;
