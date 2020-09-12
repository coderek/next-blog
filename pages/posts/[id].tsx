import React from "react";
import postsDao from "dao/posts";
import { slugify } from "transliteration";
import styles from "styles/Post.module.css";

export async function getStaticPaths() {
  const { rows: posts } = await postsDao.getPosts();
  const paths = posts.map((p) => {
    return {
      params: {
        id: slugify(p.title),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("params", params);
  const { rows: posts } = await postsDao.getPosts();
  const post = posts.find((p) => slugify(p.title) == params.id);
  return {
    props: {
      postData: {
        id: post.id,
        title: post.title,
        body_rendered: post.body_rendered.replace(
          /\/static\/images\//g,
          "https://derekzeng.me/static/images/"
        ),
      },
    },
  };
}

export default function Post(props) {
  const { postData } = props;
  return (
    <div className={styles.post}>
      <div className={styles.postTitle}>{postData.title}</div>
      <div className={styles.postContent}>
        <div dangerouslySetInnerHTML={{ __html: postData.body_rendered }} />
      </div>
    </div>
  );
}
