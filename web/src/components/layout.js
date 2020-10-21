import React from "react";

import "../styles/layout.css";

const Layout = ({ children, hideHeader, siteTitle }) => (
  <div className="min-h-screen text-sm text-blue-900 text-shadow-gray-50 leading-6">
    {children}
  </div>
);

export default Layout;
