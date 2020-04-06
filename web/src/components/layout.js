import React from "react";
import Header from "./header";

import "../styles/layout.css";
import styles from "./layout.module.css";

const Layout = ({ children, hideHeader, siteTitle }) => (
  <>
    {hideHeader ? null : <Header siteTitle={siteTitle} />}
    <div className={styles.content}>{children}</div>
  </>
);

export default Layout;
