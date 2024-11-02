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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident
          quia in necessitatibus officiis exercitationem commodi accusamus
          itaque temporibus nam. At, quia pariatur? Inventore eius error est!
          Corporis, dolore debitis.
        </p>
        <div className="icons flex">
          <a className="icon icon-x"></a>
          <a className="icon icon-instagram"></a>
          <a className="icon icon-github"></a>
          <a className="icon icon-linkedin"></a>
        </div>
      </div>

      <div className="right_section ">
      <Lottie className="animation"  animationData={ComputerAnimation} />
      </div>
    </section>
  );
}

export default Hero;
