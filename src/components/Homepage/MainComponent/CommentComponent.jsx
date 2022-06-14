import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import SingleCommentComponent from "./SingleCommentComponent";

const CommentComponent = () => {
  return (
    <div>
      <SingleCommentComponent />
      <SingleCommentComponent />
      <SingleCommentComponent />
    </div>
  );
};

export default CommentComponent;
