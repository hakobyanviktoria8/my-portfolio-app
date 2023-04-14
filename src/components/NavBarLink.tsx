import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./../styles/Navbar.module.css";

export const NavBarLink = ({ data }: any) => {
  const router = useRouter();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Link
      href={data.href}
      className={router.pathname === data.href ? styles.active : ""}
    >
      {width < 770 ? (
        <Image
          src={`/navLinkIcon${data.href}.png`}
          alt={data.name}
          width={45}
          height={40}
          title={data.name}
        />
      ) : (
        <>
          <Image
            src={`/navLinkIcon${data.href}.png`}
            alt={data.name}
            width={35}
            height={35}
            title={data.name}
          />
          <span>{data.name}</span>
        </>
      )}
    </Link>
  );
};
