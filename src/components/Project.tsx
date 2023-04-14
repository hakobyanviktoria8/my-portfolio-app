import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import styles from "./../styles/Projects.module.css";

export const Project = ({ data }: any) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div data-aos="fade-right">
        <h3>{data.projectName}</h3>
        <p>
          <b>Skills: </b> {data.skills}
        </p>
        <p>
          <b>Link:</b>{" "}
          <a href={data.link} target="_blank">
            {data.name}
          </a>
        </p>
        <p>
          <b>Status: </b> {data.status}
        </p>
        <p>
          <b>Discription:</b> {data.discription}
        </p>
      </div>
      <div data-aos="fade-left" className={styles.imgCard}>
        <div>
          <p>See more details</p>
        </div>

        <Image
          src={data.imgSrc}
          alt="website"
          layout="fill"
          objectFit="cover"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};
