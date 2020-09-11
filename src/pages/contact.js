import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import Link from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NameSection from '../components/nameSection';

import beehives from '../images/beehives.jpg';
import contactsBee from '../images/contacts-bee.jpg';

import callIcon from '../images/icons/call.svg';
import emailIcon from '../images/icons/email.svg';
import deliveryIcon from '../images/icons/deliveryIcon.svg';
import contactsPinIcon from '../images/icons/contactsPinIcon.svg';
import { useSpring, animated, config } from 'react-spring';

const Contact = () => {
  const [rightHovered, setRightHovered] = useState(false);
  const [leftHovered, setLeftHovered] = useState(false);
  const imageOpacitySpring = useSpring({to: { opacity: `${rightHovered ? 0.45 : 0.2}` }, config: config.slow})
  const rightIconSpring = useSpring({to: { opacity: `${rightHovered ? 1 : 0.5}`, transform: `scale(${rightHovered ? 1.2 : 1})`, webkitFilter: `drop-shadow(${rightHovered ? 4 : 2}px ${rightHovered ? 4 : 2}px #dca30a)`  }})
  const leftIconSpring = useSpring({to: { opacity: `${leftHovered ? 1 : 0.5}`, transform: `scale(${leftHovered ? 1.2 : 1})`, webkitFilter: `drop-shadow(${leftHovered ? 4 : 2}px ${leftHovered ? 4 : 2}px #dca30a)`   }})

  return (
    <Layout>
      <SEO title="Contact" />

      <NameSection title="Контакти" img={beehives} />
      <div className="w-full h-full mb-72 mt-16 flex flex-col items-center">
        <div className="flex flex-col w-11/12 md:w-3/4 h-full md:flex-row items-center md:items-start justify-around montserrat-reg">
          <div className="flex flex-col items-center w-5/6 md:w-1/2 h-full " onMouseEnter={() => setLeftHovered(true)} onMouseLeave={() => setLeftHovered(false)}>
            <animated.img src={deliveryIcon} className="w-1/5 mb-8" style={leftIconSpring} />
            <div className="mt-16">
              <div className="mb-2">
                Извършваме доставки в цялата страна чрез куриерска фирма Еконт Експрес за сметка на получателя. Разплащания се извършват с наложен платеж по куриера.
              </div>
              <div>
                За повече информация и уточнения, не се колебайте да ни потърсите.
              </div>
            </div>
          </div>
          <div className="bg-bee h-1 w-72 md:h-96 md:w-1 mx-24 mt-24" />
          <div className="flex flex-col items-center w-full md:w-1/2 mt-2" onMouseEnter={() => setRightHovered(true)} onMouseLeave={() => setRightHovered(false)}>
            <animated.img src={contactsPinIcon} className="w-1/5 mb-8 " style={rightIconSpring} />
            <div className="relative rounded-lg shadow-lg w-full h-56 md:h-64 lg:h-72 bg-center bg-cover" > 
              <div className="relative flex flex-col h-full items-center justify-around z-40">
                <div className="flex flex-col items-center">
                  <img style={{ webkitFilter: 'drop-shadow(2px 2px #dca30a)' }} className="h-6 mb-2" src={callIcon} />
                  <div>
                    +359/887 621 642
                  </div>
                  <div>
                    +359/884 905 810
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img style={{ webkitFilter: 'drop-shadow(2px 2px #dca30a)' }} className="h-6 mb-2" src={emailIcon} />
                  <div>
                    beefarm.melissa@gmail.com
                  </div>
                </div>
              </div>
              <animated.img src={contactsBee} className="rounded-lg absolute top-0 right-0 w-full h-full object-cover z-10" style={imageOpacitySpring} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
