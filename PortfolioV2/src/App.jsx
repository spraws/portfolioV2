import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

function App() {
  
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}



export default App
