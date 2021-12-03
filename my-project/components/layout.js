import React from "react";
import Header from "./parts/header.js";
import Sidebar from "./features/sidebar.js";


const Layout = ({ children }) => {


  return (
    <>
    <div>
    <Header />
    <Sidebar/>
      {children}
    </div>
    
          
    
   </>
  );
};




export default Layout;
