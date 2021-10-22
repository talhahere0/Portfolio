import React from 'react'
import './style.css'
import {Facebook, GitHub, Instagram} from '@material-ui/icons'
import abimg from '../../image/img22.jpg'
const About = () => {
    
    return (
        <>
            <div className="about">
            <div className="aboutleft">
            <div className="aboutcard bg"></div>
            <div className="aboutcard">
            <img src={abimg} alt="" className="aboutimg" />
            </div>
            
            
            
            
            
            </div>
            <div className="aboutright">
            <h1 className="about-title">About Me</h1>
            <p className="about-sub">
            Hi there, I am Talha Mern Stack Web Developer with 3 years of experience.<br/>
            Currently I am working on new Technologies (Nextjs , Vuejs) etc.
            </p>
            <p className="about-desc">
            I love to learn new techologies related to web applications. Currently i am working on popular frameworks or library like reactjs , expressjs or nodejs etc.
            How to reach me: (Email) Muhammadtalha6063@gmail.com.
            Interest in: Martial Arts | Boxing | Gyming.

            </p>
            <h1 className="about-contact">Contact Me</h1>
            <div className="about-award">
            
            <GitHub  className="about-icons" />
            <label className="github">@talhahere0</label>
            <Facebook className="about-icons" />
            <label className="facebook">@Muhammadtalha</label>
            <Instagram className="about-icons"/>
            <label className="insta">@codewithtalha</label>

            
            
            </div>
            </div>
            </div>
        </>
    )
}

export default About
