import React from "react";

import styles from "./Header.module.css";

const Header = ({ children, className }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;