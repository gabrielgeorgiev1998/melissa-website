import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";
import { useSpring, animated } from "react-spring";


import SidebarLogo from "./sidebarLogo";

import tempIcon1 from '../images/icons/tempIcon1.svg';
import tempIcon2 from '../images/icons/tempIcon2.svg';
import tempIcon3 from '../images/icons/tempIcon3.svg';
import hiveIcon from '../images/icons/hiveIcon.svg';

import contactIcon from '../images/icons/sideBarContactsIcon.svg';
import honeyIcon from '../images/icons/sideBarHoneyIcon.svg';

import closeSidebarIcon from '../images/icons/closeSidebarIcon.svg';

const SidebarLink = ({src, icon, label, menuIsHovered, url}) => {
  const isActive = 'http://192.168.0.104:8000' + src === url;
  const [isHovered, setIsHovered] = useState(false);
  const sidebarLinkSpring = useSpring({
                                      width: `${menuIsHovered ? 10 : 0}rem`,
                                      transform: `scale(${menuIsHovered ? 1 : 0})`,
                                      marginLeft: `${menuIsHovered ? 1 : 0}rem`,
                                      opacity: `${menuIsHovered ? 1 : -0.5}`,
                                    });
  const linkSpring = useSpring({ marginLeft: `${menuIsHovered ? 2 : 0}rem` }); 
  const underlineSpring = useSpring({ position: 'absolute', backgroundColor: '#555555', height: '0.2', width: `${menuIsHovered && isActive ? '5rem' : '0rem'}`, marginTop: '2rem'});


  return (
      <Link to={src} className="bg-white rounded-lg h-12 mb-1 lobster" style={{ pointerEvents: menuIsHovered ? 'all' : 'none' }} >
        <animated.div onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={linkSpring} className="flex flex-row items-center">
          <img src={icon} className="relative h-12" /> 
          <div className="flex flex-col">
            <animated.div style={sidebarLinkSpring} >{label}</animated.div>
            <animated.div style={underlineSpring} />
          </div>
        </animated.div>
      </Link>
  );
};

const Header = ({ className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const url = typeof window !== 'undefined' ? window.location.href : '';

  const sidebarSpring = useSpring({from: {width: '15rem'}, to: {width: `${isHovered ? 15 : 4}rem`}});
  const closeButtonSpring = useSpring({transform: `scale(${isHovered ? 1 : 0})`, opacity: `${isHovered ? 1 : -0.5}`});

  return (
      <div className="fixed z-50">
        <animated.div
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute top-0 shadow-lg bg-white rounded-br-4xl"
          style={sidebarSpring}
        >
            <div
              className="h-1/2 flex flex-col"
            >
              <div className="flex flex-col items-center w-full">
                <Link to="/" >
                  <SidebarLogo isHovered={isHovered} />
                </Link>
                <div className="h-1 w-4/5 bg-gray-200" /> 
              </div>
              <div className="h-12 md:g-16 lg:h-24" />
              <div className="flex flex-col items-center justify-around"> 
                <SidebarLink src="/" icon={honeyIcon} label="Za nas" menuIsHovered={isHovered} url={url}/>
                <SidebarLink src="/services" icon={honeyIcon} label="Za tqh" menuIsHovered={isHovered} url={url} />
                <SidebarLink src="/contact" icon={contactIcon} label="Контакти" menuIsHovered={isHovered} url={url} />
              </div>
              <div className="h-12 md:g-16 lg:h-24" />
              <div className="h-1 w-4/5 bg-gray-200 self-center" /> 
              <animated.div className="cursor-pointer self-end mr-4 mt-4" style={closeButtonSpring} onClick={() => setIsHovered(false)}>
                <img src={closeSidebarIcon} className="h-8 w-8"/> 
              </animated.div>
              <div className="h-24 md:h-32 lg:h-40" />
            </div>
        </animated.div>
      </div>
  );
};

export default Header;
