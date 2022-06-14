import React from "react";

const SingleCommentComponent = () => {
  return (
    <div className="d-flex py-3">
      <div>
        <img
          className="commentUserImg"
          alt="user"
          src="https://picsum.photos/200/300"
        />
      </div>
      <div className="commentText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum
        cupiditate aliquam, delectus veniam enim autem velit error explicabo ad
        deleniti maiores excepturi nihil odit consequatur saepe impedit ipsum
        expedita hic quos corporis. Nam distinctio necessitatibus quod officia
        dolor debitis molestias, deleniti aut quas expedita quam nemo velit
        voluptatibus magni!{" "}
      </div>
    </div>
  );
};

export default SingleCommentComponent;
