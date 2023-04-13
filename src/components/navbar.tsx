import Link from "next/link";
import React from "react";
import styles from "./../styles/Navbar.module.css";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  console.log(1111111111, router.pathname);
  return (
    <div className={styles.container}>
      <Link href="/" className={router.pathname === "/" ? styles.active : ""}>
        VHV
      </Link>
      <div className={styles.mainNavBar}>
        <Link
          href="/projects"
          className={router.pathname == "/projects" ? styles.active : ""}
        >
          Projects
        </Link>
        <Link
          href="/experience"
          className={router.pathname == "/experience" ? styles.active : ""}
        >
          experience
        </Link>
        <Link
          href="/education"
          className={router.pathname == "/education" ? styles.active : ""}
        >
          education
        </Link>
      </div>
    </div>
  );
};
