import { Education } from "@/components/Education";
import Layout from "@/components/layout";
import React from "react";
import educationData from "./../../public/education.json";

type EducationDataType = {
  id: number;
  companyName: string;
  duration: string;
  profession: string;
  certificate: string;
};

const EducationComp = () => {
  return (
    <Layout>
      <h2 className="pageTitle">Education</h2>

      {educationData &&
        educationData.map((data: EducationDataType) => (
          <Education key={data.id} data={data} />
        ))}
    </Layout>
  );
};

export default EducationComp;
