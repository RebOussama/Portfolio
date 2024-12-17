import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import ComputerAnimation from '../../animation/computer.json'
function Hero() {
  return (
    <section className="flex">
      <div className="left_section ">
        <div className="parent-avatar flex">
          <img src="./photo.png" alt="" />
          <span className="icon-verified"></span>
        </div>
        <h1 className="title">Front-end Developper</h1>
        <p className="sub-title">
        I am Rebaii Oussama, a third-year computer science student and front-end developer. I specialize in creating responsive and user-friendly web interfaces using technologies like React.js and Tailwind CSS, combining creativity with functionality.
        </p>
        <div className="icons flex">
          <a className="icon icon-x"></a>
          <a href="https://www.instagram.com/re.oussama01/" className="icon icon-instagram"></a>
          <a href="https://github.com/RebOussama" className="icon icon-github"></a>
          <a href="https://www.linkedin.com/in/rebaii-oussama-a80b9a338/" className="icon icon-linkedin"></a>
        </div>
      </div>

      <div className="right_section ">
      <Lottie className="animation"  animationData={ComputerAnimation} />
      </div>
    </section>
  );
}

export default Hero;
