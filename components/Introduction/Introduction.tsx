import Link from "next/link";
import Image from "next/image";

import styles from "./Introduction.module.scss";

const Introduction = ({ scrolledOver }: { scrolledOver: boolean }) => {
  return (
    <div className={styles["first-section"]}>
      <div className={styles.introduction}>
        <div className={styles.content}>
          <div className={styles["text-content"]}>
            <p className={styles.greeting}>Hi.</p>
            <h1>
              I’m <span>Tiberiu Boșcan</span>.
            </h1>
            <p className={styles.description}>
              I’m an ambitios and persevering <span>front-end developer</span>.
            </p>
          </div>
          <div className={styles.links}>
            <Link href="#projects">
              <a className={styles["portfolio-button"]}>Check out my work</a>
            </Link>
            <Link href="https://github.com/TibiTiberiu35">
              <a
                className={styles["github-button"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/github-logo.svg"
                  alt="My Github"
                  width="50"
                  height="50"
                />
                <p>My GitHub</p>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.illustration}>
          <Image
            src="/images/illustration/introduction.svg"
            alt="Picture of a window with code"
            width="640"
            height="485"
          />
        </div>
      </div>
      <div
        className={`${styles["what-is-next-container"]} ${
          scrolledOver ? null : null
        }`}
      >
        <p>Technologies that I'm comfortable with</p>
        <img
          src="/images/icons/arrow-down.svg"
          alt="scroll down"
          width="42"
          height="21"
        />
      </div>
    </div>
  );
};

export default Introduction;
