import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PostComponent = ({ photo }) => {
  const [me, setMe] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    getMe();
  }, []);

  const getMe = async () => {
    const response = await fetch(process.env.REACT_APP_URL + "/user/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (response.ok) {
      let data = await response.json();
      setMe(data);
    } else {
      console.log("something went wrong");
    }
  };
  return (
    <div className="postComponent">
      <div className="d-flex">
        <div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={
              me._id === photo.userId[0]._id
                ? `/myProfile`
                : `/user/${photo.userId[0]._id}`
            }
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
