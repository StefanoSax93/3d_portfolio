import React, { useState } from "react";

function Modal({ message, img }) {
  const [show, setShow] = useState(true);

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal-body">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="modal-content">
              <img src={img} alt="" width="150px" />
              <p className="text-center mb-[20px]">{message}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
