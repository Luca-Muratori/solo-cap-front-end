import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";

const SinglePhotoComponent = ({ cloudinaryLink, photo, user }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <div className="mt-2 SinglePhotoComponent">
      <img
        key={photo._id}
        alt="uploaded"
        src={cloudinaryLink}
        onClick={handleShow}
      />
      <div style={{ height: "90vh" }}>
        <Modal
          style={{ marginTop: "50px!important" }}
          show={show}
          onHide={handleClose}
        >
          <Modal.Header
            style={{ marginTop: "50px!important" }}
            closeButton
          ></Modal.Header>
          <Modal.Body>
            <img alt="singlePhoto" className="imgModal" src={cloudinaryLink} />
          </Modal.Body>
        </Modal>
      </div>

      <MdDeleteForever onClick={handleDelete} className="deleteImgIcon" />
    </div>
  );
};

export default SinglePhotoComponent;
