import React from 'react';
import logo from "../images/logo.jpg";
import melissaText from "../images/melissa-text.jpg";
import { useSpring, animated } from 'react-spring';

const SidebarLogo = ({isHovered}) => {   
  const logoSpinSpring = useSpring({ transform: `rotate(${isHovered ? 360 : 0}deg) scale(${isHovered ? 1 : 0.8})`});

  return (
    <div className="content-center w-full">
      <animated.div className="w-auto" style={logoSpinSpring}>
          <img src={logo} className="h-12 m-1" />
      </animated.div>
      <div className="lato-light ">melissa</div>
    </div>
  );
};

export default SidebarLogo;