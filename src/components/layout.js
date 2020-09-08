import React from "react";
import { Helmet } from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import SEO from './seo'
import "../css/style.css";

const Layout = ({ className, headerClass, bodyClass, children, ...props }) => {
  bodyClass = bodyClass || "w-full z-10 pl-16";
  return (
    <div className={className} {...props}>
      <SEO/>
      <Helmet>
        <body className="font-sans antialiased" />
      </Helmet>

      <Header/>
      <div className={bodyClass}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
