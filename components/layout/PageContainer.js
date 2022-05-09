import React from "react";

import Footer from "./utilities/Footer";

import styles from "./PageContainer.module.css";

const PageContainer = ({ children }) => {
  return (
    <main className={styles.pageContainer}>
      {children}
      <Footer />
    </main>
  );
};

export default PageContainer;
