import React, { useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full h-40 md:h-48 lg:h-64 bg-center", 
    className
  );


  return (
    <div className={className} {...props} style={{ backgroundImage: `linear-gradient(to right, white, #f5bb1d)` }}> 

    </div>
  );
};

export default Footer;

