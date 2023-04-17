import Layout from "@/components/layout";
import React from "react";
import experienceData from "./../../public/json/experience.json";
import { Experience } from "@/components/Experience";
import styles from "./../styles/Experience.module.css";

export type ExperienceDataType = {
  id: number;
  companyName: string;
  duration: string;
  position: string;
  websiteLink: string;
  websiteName: string;
  skills: string;
};

const ExperienceComp = () => {
  return (
    <Layout>
      <h2 className="pageTitle">WORK EXPERIENCE</h2>

      {experienceData &&
        experienceData.map((data: ExperienceDataType) => (
          <Experience key={data.id} data={data} />
        ))}

      <br />
      <h2 className="pageTitle">OTHER EXPERIENCE</h2>
      <div className={styles.otherExperience}>
        <h3>
          Scientific Technological Center of Organic and Pharmaceutical
          Chemistry
        </h3>
        <p>
          Worked as a junior scientist and I made many research 01.06.2013 -
          01.05.2015
        </p>
      </div>
      <div className={styles.otherExperience}>
        <h3>&quot;Al & Al`&quot; LLC</h3>
        <p>Worked as an Accountant 08.01.2013 - 31.05.2013</p>
      </div>
      <div className={styles.otherExperience}>
        <h3>Arkofarm, Vip Concern Drug Center</h3>
        <p>Worked as a marketing manager 01.06.2012 - 20.12.2012</p>
      </div>
    </Layout>
  );
};

export default ExperienceComp;
