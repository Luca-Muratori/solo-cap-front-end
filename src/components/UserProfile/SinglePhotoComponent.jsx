import React, { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";

const SinglePhotoComponent = ({ cloudinaryLink, photo, user }) => {
  const handleDelete = async () => {
    const response = await fetch(
      process.env.REACT_APP_URL + "/user/" + user._id + "/photos/" + photo._id,
      {
        method: "DELETE",
        body: JSON.stringify(photo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("your image has been delete");
    }
  };

  return (
    <div className="mt-2">
      <img
        key={photo._id}
        className="SinglePhotoComponent"
        alt="uploaded"
        src={cloudinaryLink}
      />
      <MdDeleteForever onClick={handleDelete} className="deleteImgIcon" />
    </div>
  );
};

export default SinglePhotoComponent;
