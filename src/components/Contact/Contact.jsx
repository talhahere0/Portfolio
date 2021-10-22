import { Email, Home, Phone } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';


const Contact = () => {
    const formRef = useRef()
    const [done,setDone]= useState(false)
    const [name,setName]= useState()
    const [subject,setSubject]= useState()
    const [email,setEmail]= useState()
    const [message,setMessage]= useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        setSubject("")
        setEmail("")
        setMessage("")
        emailjs.sendForm('service_vj6hb91', 'template_wb0g7yt', formRef.current, 'user_f2xivTItyfba1iyG8JDXK')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <>
            <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
            <div className="contact-left">
            <h1 className="contact-title">
            Let's Discuss your project
            </h1>
            <div className="contact-info">
            <div className="contact-info-item">
            <Phone className="contact-icon"/>
            <label className="contact-text">+92-315-0003450</label>
            </div>
            <div className="contact-info-item">
            <Email className="contact-icon"/>
            <label className="contact-text">talha@gmail.com</label>
            </div>
            <div className="contact-info-item">
            <Home className="contact-icon"/>
            <label className="contact-text">Madina Town ,Faisalabad</label>
            </div>
            </div>
            </div>
            <div className="contact-right">
            <p className="contact-desc">
            <label className="contact-text"><b>what's your story?</b> Get in touch. Always freelancing if the right project comes along me.</label>
            </p>
            <form onSubmit={handleSubmit} ref={formRef} className="contact-form">
            <input type='text' className='contact-input' placeholder='Name' name="user_name" value={name} />
            <input type='text' className='contact-input' placeholder='Subject' name="user_subject" value={subject} />
            <input type='text' className='contact-input' placeholder='Email' name="user_email" value={email} />

            <textarea placeholder="Message" className="contact-textarea"  rows='5' name="user_message" value={message} />

            <button>Submit</button>
            {done && <h1 style={{marginTop:'15px', marginLeft:'10px'}} className="contact-text">Thankyou for Submission</h1>}
            </form>
            </div>
            </div>
            
            </div>
        </>
    )
}

export default Contact
