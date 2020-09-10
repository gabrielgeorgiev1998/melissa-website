import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import service_img from "../images/undraw_businesswoman_pc12.svg";
import SEO from "../components/seo";

import productImg from '../images/contacts-bee.jpg';
import NameSection from './../components/nameSection';


const Services = () => {

  return (
    <Layout headerClass="bg-white relative">
      <SEO title="Services" />

      <NameSection title="Продукти" img={productImg} /> 

    </Layout>
  );
};

export default Services;
