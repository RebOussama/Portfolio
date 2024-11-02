import React from 'react'
import './ContactUs.css'
import { useForm ,ValidationError  } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json'
import EmailAnimation from '../../animation/contact.json'

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xqkrbdlb");
 


  return (
    <section className='contactUs'>
      <h1 className='title'>Contact Us</h1>

      <p className='subtitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, nemo quasi beatae magni ad necessitatibus dolorum.</p>

      <div style={{justifyContent:'space-between'}} className="flex">
       <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="email">Email Address :</label>
            <input required type="email" name='email' id='email' />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>

          <div style={{marginTop:"20px"}} className='flex'>
            <label htmlFor="message">Your message :</label>
            <textarea required id="message" name='message'></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>

          <button type="submit" disabled={state.submitting} className='submit'>{state.submitting ?"Submitting...":"Submit"}</button>
          {state.succeeded && <p  className='flex' style={{marginTop:"1rem",color:"var(--title)",}}>
          <Lottie loop={false} style={{height:33}} animationData={doneAnimation} />
            Your message has been sent successfully !
            </p>}
          
       </form>
       <div className= "animation">
       <Lottie  style={{height:400}} animationData={EmailAnimation} />
       </div>
      </div>
    </section>
  )
}

export default ContactUs
