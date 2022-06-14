import React from "react";
import CardBlogPost from "./CardBlogPost.jsx";
import PostComponent from "./PostComponent.jsx";

const MainComponent = () => {
  return (
    <div className="pb-5">
      <CardBlogPost />
      <PostComponent />
    </div>
  );
};

export default MainComponent;
