import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./../styles/Experience.module.css";

export const Experience = ({ data }: any) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className={styles.experienceWrapper} data-aos="fade-up">
        <div>
          <h3>{data.companyName}</h3>
          <p>{data.duration}</p>
        </div>
        <div>
          <h3>{data.position}</h3>
          <p>
            I worked on the{" "}
            <a
              href={data.websiteLink}
              title="Check out the site"
              target="_blank"
            >
              <b>{data.websiteName}</b>
            </a>{" "}
            project and to use my skills: {data.skills}
          </p>
        </div>
      </div>
      <hr className={styles.line} data-aos="fade-up" />
    </>
  );
};
