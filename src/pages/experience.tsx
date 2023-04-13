import Layout from "@/components/layout";
import React from "react";
import experienceData from "./../../public/experience.json";
import { Experience } from "@/components/Experience";

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
    </Layout>
  );
};

export default ExperienceComp;
