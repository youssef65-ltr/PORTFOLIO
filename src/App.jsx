
import Header from './components/header';
import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
// import pages of header
import Home from './components/homePage';
import About from './components/aboutPage';
import Projects from './components/projectsPage';
import Skills from './components/skills';

function App() {
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
