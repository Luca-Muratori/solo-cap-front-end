import React, { useEffect, useState } from "react";
import CardBlogPost from "./CardBlogPost.jsx";
import LoadMoreButton from "./LoadMoreButton.jsx";
import PostComponent from "./PostComponent.jsx";

const MainComponent = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const response = await fetch("https://solo-capstone.herokuapp.com/photo", {
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      let data = await response.json();
      setPhotos(data);
    }
  };

  return (
    <div className="pb-5">
      {photos &&
        photos.map((photo) => <PostComponent photo={photo} />).reverse()}

      <LoadMoreButton />
    </div>
  );
};

export default MainComponent;
