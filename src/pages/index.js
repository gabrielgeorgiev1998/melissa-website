import React, { useState, useEffect } from "react";
import cx from "classnames";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Parallax from 'react-rellax';

import indexImg from "../images/beehives.jpg";

import "../css/fonts.css";
import { useSpring, animated } from 'react-spring';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

function Index() {

  const mousePos = useMousePosition();

  const indexWhiteBoxSpring = useSpring({ marginBottom: `${4 + mousePos.y/150}rem`, marginRight: `${6 + mousePos.x/150}rem`});
  const indexOrangeBoxSpring = useSpring({ marginBottom: `${3 + mousePos.y/150}rem`, marginRight: `${5 + mousePos.x/150}rem`});
  const melissaIndexSpring = useSpring({ marginBottom: `${10 + mousePos.y/100}rem`, marginRight: `${15 + mousePos.x/100}rem`, textShadow: `4px 4px #dca30a`});

  return (
    <Layout headerClass="bg-white"> 
      <SEO title="Home" />

      <Parallax className="relative z-10" speed={-10}>
        <div className="h-screen w-full">
          <img className="absolute top-0 h-full w-full object-cover object-center" src={indexImg} /> 
          <div className="absolute top-0 h-full w-full" style={{ backgroundImage: 'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(255,255,255,1))' }}/>
          <div> 
            <animated.div className="absolute bottom-0 right-0 border-bee border-4 h-64 w-104 rounded-lg" style={indexOrangeBoxSpring} />
            <animated.div className="absolute bottom-0 right-0 border-white border-4 h-64 w-104 rounded-lg" style={indexWhiteBoxSpring} />
            <animated.div className="absolute bottom-0 right-0 text-4xl md:text-5xl text-white comfortaa" style={melissaIndexSpring} >Мелисса Хъни</animated.div>
          </div>
        </div>
      </Parallax>
      <div className="relative h-104 bg-white z-20">
        henlo
      </div>
      <div className="h-104">
        henlo
      </div>
    </Layout>
  );
}

export default Index;
