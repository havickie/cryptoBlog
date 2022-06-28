import Link from "next/link";
import styles from "../styles/BlogCard.module.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    // <div className={styles.card}>
    //   <div className={styles.imgContainer}>
    //     <img layout="cover" src={post.featuredImage.url} alt={post.title} />
    //   </div>
    // </div>
   
    <div className={`container text-decoration-none ${styles.card} `}>
        
      <div className={styles.imgContainer}>
      <Link className="a" href={`/post/${post.slug}`}>
<img src={post.featuredImage.url} alt={post.title} />
        </Link>
</div>
      <h1 className={styles.h1}>
        <Link className="text-decoration-none" href={`/post/${post.slug}`}>
{post.title}
        </Link>
      </h1>
      <div className={styles.excerpt}>
        <p>
          <Link href={`/post/${post.slug}`}>
            {post.excerpt}
          </Link>
</p>
      </div>
      <div >
         <span className={styles.date}>
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </span>
 </div>
     
    </div>
   
  );
};

export default PostCard;
