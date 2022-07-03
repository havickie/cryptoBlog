import React from "react";
import styles from "../styles/Content.module.css";
import Link from "next/link";
import moment from "moment";

const Content = ({ post,policy }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }


      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      
      if (obj.link) {
        modifiedText = <a key={index}>{href}</a>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={'50'}
            width={'100'}
            src={obj.src}
          />
        );
        case "link":
          return (
            <a key={index} className="mb-8">
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </a>
          );
      default:
        return modifiedText;
    }
  };

  return (
    <div>
      <div>
        <h1>{post.title}</h1>
      </div>
      <div className={styles.date}>
        <span> {moment(post.createdAt).format("MMM DD, YYYY")} </span>
      </div>

      <div>
        <img
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

