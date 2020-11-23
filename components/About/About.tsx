import Image from "next/image";

import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__text}>
        <h1 id="about">About me</h1>
        <p>
          I’m Boșcan Tiberiu, the front-end developer no one is talking about.
          But I’m about to change that with the ambiton, the passion and the
          professionalism I put in my work. I love learning and applying new
          things.
        </p>
        <p>
          Even though I don’t have any job experiece I have the skills and
          perseverance to not just cope with any task I might be given, but to
          also come with ideas and make some improvements.
        </p>
        <p>
          If you got the time and interest you can read more about me in my
          resume.
        </p>
      </div>
      <div className={styles["illustration-box"]}>
        <div className={styles.illustration}>
          <Image
            className={styles.tree}
            src="/images/illustration/tree.svg"
            alt=""
            width="97"
            height="165"
          />
          <Image
            className={styles.man}
            src="/images/illustration/man.svg"
            alt=""
            width="139"
            height="395"
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
