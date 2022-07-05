import React from "react";
import styles from "../styles/Content.module.css";
import moment from "moment";
import Image from "next/image";

const Content = ({ post}) => {
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
      </div>
      <div className={styles.date}>
        <span> {moment(post.createdAt).format("MMM DD, YYYY")} </span>
      </div>

      <div>
        <Image width={'2000px'}
          height='1500px'
          
          src={post.featuredImage.url}
          alt={post.title}
          className={styles.contentImg}
        />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
       {/* <div className={styles.mainContent}>
        {console.log(post.content.raw)}

        {post.content.raw.children.map((typeObj, index) => {
             const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div> */}
    </div>
  );
};



export default Content;

