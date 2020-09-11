import React from "react";
import postsDao from "dao/posts";
import { slugify } from "transliteration";

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
      },
    },
  };
}

export default function Post(props) {
  console.log(props);
  const { postData } = props;
  return (
    <div>
      {postData.title}
      <br />
      {postData.id}
    </div>
  );
}
