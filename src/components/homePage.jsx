import React from 'react'
import '../styles/firstfront.css'

export default function Home() {
    return (
        <div id='home'>
            <section id='firstfront'> 
                <article className='hero'>
                    <div className='text-hero'>Hello, I’m <span className='yellow'>youssef </span><br/> a full-stack developer from <span className='red'>morocco</span></div>
                    <div className='buttons-hero'><button>DOWNLOAD CV</button><button>ABOUT ME</button></div>
                </article>
                <img src="ME.png" alt="" className='image' />
            </section>
        </div>
    )

}