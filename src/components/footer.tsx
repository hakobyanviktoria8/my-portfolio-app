import React from "react";
import styles from "./../styles/Footer.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <p>Last update 02.03.2023</p>
      <a href="https://github.com/hakobyanviktoria8/my-portfolio-app">
        My portfolio source{" "}
        <Image
          src="/images/githubRepo.png"
          alt="linkedin"
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};
