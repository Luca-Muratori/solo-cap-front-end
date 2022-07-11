import { FaHeart } from "react-icons/fa";
import CommentComponent from "./CommentComponent";
import { Link } from "react-router-dom";

const PostComponent = ({ photo }) => {
  return (
    <div className="postComponent">
      <div className="d-flex">
        <div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/user/${photo.userId[0]._id}`}
          >
            <img
              className="userImg"
              alt="user-img"
              src={photo.userId[0].avatar}
            />

            <b style={{ fontSize: "20px", marginTop: "40px" }}>
              {photo.userId[0].name} {photo.userId[0].surname}
            </b>
          </Link>
        </div>
      </div>
      <div id="ImgContainer">
        <img className="postImg" alt="post" src={photo.cloudinaryLink} />
      </div>
      {/* <div id="heartIcon">
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
      <CommentComponent /> */}
      {/* add a comment */}
    </div>
  );
};

export default PostComponent;
