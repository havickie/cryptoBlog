import Link from 'next/link'
import React, {useState,useEffect} from "react";
import { getRecentPosts } from "../services";
import styles from '../styles/Postwidget.module.css'

const PostWidject = ({ categories, slug }) => { 
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(() => {
    if (slug) {
        getSimilarPosts(categories,slug).then((result)=> setRelatedPosts)
      } else getRecentPosts(categories,slug).then((result)=> setRelatedPosts)
  }, [ slug ])

  return <div className={styles.relatedpostbox}>
    <h3 className={styles.h3}>
      {
        slug ? 'Related Posts' :  'Related Posts'
      }  
      {/* <Link className="text-decoration-none" href={`/post/${post.slug}`}>
{post.title}
        </Link> */}
    </h3>


    {relatedPosts.map((post) => {
      <div key={post.title} className={styles.imgbox}>
        <div>
          <img src={post.featuredImage.url} alt={post.title}
            width='3rem'
            height='3rem'
          />
        </div>
        <div>
        <p className={styles.h1}>
        <Link className="text-decoration-none" href={`/post/${post.slug}`}>
{post.title}
        </Link>
      </p>
        </div>
      
      </div>
    
    })}
  </div>;
};

export default PostWidject;
 