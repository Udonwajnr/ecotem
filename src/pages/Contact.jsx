import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/Contact.css'
import { useState } from 'react'
// import {sendForm} from 'emailjs-com'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
  // const [contactMessage,setContactMessage] = useState('')
  const [input,setInput] = useState({})

  
  const form =useRef()

  const handleChange = (e)=>{
    // use let value can be changed
    let newInput = {[e.target.name]:e.target.value }
    setInput({...input, ...newInput})
  }

// emailjs.js api
  const sendEmail=(e)=>{
      e.preventDefault()
      emailjs.sendForm(`${process.env.REACT_APP_EMAIL_YOUR_SERVICE_ID}`,`${process.env.REACT_APP_EMAIL_YOUR_TEMPLATE_ID}`,form.current,`${process.env.REACT_APP_EMAIL_YOUR_PUBLIC_KEY}`)
      .then(()=>{alert('Message has been sent successfully');e.target.reset()})
      .catch(()=>alert('Message has not been sent. Try agin'))
      
  }


  return (
    // the name attribute in the input are being used in email.js so please be careful
    <Layout showHeader={true} showFooter={true} showSidebar={true}>
          <div className='contact'>
              <div className="contact__header">
                <h2>Contact</h2>
                <p>For any question please do well to react out to me and I will reply you in less than 24 hour</p>
              </div>

              <div className="contact__form">
                <form ref={form} onSubmit={sendEmail} >
                  <div className="name">
                    <label htmlFor="">name</label>
                    <input type="text"  name='from_name' onChange={handleChange} required/>
                  </div>

                  <div className="email">
                    <label htmlFor="">email</label>
                     <input type="Email" name='from_email' onChange={handleChange} required/>
                  </div>

                  <div className="Message">
                    <label htmlFor="">Message</label>
                   <textarea name='message' onChange={handleChange} required></textarea>
                  </div>

                  <div className="contact__submit">
                    <button>Submit</button>
                  </div>
                </form>
              </div>          
             
          </div>
    </Layout>
    
  )
}

export default Contact