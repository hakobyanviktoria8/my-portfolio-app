import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./../styles/Education.module.css";

export const Education = ({ data }: any) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={styles.educationWrapper} data-aos="fade-up">
        <div>
          <h3>{data.companyName}</h3>
          <p>{data.duration}</p>
        </div>
        <div>
          <h3>{data.profession}</h3>
          <p>{data.certificate}</p>
        </div>
      </div>
      <hr className={styles.line} data-aos="fade-up" />
    </>
  );
};
