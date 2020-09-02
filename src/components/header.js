import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";
import { useSpring, animated } from "react-spring";

import logo from "../images/logo.jpg";
import melissaText from "../images/melissa-text.jpg";

import tempIcon1 from '../images/icons/tempIcon1.svg';
import tempIcon2 from '../images/icons/tempIcon2.svg';
import tempIcon3 from '../images/icons/tempIcon3.svg';
import hiveIcon from '../images/icons/hiveIcon.svg';

import closeSidebarIcon from '../images/icons/closeSidebarIcon.svg';
import contactIcon from '../images/icons/contactIcon.svg';

const SidebarLink = ({src, icon, label, menuIsHovered}) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sidebarLinkSpring = useSpring({ width: `${menuIsHovered ? 10 : 0}rem`, transform: `scale(${menuIsHovered ? 1 : 0})`, marginLeft: `${menuIsHovered ? 1 : 0}rem`, opacity: `${menuIsHovered ? 1 : -0.5}` });
  const linkSpring = useSpring({ transform: `scale(${isHovered ? 1.1 : 1})`, margin: `${isHovered ? 0.2 : 0}rem` }); 


  return (
      <Link to={src} className="bg-lightbee rounded-lg h-12 mb-2  border-2 border-gray-300" activeClassName="font-bold bg-bee" style={{ pointerEvents: menuIsHovered ? 'all' : 'none'}}>
        <animated.div onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={linkSpring} className="flex flex-row items-center">
          <img src={icon} className="relative h-12" /> 
          <animated.div style={sidebarLinkSpring} >{label}</animated.div>
        </animated.div>
      </Link>
  );
};

const Header = ({ className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sidebarSpring = useSpring({from: {width: '15rem'}, to: {width: `${isHovered ? 15 : 4}rem`}});
  const closeButtonSpring = useSpring({transform: `scale(${isHovered ? 1 : 0})`, opacity: `${isHovered ? 1 : -0.5}`});
  const logoSpinSpring = useSpring({ transform: `rotate(${isHovered ? 360 : 0}deg)`})

  return (
      <animated.div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-0 h-screen shadow-lg bg-white"
        style={sidebarSpring}
      >
          <div
            className="h-1/2 flex flex-col"
          >
            <div className="flex flex-col items-center">
              <Link to="/" >
                <div className="content-center">
                  <animated.div className="w-auto" style={logoSpinSpring}>
                      <img src={logo} className="h-12 m-1" />
                  </animated.div>
                  <img src={melissaText} className="w-16 " />
                </div>
              </Link>
              <div className="h-1 w-4/5 bg-gray-200" /> 
            </div>
            <div className="h-12 md:g-16 lg:h-24" />
            <div className="flex flex-col items-center justify-around"> 
              <SidebarLink src="/" icon={hiveIcon} label="Za nas" menuIsHovered={isHovered} />
              <SidebarLink src="/services" icon={tempIcon2} label="Za tqh" menuIsHovered={isHovered} />
              <SidebarLink src="/team" icon={contactIcon} label="Kontakti" menuIsHovered={isHovered} />
            </div>
            <div className="h-12 md:g-16 lg:h-24" />
            <div className="h-1 w-4/5 bg-gray-200 self-center" /> 
          </div>
          <animated.div className="absolute right-0 mt-4 mr-4 cursor-pointer" style={closeButtonSpring} onClick={() => setIsHovered(false)}>
            <img src={closeSidebarIcon} className="h-8 w-8"/> 
          </animated.div>
      </animated.div>
  );
};

export default Header;
