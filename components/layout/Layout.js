import React from "react";

import NavigationMenu from "./NavigationMenu";
import DecorationLayoutWave from "../svgComponents/decoration/mainLayout/DecorationLayoutWave";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <section className={styles.container}>
      <NavigationMenu />
      {children}
    </section>
  );
};

export default Layout;
