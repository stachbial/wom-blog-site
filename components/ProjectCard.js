import React from "react";

import Link from "next/link";
import Card from "./layout/utilities/Card";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  //   console.log(project.frontmatter.logo);
  return (
    <Link href={`/projekty/${project.slug}`}>
      <li>
        <Card className={styles.card}>
          <img
            src={project.frontmatter.coverImage}
            className={styles.coverImage}
            alt={`okładka projektu: ${project.frontmatter.title}`}
          />
          <aside className={styles.projectData}>
            <img
              src={project.frontmatter.logo}
              className={styles.logo}
              alt={`logo projektu: ${project.frontmatter.title}`}
            />
            <section className={styles.description}>
              <p>{project.frontmatter.excerpt}</p>
            </section>
          </aside>
        </Card>
      </li>
    </Link>
  );
};

export default ProjectCard;
