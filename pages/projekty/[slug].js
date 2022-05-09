import React from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import PageContainer from "../../components/layout/PageContainer";
import Header from "../../components/layout/utilities/Header";
import Card from "../../components/layout/utilities/Card";
import DecorationHorizontalWave from "../../components/svgComponents/decoration/articles/DecorationHorizontalWave";
import DecorationVerticalWave from "../../components/svgComponents/decoration/articles/DecorationVerticalWave";
import ImageSlider from "../../components/ImageSlider";

import styles from "../../pageStyles/projekty/ProjectPage.module.css";

export default function ProjectPage({ frontmatter, content, galleryData }) {
  return (
    <PageContainer>
      <Header className={styles.header}>{frontmatter.title}</Header>
      <Card className={styles.card}>
        <aside className={styles.textContainer}>
          <article
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></article>
        </aside>
        <div className={styles.waveContainer}>
          <DecorationHorizontalWave
            className={styles.horizontalWave}
            color="white"
          />
          <DecorationVerticalWave
            className={styles.verticalWave}
            color="white"
          />
        </div>
        <ImageSlider galleryData={galleryData} dimensions={styles.slider} />
      </Card>
    </PageContainer>
  );
}

export async function getStaticPaths() {
  //creating paths based on slugs read from files in the dir
  const files = fs.readdirSync(path.join("source-texts/projects"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const markdownWithMeta = fs.readFileSync(
    path.join("source-texts/projects", slug + ".md")
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  //scanning the path from frontmatter for gallery photos urls
  const galleryFiles = fs.readdirSync(path.join(`${frontmatter.galleryPath}`));
  //concatenating galery path with file names
  const galleryData = galleryFiles.map((fileName) => {
    const temp = `${frontmatter.galleryPath}${fileName}`;
    return temp.replace("public", "");
  });

  return {
    props: { frontmatter, content, slug, galleryData },
  };
}
