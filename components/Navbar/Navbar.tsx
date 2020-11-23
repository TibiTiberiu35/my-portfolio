import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.scss";
import { useState } from "react";

const Navbar = ({ scrolledOver }: { scrolledOver: boolean }) => {
  const [isBurgerActive, setBurger] = useState<boolean>(false);

  const handleBurgerClicked = () => {
    setBurger(!isBurgerActive);
  };

  return (
    <nav
      className={`${styles.navbar} ${
        scrolledOver ? styles["navbar--active"] : null
      }`}
    >
      <div>
        <Link href="/">
          <a>
            <Image
              src="/btiberiu.svg"
              alt="Boșcan Tiberiu home"
              height="60"
              width="85"
            />
          </a>
        </Link>
      </div>
      <div className={styles["navbar__content"]}>
        <div className={styles["navbar__burger"]} onClick={handleBurgerClicked}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div
          className={`${styles["navbar__links"]} ${
            isBurgerActive ? styles["navbar__links--active"] : null
          }`}
        >
          <ul>
            <li>
              <Link href="#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
