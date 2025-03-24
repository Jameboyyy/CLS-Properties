import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav.jsx";
import Homep from "./pages/homeP.jsx";
import Footer from "./components/footer.jsx";
import AboutUsP from "./pages/aboutUsP.jsx";
import ContactUs from "./pages/contactUsP.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Homep />} />
        <Route path='/about-us' element={<AboutUsP />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
