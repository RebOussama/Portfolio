import Skills from './components/2.5-mySkills/Skills'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import ContactUs from './components/4-contact/ContactUs'
import Footer from './components/5-footer/Footer'
import { useState,useEffect } from 'react'

function App() {
  useEffect(() => {
    
    window.addEventListener("scroll",()=>{
      if(window.scrollY>300){
        setshowbtntop(true)
      }else{
        setshowbtntop(false)
      }
    })
  
   
  }, [])
  
const [showbtntop, setshowbtntop] = useState(false)
  return (
    <div id='top' className='container'>
        <Header/>
        <Hero/>
        <div className='divider'/>
        <Skills/>
        <div className='divider'/>

        <Main/>
        <div className='divider'/>
        <ContactUs/>
        <div className='divider'/>
        <Footer/>
           <a style={{opacity:(showbtntop ? 1 : 0) ,transition:"1s",}} href='#top'>
            <button className='scrollTop icon-keyboard_arrow_up'></button>
            </a>
        
    </div>
  )
}

export default App
