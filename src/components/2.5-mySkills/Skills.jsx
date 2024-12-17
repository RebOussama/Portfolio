import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div>
        <h1>My Skills :</h1>
        <div className='skills'>
            <div>
                <img src="./html.png" alt="" />
                <h2>HTML</h2>
            </div>
            <div>
                <img src="./css.png" alt="" />
                <h2>CSS</h2>
            </div>
            <div>
                <img src="./js.png" alt="" />
                <h2>Javascript</h2>
            </div>
            <div>
                <img style={{width:'25px',height:'25px'}} src="./reactjs.png" alt="" />
                <h2>React</h2>
            </div>
            <div>
                <img style={{width:'25px',height:'25px'}} src="./redux.png" alt="" />
                <h2>Redux</h2>
            </div>
            <div>
                <img style={{width:'25px',height:'25px'}} src="./git.png" alt="" />
                <h2>Git</h2>
            </div>
            <div>
                <img src="./github.png" alt="" />
                <h2>Github</h2>
            </div>
            <div>
                <img style={{width:'30px',height:'20px'}} src="./tailwindcss.png" alt="" />
                <h2>Tailwind css</h2>
            </div>
            <div>
                <img src="./bootstrap.png" alt="" />
                <h2>Bootstrap</h2>
            </div>
            <div>
                <img style={{width:'45px',height:'40px'}} src="./Docker.png" alt="" />
                <h2>Docker</h2>
            </div>

        </div>
    </div>
  )
}

export default Skills