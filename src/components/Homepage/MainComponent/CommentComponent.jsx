import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import SingleCommentComponent from "./SingleCommentComponent";
import UserAddComment from "./UserAddComment";

const CommentComponent = () => {
  return (
    <div>
      <UserAddComment />
      <SingleCommentComponent />
      <SingleCommentComponent />
      <SingleCommentComponent />
    </div>
  );
};

export default CommentComponent;
