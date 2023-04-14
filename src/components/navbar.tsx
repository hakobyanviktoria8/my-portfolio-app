import Link from "next/link";
import React from "react";
import styles from "./../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { NavBarLink } from "./NavBarLink";
import navBarLinkData from "../../public/json/navLink.json";

type NavBarLinkDataType = {
  id: number;
  href: string;
  name: string;
};

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link
        href="/"
        className={
          router.pathname === "/"
            ? `${styles.active} ${styles.logo}`
            : styles.logo
        }
      >
        VHV
      </Link>

      <div className={styles.mainNavBar}>
        {navBarLinkData &&
          navBarLinkData.map((data: NavBarLinkDataType) => (
            <NavBarLink key={data.id} data={data} />
          ))}
      </div>
    </div>
  );
};
