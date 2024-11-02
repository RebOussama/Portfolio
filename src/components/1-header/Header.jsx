import React from 'react'
import './Header.css'
import { useState,useEffect } from 'react'
function Header() {
  const [modalShow, setmodalShow] = useState(false)
  const [mode, setmode] = useState(localStorage.getItem('currentmode') ?? "dark")
  useEffect(() => {
    
    if(mode==='light')
    {
      document.body.classList.remove("dark")
      document.body.classList.add("light")

    }else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")

    }

    
  }, [mode])
  
  return (
    <header className='flex'>
      <div><button className='show icon-menu' onClick={()=>{
        setmodalShow(true)
      }}></button></div>
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <button onClick={()=>{
         localStorage.setItem("currentmode",mode==="dark"?"light":"dark")
         setmode(localStorage.getItem('currentmode'))
      }}>{mode ==='dark'?(<span className='icon-moon-o'></span>):(<span className='icon-sun'></span>)}</button>

      {modalShow && (<div className='menu'>
        <ul className="list">
          <li><button className='icon-cancel' onClick={() => {
            setmodalShow(false)
          }}></button></li>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        
      </div>)}

    </header>
  )
}
export default Header