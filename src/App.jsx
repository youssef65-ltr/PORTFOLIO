import { useState } from 'react'
import Header from './components/header';
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
        <div>
           <HashRouter>
                <Header/>
            </HashRouter>
        </div>
  );
}

export default App
