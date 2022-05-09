import React from "react";
import { useState } from "react";
import Link from "next/link";

import ExitIcon from "../svgComponents/icons/ExitIcon";
import BurgerIcon from "../svgComponents/icons/BurgerIcon";
import Button from "./utilities/Button";
import DecorationLayoutWave from "../svgComponents/decoration/mainLayout/DecorationLayoutWave";
import DecorationBGwave from "../svgComponents/decoration/menu/DecorationBGwave";

import styles from "./NavigationMenu.module.css";

const NavigationMenu = () => {
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
        {/* <Link href="/aktualnosci">AKTUALNOŚCI</Link>
        <Link href="/artykuly">ARTYKUŁY</Link> */}
        <p className={styles.disabled}>AKTUALNOŚCI</p>
        <p className={styles.disabled}>ARTYKUŁY</p>
        <Link href="/projekty">PROJEKTY</Link>
        <Link href="/kontakt">KONTAKT</Link>
        <Link href="/">O NAS</Link>
        <DecorationBGwave />
      </nav>
      <div className={styles.waveBar}>
        <DecorationLayoutWave color="black" />
        <button type="button" className={styles.button}>
          {isMenuShown ? (
            <ExitIcon dimensions={styles.iconDimensions} strokeWidth="0.1rem" />
          ) : (
            <BurgerIcon
              dimensions={styles.iconDimensions}
              strokeWidth="0.1rem"
            />
          )}
        </button>
      </div>
      <div className={isMenuShown ? styles.backdropOn : styles.backdropOff} />
    </aside>
  );
};

export default NavigationMenu;
