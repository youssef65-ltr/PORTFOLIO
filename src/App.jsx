
import Header from './components/header';
import './styles/App.css'
import { Routes, Route , useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
// import pages of header
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills'


import background_skills from "/background_skills.jpg"
import background from "/background.jpg"
import Container from './components/container';

function App() {

  const location = useLocation();

  useEffect(() => {
    // Change background based on current route path
    if (location.pathname === '/skills') {
      document.body.style.backgroundImage =  `url(${background_skills})`;
    } else {
      document.body.style.backgroundImage = `url(${background})`;
    }
  }, [location]); // Fires every time the route changes
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </div>
  );
}

export default App

