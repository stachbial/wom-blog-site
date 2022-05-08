import React from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import PageContainer from "../components/layout/PageContainer";
import Header from "../components/layout/utilities/Header";
import ProjectCard from "../components/ProjectCard";

import styles from "../pageStyles/ProjectsListPage.module.css";

export default function ProjectsListPage({ projectFiles }) {
  return (
    <PageContainer>
      <Header>PROJEKTY</Header>
      <ul className={styles.projectsList}>
        {projectFiles.map((project) => {
          return (
            <ProjectCard project={project} key={project.frontmatter.key} />
          );
        })}
      </ul>
    </PageContainer>
  );
}

//preparing the project objects from the files
export async function getStaticProps() {
  //creating an array of the files in a given dir
  const files = fs.readdirSync(path.join("source-texts/projects"));

  // console.log(files)
  //getting slug and frontmatter from every file
  const projectFiles = files.map((filename) => {
    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("source-texts/projects", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    //get the slug of a file (for paths)
    const slug = filename.replace(".md", "");

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: { projectFiles },
  };
}
