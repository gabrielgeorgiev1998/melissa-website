import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";
import logo from "../images/logo.jpg";
import { useSpring, animated } from "react-spring";

import hiveIcon from '../images/icons/hiveIcon.svg';

const SidebarLink = ({src, icon, label, isHovered}) => {
  const sidebarLinkSpring = useSpring({ textWidth: `${isHovered ? 1 : 0}` });

  return (
  <Link to={src} className="flex flex-row justify-around" activeClassName="">
    <svg src={icon} className="h-1" style={{ fill: '#FFFFFF' }} />
    <div style={{ opacity: sidebarLinkSpring.textWidth }} >{label}</div>
  </Link>
  );
};

const Header = ({ className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sidebarSpring = useSpring({width: `${isHovered ? 15 : 5}rem`});

  return (
      <animated.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-0 h-screen z-10 shadow-md"
        style={sidebarSpring}
      >
          <div
            className="h-1/2 flex flex-col items-center"
          >
            <img src={logo} className="h-16 w-16" />
            <div className="h-1 w-4/5 bg-gray-200" /> 
            <div className="flex flex-col left-0">
              <SidebarLink src="/" icon={hiveIcon} label="dsadsa" isHovered={isHovered} />
            </div>
          </div>
      </animated.div>
  );
};

export default Header;
