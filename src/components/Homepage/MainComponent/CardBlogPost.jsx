import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MainComponent.css";

const CardBlogPost = () => {
  return (
    <>
      <Card>
        <Card.Header>BlogPost Title</Card.Header>
        <Card.Body
          style={{
            backgroundImage: `url("https://picsum.photos/200/300")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
          //if it possible to have a dynamic bg-img, using the img that the user upload during the creation of the post?
        >
          <div className="blogPostBody">
            <Card.Text>Brief description of the blog post</Card.Text>
            <Button variant="primary">Read more</Button>
          </div>

          {/* clicking read more will return the user to the blog post page */}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardBlogPost;
