import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav.jsx";
import Homep from "./pages/homeP.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Homep />} />
      </Routes>
    </Router>

  );
}

export default App;
