import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";

import cellGradient from '../images/cell-gradient.jpg';

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full h-40 md:h-48 lg:h-64 bg-center bg-cover bg-fixed", 
    className
  );


  return (
    <div className={className} {...props} style={{ backgroundImage: `url(${cellGradient})` }}> 

    </div>
  );
};

export default Footer;

