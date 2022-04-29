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
    <aside
      className={`${styles.aside} ${!isMenuShown && styles.hide}`}
      onClick={clickHandler}
    >
      <nav className={styles.navigation}>
        <Link href="/aktualnosci">AKTUALNOŚCI</Link>
        <Link href="/artykuly">ARTYKUŁY</Link>
        <Link href="/projekty">PROJEKTY</Link>
        <Link href="/kontakt">KONTAKT</Link>
        <Link href="/">O NAS</Link>
        <BackgroundWave />
      </nav>
      <div className={styles.waveBar}>
        <SideWave />
        <Button type="button" className={styles.button}>
          {isMenuShown ? (
            <ExitIcon dimensions={styles.iconDimensions} strokeWidth="0.2rem" />
          ) : (
            <BurgerIcon
              dimensions={styles.iconDimensions}
              strokeWidth="0.2rem"
            />
          )}
        </Button>
      </div>
    </aside>
  );
};

export default NavigationBar;
