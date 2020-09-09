import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NameSection from '../components/nameSection';

import beehives from '../images/beehives.jpg';
import contactsBee from '../images/contacts-bee.jpg';

import callIcon from '../images/icons/call.svg';
import emailIcon from '../images/icons/email.svg';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <NameSection title="Контакти" img={beehives} />
      <div className="w-full mb-32 mt-16 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-around items-center montserrat-reg">
          <div className="rounded-lg shadow-lg border-bee border-2 w-5/6 md:w-1/2 lg:w-1/4 h-48">
            <div className="flex flex-col h-full items-center justify-around">
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
          </div>
          <img className="w-5/6 md:w-1/2 lg:w-1/3 rounded-lg" src={contactsBee} />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
