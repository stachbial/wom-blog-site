import React from "react";

import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

import PageContainer from "../components/layout/PageContainer";
import Card from "../components/layout/utilities/Card";

import styles from "../styles/Home.module.css";

export default function Home({ frontmatter, content }) {
  console.log("render");
  return (
    <PageContainer>
      <header>
        <h1>{frontmatter.title}</h1>
      </header>
      <Card>
        <img
          src={frontmatter.cover_image}
          style={{ width: "100%" }}
          alt="Zdjecie grupowe czlonkow stowarzyszenia"
        />
        <article
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></article>
      </Card>
    </PageContainer>
  );
}

export async function getStaticProps() {
  //open the raw article file
  const articleWithMeta = fs.readFileSync("source-texts/onas.md", "utf-8");
  //format to a gray-matter obj
  const { data: frontmatter, content } = matter(articleWithMeta);
  // console.log(matter(articleWithMeta));

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
