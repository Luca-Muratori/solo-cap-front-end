import React from "react";

const UserAddComment = () => {
  return (
    <div>
      <div className="d-flex py-3">
        <div>
          <img
            className="commentUserImg"
            alt="user"
            src="https://picsum.photos/200/300"
          />
        </div>

        {/* fix the placeholder and the fact that the text doesn't go down after reach the right part of the box*/}
        <input
          type="textarea"
          placeholder="write a comment and press enter..."
          className="UserAddCommentInput"
        />
      </div>
    </div>
  );
};

export default UserAddComment;
