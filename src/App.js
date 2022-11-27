import "./App.css";
import Home from "./Home";
import Videos from "./Videos";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
// import extra from "./extra";
import Dropdown from "./Dropdown";

function App() {
 
  return (
    <div className="App">
      <Router>
        <header>Kendon's YouTube</header>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<Videos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
