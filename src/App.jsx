import { useState } from 'react'
import './App.css'
import Header from "./components/header.jsx";
import Footer from './components/footer.jsx'
import Model from './components/model.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StatusFooter from './components/StatusFooter.jsx';

function App() {
  const [isNavHovered, setIsNavHovered] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Header setIsNavHovered={setIsNavHovered} />
        <Model isNavHovered={isNavHovered} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <StatusFooter />
      </div>
    </BrowserRouter>
  )

}

export default App
