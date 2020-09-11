import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";

import cellGradient from '../images/cell-gradient.jpg';

const Footer = ({ className, ...props }) => {
  className = cx(
    "relative w-full bg-white", 
    className
  );

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }


  return (
    <div className={className} {...props} > 
      <div style={{ backgroundImage: `url(${cellGradient})` }} className="relative w-full h-40 lg:h-56 bg-right bg-cover bg-fixed" >
        <div className="absolute right-0 mr-2 lobster text-5xl lg:text-6xl text-white" style={{ textShadow: '2px 2px #dca30a'}}>
          <Link>Мелисса Хъни</Link>
        </div>
        <div className="absolute right-0 flex flex-col mt-16 lg:mt-20 mr-2 montserrat-reg items-end font-bold text-white" style={{ textShadow: '2px 2px #dca30a'}}>
          <Link to="/" >За нас</Link>
          <Link to="/services" >Продукти</Link>
          <Link to="contact" >Контакти</Link>
        </div>
        <div className="absolute bottom-0 left-0 mb-2 ml-2" onClick={() => scrollToTop()}>scroll</div>
      </div>
      <div className="w-full h-4" style={{ backgroundImage: 'linear-gradient(to bottom, #f1bb5d, white)' }} />
      <div className="flex flex-col md:flex-row text-xs montserrat-reg ml-2 ">
        <div className="md:absolute ml-2">
          ©2019 МЕЛИССА ХЪНИ ЕООД
        </div>
        <div className="md:absolute md:right-0 ml-2 md:mr-2">
          Уеб дизайн и уеб разработка от <a className="underline" href="https://www.linkedin.com/in/gabriel-georgiev-b039571b3/" target="_blank">Габриел Георгиев</a>.
        </div>
      </div>
    </div>
  );
};

export default Footer;

