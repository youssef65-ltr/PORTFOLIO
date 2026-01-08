import { useState } from 'react'
import Header from './components/header';
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
        <div>
           <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </div>
  );
}

export default App
