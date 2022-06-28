import Link from "next/link";
import styles from "../styles/BlogCard.module.css";
import React from "react";
import { Card, Button } from "react-bootstrap";

const PostCard = ({ post }) => {
  return (
    // <div className={styles.card}>
    //   <div className={styles.imgContainer}>
    //     <img layout="cover" src={post.featuredImage.url} alt={post.title} />
    //   </div>
    // </div>
    <div className="container">
 <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src={post.featuredImage.url} />
  <Card.Body>
        <Card.Title>{ post.title }</Card.Title>
    <Card.Text>
          { post.excerpt }
    </Card.Text>
    <Button variant="primary">Read More</Button>
  </Card.Body>
</Card>
    </div>
   
  );
};

export default PostCard;
