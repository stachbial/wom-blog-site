import React from "react";

import NavigationBar from "./NavigationBar";

import styles from "./Layout.module.css";
import SideWave from "../svgComponents/decoration/SideWave";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavigationBar />
      {children}
      <SideWave className={styles.sideWave} translate={styles.rotate} />
    </div>
  );
}
