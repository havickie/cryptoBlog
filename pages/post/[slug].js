import React from "react";

import { getPosts, getPostDetails } from "../../services";
import { PostWidget, Content } from "../../components";
import styles from "../../styles/Content.module.css";
import { Container, Row, Col } from "react-bootstrap";

const PostDetails = ({ post }) => {
  return (
    <Container>
      <Row>
        <Col lg={8} md={8}>
          <Content post={post} />
        </Col>
        <Col className={styles.widget} lg={4} md={4}>
          <PostWidget slug={post.slug}/>
        </Col>
      </Row>
    </Container>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
