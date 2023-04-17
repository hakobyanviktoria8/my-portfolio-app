import { Footer } from "./footer";
import styles from "./../styles/Layout.module.css";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
