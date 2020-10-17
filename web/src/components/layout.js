import React from "react";

import "../styles/layout.css";

const Layout = ({ children, hideHeader, siteTitle }) => (
  <>
    <div className="min-h-screen bg-gray-50">{children}</div>
  </>
);

export default Layout;
