import React from "react";
import styles from "./../styles/Experience.module.css";

export const Experience = ({ data }: any) => {
  return (
    <>
      <div className={styles.experienceWrapper}>
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
      <hr className={styles.line} />
    </>
  );
};
