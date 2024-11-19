import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import About from './markup/pages/About';
import Contact from './markup/pages/Contact';
import Home from './markup/pages/Home';
import Project from './markup/pages/Project';
import Header from './markup/components/Header';
import Footer from './markup/components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Ensure you import the CSS for AOS

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className='app-container bg-[#101010]'> 
        <Home/>
        <About/>
        <Project/>
        <Contact/>  
        <Footer />
      </div>
    </>
  );
}

export default App;
