import React from "react";
import CardBlogPost from "./CardBlogPost.jsx";
import LoadMoreButton from "./LoadMoreButton.jsx";
import PostComponent from "./PostComponent.jsx";

const MainComponent = () => {
  return (
    <div className="pb-5">
      <CardBlogPost />
      <PostComponent />
      <LoadMoreButton />
    </div>
  );
};

export default MainComponent;
