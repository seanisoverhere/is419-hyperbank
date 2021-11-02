import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
