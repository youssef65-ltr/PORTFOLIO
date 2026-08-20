import React from "react";
import '../styles/header.css';
import {Route , Routes , Link} from 'react-router-dom';


export default function Header() {
    return (
        <div id="header">
            <ul id="header_list">
                <li className="home">
                     <Link to="/" className='elemHeader'>HOME</Link>
                </li>
                <li className="about">
                     <Link to="/about" className='elemHeader'>ABOUT</Link>
                </li>
                <li className="projects">
                     <Link to="/projects" className='elemHeader'>PROJECTS</Link>
                </li>
                <li className="skills">
                     <Link to="/skills" className='elemHeader'>SKILLS</Link>
                </li>
            </ul>
            
        </div>
    )
}