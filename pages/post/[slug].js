import React from "react";
import { getPosts, getPostDetails } from "../../services";

import { PostWidget, Content } from "../../components";

import styles from "../../styles/Content.module.css";

const PostDetails = ( {post} ) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.post}>
            <Content post={post}/>
          </div>
          <div className={styles.widget}>
            <PostWidget slug={post.slug} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  console.log(data);
  return {
    props: {
      post: data ,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}
