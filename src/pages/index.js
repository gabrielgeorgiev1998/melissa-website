import React, { useState, useEffect } from "react";
import cx from "classnames";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Parallax from 'react-rellax';

import indexImg from "../images/beehives.jpg";
import indexBeeImg from "../images/index-bee.jpg";

import "../css/fonts.css";
import { useSpring, animated, config } from 'react-spring';

const useMousePosition = () => { //hook to track mouse movements to create index page title animation
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

  const indexTitleSpring = useSpring({from: { opacity: 0}, to: { opacity: 1}, config: config.slow});

  const indexWhiteBoxSpring = useSpring({ marginBottom: `${14 - mousePos.y/180}rem`, marginRight: `${17 - mousePos.x/180}rem`});
  const indexOrangeBoxSpring = useSpring({ marginBottom: `${13 - mousePos.y/200}rem`, marginRight: `${15 - mousePos.x/200}rem`});
  const melissaIndexSpring = useSpring({ marginBottom: `${20 - mousePos.y/120}rem`, marginRight: `${28 - mousePos.x/120}rem`, textShadow: `4px 4px #dca30a`});
  const farmIndexSpring = useSpring({ marginBottom: `${24 - mousePos.y/160}rem`, marginRight: `${32 - mousePos.x/160}rem`, textShadow: `4px 4px #dca30a`});

  return (
    <Layout headerClass="bg-white"> 
      <SEO title="Home" />

      <Parallax className="relative z-10" speed={-10}>
        <div className="h-screen w-full">
          <img className="absolute top-0 h-full w-full object-cover object-center" src={indexImg} /> 
          <div className="absolute top-0 h-full w-full" style={{ backgroundImage: 'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,0.25), rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(255,255,255,1))' }}/>
          <animated.div style={indexTitleSpring} className="comfortaa"> 
            <animated.div className="absolute bottom-0 right-0 border-bee border-4 h-64 w-104 rounded-lg" style={indexOrangeBoxSpring} />
            <animated.div className="absolute bottom-0 right-0 border-white border-4 h-64 w-104 rounded-lg" style={indexWhiteBoxSpring} />
            <animated.div className="absolute bottom-0 right-0 text-lg md:text-3xl text-white" style={farmIndexSpring} >Пчелна ферма</animated.div>
            <animated.div className="absolute bottom-0 right-0 text-4xl md:text-5xl text-white" style={melissaIndexSpring} >Мелисса Хъни</animated.div>
          </animated.div>
        </div>
      </Parallax>
      <div className="relative bg-white z-20 flex flex-col items-center p-16">
        <div className="shadow-lg flex flex-row p-8">
          <img src={indexBeeImg} className="w-104 pr-4"/>
          <div className="w-104 montserrat-reg content-center">
            Ние сме семейство, което се занимава основно с пчеларство, за нас то е повече изкуство, отколкото бизнес.
            Започнахме с няколко кошера като хоби, но пчелите така ни плениха с изяществото на природата, че
            превзеха цялото ни време, цялата ни мисъл, цялата ни душа и сърце. Стараем се да отглеждаме здрави пчелни колонии,
            без да ги третираме с никакви препарати, без да подхранваме със захар, тъй като в близост до пчелините ни има богата растителност,
            в периоди, когато на други места сезона е приключил. Продуктите, които произвеждаме са напълно натурални и чисти, всяка година правим анализи,
            БИО-то не го прави сертификата, а човека, който се занимава с дадена дейност.
          </div>
        </div> 
      </div>
    </Layout>
  );
}

export default Index;
