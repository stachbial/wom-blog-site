import React from "react";

import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

import PageContainer from "../components/layout/PageContainer";
import Card from "../components/layout/utilities/Card";
import Header from "../components/layout/utilities/Header";
import DecorationHorizontalWave from "../components/svgComponents/decoration/articles/DecorationHorizontalWave";

import styles from "../pageStyles/Home.module.css";

export default function Home({ frontmatter, content }) {
  return (
    <PageContainer>
      <Header>{frontmatter.title}</Header>
      <Card className={styles.card}>
        <div className={styles.imgContainer}>
          <img
            src={frontmatter.coverImage}
            className={styles.img}
            alt="Zdjecie grupowe czlonkow stowarzyszenia"
          />
          <DecorationHorizontalWave className={styles.wave} color="white" />
        </div>
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
