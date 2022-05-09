import React from "react";

import PageContainer from "../components/layout/PageContainer";
import Card from "../components/layout/utilities/Card";
import Header from "../components/layout/utilities/Header";
import FaceBookIcon from "../components/svgComponents/icons/FaceBookIcon";
import InstagramIcon from "../components/svgComponents/icons/InstagramIcon";
import MailIcon from "../components/svgComponents/icons/MailIcon";

import styles from "../pageStyles/ContactPage.module.css";

export default function ContactPage() {
  return (
    <PageContainer>
      <Header>KONTAKT</Header>
      <Card className={styles.card}>
        <img
          src="/images/logoWom300.png"
          className={styles.logo}
          alt="czlonkowie WOM"
        />
        <ul className={styles.links}>
          <li>
            <a href="https://www.facebook.com/Wiatr-od-Morza-105595471666611/">
              <FaceBookIcon dimensions={styles.icon} />
              <span className={styles.link}>Wiatr od Morza na Facebook'u</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/wiatr.od.morza/?igshid=YmMyMTA2M2Y=&fbclid=IwAR2ehvVvsgVV_zsjVbDCrxQdWJiJCS1z45fBmjKGDS-OGshW08XBR71mye4">
              <InstagramIcon dimensions={styles.icon} />
              <span className={styles.link}>
                Wiatr od Morza na Instagram'ie
              </span>
            </a>
          </li>
          <li>
            <address>
              <a href="mailto:womgdynia@gmail.com">
                <MailIcon dimensions={styles.icon} />
                <span className={styles.link}>womgdynia@gmail.com</span>
              </a>
            </address>
          </li>
        </ul>
      </Card>
    </PageContainer>
  );
}
