import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getSimilarPosts, getRecentPosts } from "../services/index.js";
import styles from "../styles/Postwidget.module.css";

const PostWidget = ({ slug, categories }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts( categories, slug ).then((result) => {
        setRelatedPosts(result);
      });
    } 
  }, [slug]);

  return (
    <div className="container">
      <div className={styles.widget}>
        <h3 className="">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
          <div key={index} className="">
            <div key={index}>
              <img
                className={styles.img}
                src={post.featuredImage.url}
                width="300"
                height="150"
                alt=""
              />
            </div>
            <div className={styles.pb}>
              <Link href={`/post/${post.slug}`} className="" key={index}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
