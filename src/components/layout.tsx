import { Footer } from "./footer";
import styles from "./../styles/Layout.module.css";
import NavbarComp from "./NavbarComp";

export default function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      <NavbarComp />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
