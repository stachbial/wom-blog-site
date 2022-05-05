import React from "react";

import styles from "./PageContainer.module.css";

const PageContainer = ({ children }) => {
  return <main className={styles.pageContainer}>{children}</main>;
};

export default PageContainer;
