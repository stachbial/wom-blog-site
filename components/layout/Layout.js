import React from "react";

import NavigationMenu from "./NavigationMenu";
import DecorationWave from "../svgComponents/decoration/DecorationWave";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <section className={styles.container}>
      <NavigationMenu />
      {children}
      <DecorationWave className={styles.sideWave} translate={styles.rotate} />
    </section>
  );
};

export default Layout;
