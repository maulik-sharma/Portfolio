import { useState } from 'react'
import './App.css'
import Header from "./components/header.jsx";
import Footer from './components/footer.jsx'
import Model from './components/model.jsx';
import Home from './pages/Home.jsx';


function App() {
  return (
    <div>
      <Header />
      <Model />
      <Home />
      <Footer />
    </div>
  )
}

export default App
