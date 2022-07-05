import Link from "next/link";
import React from "react";

import moment from "moment";
import styles from "../styles/BlogCard.module.scss";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className={`container ${styles.card} `}>
      <div className={styles.imgContainer}>
        <Link href={`/post/${post.slug}`}>
          <Image layout="fill"
            src={post.featuredImage.url} alt={post.title} />
        </Link>
      </div>
      <h1 >
        <Link className={`${styles.texts}`} href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div>
        <span>
          <Link className={styles.excerpt} href={`/post/${post.slug}`}>
            {post.excerpt}
          </Link>
        </span>
      </div>
      <div>
        <span className={styles.date}>
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
