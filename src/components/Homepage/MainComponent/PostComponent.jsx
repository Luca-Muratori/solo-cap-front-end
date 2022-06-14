import { FaHeart } from "react-icons/fa";
import CommentComponent from "./CommentComponent";
const PostComponent = () => {
  return (
    <div className="postComponent">
      <div className="d-flex">
        <div>
          <img
            className="userImg"
            alt="user-img"
            src="https://picsum.photos/200/300"
          />
        </div>
        <div>
          <b>User name</b>
        </div>
      </div>
      <div id="ImgContainer">
        <img
          className="postImg"
          alt="post"
          src="https://picsum.photos/100/100"
        />
      </div>
      <div id="heartIcon">
        <FaHeart />
      </div>
      <div>
        lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit
        amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur
        adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem
        ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet,
        consectetur adipiscing lorem ipsum dolor sit amet, consectetur
        adipiscing lorem ipsum dolor sit amet, consectetur adipiscing
      </div>
      <hr />
      <CommentComponent />
      {/* add a comment */}
    </div>
  );
};

export default PostComponent;
