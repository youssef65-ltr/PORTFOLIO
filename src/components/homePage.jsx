import React from 'react'
import '../styles/home.css'
// images
import my_image from "../../public/my_image.png";
import html from "../../public/skills_images/html.png"
import js from "../../public/skills_images/js.png"
import mysql from "../../public/skills_images/mysql.png"
import python from "../../public/skills_images/python.png"
import react from "../../public/skills_images/react.png"
import css from "../../public/skills_images/css.png"
import php from "../../public/skills_images/php.png"
import bootstrap from "../../public/skills_images/bootstrap.png"
import git from "../../public/skills_images/git.png"
// 


export default function Home() {
    const list_logo_skills = [html, js ,mysql, python, react, css, php, bootstrap, git]
    return (
        <div id="home">
            <section id="home-section"> 
                <article className="hero-section">
                    <div className="hero-text">
                        Hello, I'm <span className="text-highlight-yellow">Youssef</span><br/> 
                        a full-stack developer from <span className="text-highlight-red">Morocco</span>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn-cv ">Download CV</button>
                        <button className="btn-about">About Me</button>
                    </div>
                </article>

                <article className="hero-image">
                    <img src={my_image} alt="Profile" className="image-profile" />
                </article>
            </section>
                {/* create an aimation for may programming langues */}
            <section className='home-skills'>
                <div class="marquee-content" >
                    <div className='group'>
                    {list_logo_skills.map(elem => <img src={elem}/>)}
                    </div>
                    <div aria-hidden className='group' >
                    {list_logo_skills.map(elem => <img src={elem}/>)}
                    </div>
                </div>
                 <h1>see more </h1>
            </section>
            <section class="home-projects">
                <div class="projects-content">
                    <div class="project"></div>
                    <div class="project"></div>
                    <div class="project"></div>
                    <div class="project"></div>
                </div>
                 <h1>see more</h1>
            </section>
        </div>
    )
}
