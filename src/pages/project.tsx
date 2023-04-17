import React from "react";
import styles from "./../styles/Projects.module.css";
import Layout from "@/components/layout";
import { Project } from "@/components/Project";
import projectsData from "../../public/json/projects.json";
import liveProjectsData from "../../public/json/liveProjects.json";
import { LiveProject } from "@/components/LiveProject";

type LiveProjectsDataType = {
  id: number;
  projectName: string;
  skills: string;
  link: string;
};

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
        <h2 className="pageTitle">My live projects</h2>
        <div className={styles.liveProjects}>
          <p>
            During my 2+ working years, I worked on many interesting projects. I
            suggest getting acquainted with some of them:
          </p>
          <div className={styles.linksWrapper}>
            {liveProjectsData &&
              liveProjectsData.map((data: LiveProjectsDataType) => (
                <LiveProject key={data.id} data={data} />
              ))}
          </div>
        </div>

        <h2 className="pageTitle">my academic projects</h2>
        {projectsData &&
          projectsData.map((data: ProjectsDataType) => (
            <Project key={data.id} data={data} />
          ))}
      </div>
    </Layout>
  );
};

export default ProjectsComp;
