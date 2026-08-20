import { useState } from "react"
import "../styles/skills.css"

import Container from "../components/container"
export default function Skills() {

    const [skills, setSkills] = useState([
        { type: "Front-end", skills: ["html", "css", "javascript", "react", "tailwind"] },
        { type: "Back-end", skills: ["html", "css", "javascript", "react", "tailwind"] },
        { type: "Database", skills: ["html", "css", "javascript", "react", "tailwind"] },
        { type: "Tools", skills: ["html", "css", "javascript", "react", "tailwind"] },
    ])

    const [showSkillsContaier , setShowSkillsContainer] = useState(false);
    
    return (
        <div id='skills-page'>
            {showSkillsContaier && <Container parent={"hello"}/>}
            <section className="skills-section-imgs">
                {skills.map((elem , key ) => { return (
                    <div className="skills-section-skill-container" 
                        onClick={() => {setShowSkillsContainer(true)}}
                        key={key}
                    >
                        <img src="icons/hand_draw_folder.png" alt="" />
                        <p>{elem.type}</p>
                    </div>
                )})}
            </section>
                <button className="skills-btn-cv">Download CV</button>
        </div>
    )

}