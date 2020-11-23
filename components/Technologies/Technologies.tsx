import TechnologyItem from "./TechnologyItem";

import styles from "./Technologies.module.scss";

const Technologies = () => {
  const fileNames = [
    "html-5",
    "css-3",
    "sass",
    "bootstrap",
    "git",
    "javascript",
    "typescript",
    "reactjs",
    "nextjs",
    "figma",
    "xd",
  ];

  const listOfTechnologyItems = fileNames.map((technology, index) => (
    <li className={styles.technologies__list__item} key={index}>
      <TechnologyItem technology={technology} />
    </li>
  ));

  return (
    <div className={styles.technologies}>
      <h1>Technologies that I’m comfortable with</h1>
      <ul className={styles.technologies__list}>{listOfTechnologyItems}</ul>
    </div>
  );
};

export default Technologies;
