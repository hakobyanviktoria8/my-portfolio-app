import Link from "next/link";
import React from "react";
import styles from "./../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">VHV</Link>
      <div className={styles.mainNavBar}>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">experience</Link>
        <Link href="/education">education</Link>
      </div>
    </div>
  );
};
