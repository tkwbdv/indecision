import React from "react";
import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     backgroundColor: "#333745",
//     border: "none",
//     color: "white",
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     transform: 'translate(-50%, -50%)',
//   },
//   overlay: {
//     backgroundColor: "rgba(0,0,0, 0.75)",
//   },
// };

const OptionModal = ({ onCloseModal, selectedOption, showModal }) => (
  <Modal
    isOpen={showModal}
    onRequestClose={onCloseModal} // onRequestClose makes the modal close on ECS or overlay click, even if nothing is defined in the eventfunction
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    // style={customStyles}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{selectedOption}</p>
    <button className="button" onClick={onCloseModal}>Okay</button>
  </Modal>
);

export default OptionModal;