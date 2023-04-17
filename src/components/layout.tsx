import { Footer } from "./footer";
import styles from "./../styles/Layout.module.css";

export default function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
