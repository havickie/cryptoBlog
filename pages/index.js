import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PostCard, PostWidget } from "../components";

import { getPosts } from "../services/index.js";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn at Naira4Dollar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className={styles.hero}>
BLOG
        </div>
        <div className={styles.main}>
          { posts.map((post, index) => (
            <PostCard
              post={post.node}
              key={index}
            />
          ))}
        </div>
        <div>
          <PostWidget />
        </div>
      </>
    </div>
  );
}
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
