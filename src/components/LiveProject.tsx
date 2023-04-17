import Image from "next/image";
import React from "react";

export const LiveProject = ({ data }: any) => {
  return (
    <a href={data.link}>
      <Image
        src={data.imgSrc}
        alt="website"
        layout="fill"
        objectFit="cover"
        width={0}
        height={0}
      />
      <h4>{data.projectName}</h4>

      {data.skills}
    </a>
  );
};
