import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import NameSection from '../components/nameSection';

import beehives from '../images/beehives.jpg';
import contactsBee from '../images/contacts-bee.jpg';

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <NameSection title="Контакти" img={beehives} />
      <div className="w-full mb-6 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="border-black border-2 rounded-lg">
            <div>
              Телефони:
              <div className="flex flex-col" >
                <div>+359/887 621 642</div>
                <div>+359/884 905 810</div>
              </div>
            </div>
            <div>
              Имейл:
              <div>beefarm.melissa@gmail.com</div>
            </div>
          </div>
          <img className="w-1/2" src={contactsBee} />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
