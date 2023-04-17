import useSWR from "swr";
import { Footer } from "./footer";
import styles from "./../styles/Layout.module.css";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  //   const { data, error } = useSWR('/api/navigation', fetcher)

  //   if (error) return <div>Failed to load</div>
  //   if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
