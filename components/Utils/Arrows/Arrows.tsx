import React from "react";

import styles from "./Arrows.module.scss";

export const ArrowLeft = () => {
  return (
    <img
      className={styles["arrow-left"]}
      src="/images/icons/arrow-left.svg"
      alt="previous"
      height="69"
      width="37"
    />
  );
};

export const ArrowRight = () => {
  return (
    <img
      className={styles["arrow-right"]}
      src="/images/icons/arrow-right.svg"
      alt="next"
      height="69"
      width="37"
    />
  );
};
