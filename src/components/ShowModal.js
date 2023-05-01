import React, { useEffect,children } from 'react';
import ReactDOM from "react-dom";



const MyModal = ({ closeModal, children, handelCloseButton, }) => {
   
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
          document.body.style.overflowY = "scroll";
        };
      }, []);

    
    return ReactDOM.createPortal (
        
    <>
  
    <div className="modal-wrapper " onClick={closeModal } ></div>
    <div className="modal-container">
        {children}
        {handelCloseButton}   
    </div>
    </>,
    document.querySelector(".myPortalModalDiv")
);
};

export default MyModal;