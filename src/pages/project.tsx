import React from "react";
import styles from "./../styles/Projects.module.css";
import Layout from "@/components/layout";
import { Project } from "@/components/Project";
import projectsData from "../../public/json/projects.json";

type ProjectsDataType = {
  id: number;
  projectName: string;
  skills: string;
  link: string;
  name: string;
  status: string;
  discription: string;
  imgSrc: string;
  moreDetails: string;
};

const ProjectsComp = () => {
  return (
    <Layout>
      <div className={styles.projects}>
        <h2 className="pageTitle">My projects</h2>

        {projectsData &&
          projectsData.map((data: ProjectsDataType) => (
            <Project key={data.id} data={data} />
          ))}
      </div>
    </Layout>
  );
};

export default ProjectsComp;
