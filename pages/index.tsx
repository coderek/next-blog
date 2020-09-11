import Head from "next/head";
import dao from "dao/posts";
import styles from "styles/Home.module.css";
import Link from "next/link";
import { slugify } from "transliteration";

type Post = {
  title: string;
  id: number;
};

export default function Home(props: { posts: Post[] }) {
  return (
    <div>
      <Head>
        <title>Derek Zeng's Blog</title>
      </Head>
      <div className={styles.container}>
        {props.posts.map((p) => {
          return <Link href={"/posts/" + slugify(p.title)}>{p.title}</Link>;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { rows } = await dao.getPosts();
  return {
    props: {
      posts: rows.map((r) => {
        return {
          title: r.title,
          id: r.id,
        };
      }),
    },
  };
}
