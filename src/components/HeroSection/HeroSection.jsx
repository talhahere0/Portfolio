import React from 'react'
import './HeroSection.css'
import image1 from '../../image/hero-img.png'


const HeroSection = () => {
    
    return (
        <>
            <div className="heroSection">
            <div className="hero-left">
            <div className="hero-left-wrapper">
            <h2 className="hero-intro">Hola , My name is</h2>
            <h1 className="hero-name">Talha Zulfiqar</h1>
            <div className="hero-title">
            <div className="hero-title-wrapper">
            <div className="hero-title-item">Web Developer</div>
            <div className="hero-title-item">React js Developer</div>
            <div className="hero-title-item">Node js Developer</div>
            <div className="hero-title-item">Mern Stack Developer</div>
            <div className="hero-title-item">Ui & Ux Designer</div>
            </div>
            
            </div>
            <div className="hero-des">
            <p>🔭 I’m currently working on MERN Stack as a Developer.</p>
            <p>🌱 I’m currently learning Reactjs | Nodejs.</p>
            <p>👯 I’m looking to collaborate on any new project.</p>
            <p>💬 Ask me about any (web application) technologies.</p>
            <p>📫 How to reach me: (Email) Muhammadtalha6063@gmail.com.</p>
            <p>⚡ Interest in: Martial Arts | Boxing | Gyming</p>
            </div>
            </div>
            </div>
            <div className="hero-right">
            <div className="hero-bg"></div>
            <img src={image1} alt="" className="hero-img" />
            </div>
            </div>
        </>
    )
}

export default HeroSection
