import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main>
        <div className="w-full mx-auto p-6 lg:px-12">
          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
