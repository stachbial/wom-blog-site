import { useState } from "react";
import Link from "next/link";

import ExitIcon from "../svgComponents/icons/ExitIcon";
import BurgerIcon from "../svgComponents/icons/BurgerIcon";
import Button from "./utilities/Button";
import DecorationWave from "../svgComponents/decoration/DecorationWave";
import DecorationBGwave from "../svgComponents/decoration/DecorationBGwave";

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
        <Link href="/aktualnosci">AKTUALNOŚCI</Link>
        <Link href="/artykuly">ARTYKUŁY</Link>
        <Link href="/projekty">PROJEKTY</Link>
        <Link href="/kontakt">KONTAKT</Link>
        <Link href="/">O NAS</Link>
        <DecorationBGwave />
      </nav>
      <div className={styles.waveBar}>
        <DecorationWave />
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

export default NavigationMenu;
