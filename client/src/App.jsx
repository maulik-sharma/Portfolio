import { useState, lazy, Suspense } from 'react'
import './App.css'
import Header from "./components/header.jsx";
import Footer from './components/footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import StatusFooter from './components/StatusFooter.jsx';

// Lazy-load the 3D Model component so the Three.js bundle (~400 KiB + GLB/HDR assets)
// does not block initial text render, improving FCP, LCP, and SEO crawlability.
const Model = lazy(() => import('./components/model.jsx'));

// Route-level code splitting: each page is loaded on demand
const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

function App() {
  const [isNavHovered, setIsNavHovered] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Header setIsNavHovered={setIsNavHovered} />
        <Suspense fallback={<div className="model" />}>
          <Model isNavHovered={isNavHovered} />
        </Suspense>
        <Suspense fallback={<div className="page-loading" aria-label="Loading page content" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
        <StatusFooter />
      </div>
    </BrowserRouter>
  )

}

export default App
