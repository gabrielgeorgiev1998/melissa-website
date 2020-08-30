import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";
import logo from "../images/logo.jpg";
import { useSpring, animated } from "react-spring";

import tempIcon1 from '../images/icons/tempIcon1.svg';
import tempIcon2 from '../images/icons/tempIcon2.svg';
import tempIcon3 from '../images/icons/tempIcon3.svg';
import hiveIcon from '../images/icons/hiveIcon.svg';

import closeSidebarIcon from '../images/icons/closeSidebarIcon.svg';

const SidebarLink = ({src, icon, label, isHovered}) => {
  const sidebarLinkSpring = useSpring({ width: `${isHovered ? 10 : 0}rem`, transform: `scale(${isHovered ? 1 : 0})`, marginLeft: `${isHovered ? 1 : 0}rem` });

  return (
  <Link to={src} activeClassName="">
    <div className="flex flex-row justify-around items-center">
      <img src={icon} className="relative h-12" /> 
      <animated.div style={sidebarLinkSpring} >{label}</animated.div>
    </div>
  </Link>
  );
};
const Header = ({ className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sidebarSpring = useSpring({width: `${isHovered ? 15 : 4}rem`});
  const closeButtonSpring = useSpring({transform: `scale(${isHovered ? 1 : 0})`});

  return (
      <animated.div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-0 h-screen z-10 shadow-md bg-white"
        style={sidebarSpring}
      >
          <div
            className="h-1/2 flex flex-col"
          >
            <div className="flex flex-col items-center">
              <img src={logo} className="h-12 w-12" />
              <div className="h-1 w-4/5 bg-gray-200" /> 
            </div>
            <div className="h-24" />
            <div className="relative h-2/3 flex flex-col items-center justify-between">
              <SidebarLink src="/" icon={hiveIcon} label="Za nas" isHovered={isHovered} />
              <SidebarLink src="/" icon={tempIcon2} label="Za tqh" isHovered={isHovered} />
              <SidebarLink src="/" icon={tempIcon3} label="Kontakti" isHovered={isHovered} />
            </div>
            <div className="h-32" />
            <div className="h-1 w-4/5 bg-gray-200 self-center" /> 
          </div>
          <animated.div className="absolute right-0 mt-4 mr-4" style={closeButtonSpring} onClick={() => setIsHovered(false)}>
            <img src={closeSidebarIcon} className="h-8 w-8"/> 
          </animated.div>
      </animated.div>
  );
};

export default Header;
