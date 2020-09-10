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
import { useSpring, animated, config } from 'react-spring';

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  const imageOpacitySpring = useSpring({to: { opacity: `${hovered ? 0.5 : 0.2}` }, config: config.slow})

  return (
    <Layout>
      <SEO title="Contact" />

      <NameSection title="Контакти" img={beehives} />
      <div className="w-full mb-32 mt-16 flex flex-col items-center">
        <div className="flex flex-col w-11/12 md:w-7/8 lg:w-3/4 md:flex-row justify-between items-center montserrat-reg">
          <div className="w-5/6 md:w-1/2 lg:w-5/12 mb-4">
            <div className="mb-2">
              Извършваме доставки в цялата страна чрез куриерска фирма Еконт Експрес за сметка на получателя. Разплащания се извършват с наложен платеж по куриера.
            </div>
            <div>
              За повече информация и уточнения, не се колебайте да ни потърсите.
            </div>
          </div>
          <div className="relative rounded-lg shadow-lg border-bee border-2 w-full md:w-1/2 h-56 md:h-64 lg:h-72 bg-center bg-cover" onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}> 
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
    </Layout>
  );
};

export default Contact;
