import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home";
import About from "./pages/about";
import Forecast from "./pages/forecast";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/forecast/:city" element={<Forecast />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

