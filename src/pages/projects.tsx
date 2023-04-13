import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./../styles/Projects.module.css";
import Layout from "@/components/layout";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      <div className={styles.projects}>
        <h2 className="pageTitle">My projects</h2>
        <div>
          <div data-aos="fade-right">1</div>
          <div data-aos="fade-left">1</div>
        </div>
        <div>
          <div data-aos="fade-right">1</div>
          <div data-aos="fade-left">1</div>
        </div>
        <div>
          <div data-aos="fade-right">1</div>
          <div data-aos="fade-left">1</div>
        </div>
        <div>
          <div data-aos="fade-right">1</div>
          <div data-aos="fade-left">1</div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
