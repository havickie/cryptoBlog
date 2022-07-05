import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getSimilarPosts, getRecentPosts } from "../services/index.js";
import styles from "../styles/Postwidget.module.css";
import Image from "next/image";

const PostWidget = ({ slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
   if  (slug) {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
   } 
   
  }, [slug]);

  return (
    <div className="container">
      <div className={styles.widget}>
        <h3 className="">{slug ? 'Recent Posts' : ''}</h3>
      {relatedPosts.map((post, index) => (
          <div key={index} className="">
            <div key={index}>
             <Link href={`/post/${post.slug}`}>
          <Image layout="fill" className={styles.img} src={post.featuredImage.url} alt={post.title} />
        </Link>
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
