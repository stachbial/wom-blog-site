import { useState } from "react";
import Link from "next/link";

import ExitIcon from "../svgComponents/icons/ExitIcon";
import BurgerIcon from "../svgComponents/icons/BurgerIcon";
import Button from "./utilities/Button";
import SideWave from "../svgComponents/decoration/SideWave";
import BackgroundWave from "../svgComponents/decoration/BackgroundWave";

import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const clickHandler = () => {
    setIsMenuShown((prev) => !prev);
  };

  return (
    <aside className={`${styles.aside} ${!isMenuShown && styles.hide}`}>
      <nav className={styles.navigation}>
        {isMenuShown && (
          <>
            <Link href="/news">AKTUALNOŚCI</Link>
            <Link href="/articles">ARTYKUŁY</Link>
            <Link href="/projects">PROJEKTY</Link>
            <Link href="/contact">KONTAKT</Link>
            <Link href="/">O NAS</Link>
            <BackgroundWave />
          </>
        )}
      </nav>

      <div className={styles.waveBar}>
        <SideWave />
        <Button type='button' onClick={clickHandler} className={styles.button}>
          {isMenuShown ? <ExitIcon /> : <BurgerIcon />}
        </Button>
      </div>
    </aside>
  );
};

export default NavigationBar;
