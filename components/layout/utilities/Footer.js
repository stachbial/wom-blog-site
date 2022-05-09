import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>wersja testowa / stowarzyszenie Wiatr od Morza &#174; / </p>
      <a href="https://github.com/stachbial">Autor : S. BIAŁECKI</a>
    </footer>
  );
};

export default Footer;
