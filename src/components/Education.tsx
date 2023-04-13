import React from "react";
import styles from "./../styles/Education.module.css";

export const Education = ({ data }: any) => {
  return (
    <>
      <div className={styles.educationWrapper}>
        <div>
          <h3>{data.companyName}</h3>
          <p>{data.duration}</p>
        </div>
        <div>
          <h3>{data.profession}</h3>
          <p>{data.certificate}</p>
        </div>
      </div>
      <hr className={styles.line} />
    </>
  );
};
