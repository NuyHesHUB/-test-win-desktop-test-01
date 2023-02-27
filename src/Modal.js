import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  static PropTypes = {
    currentModal: PropTypes.string,
    toggleModal: PropTypes.function,
    modalId: PropTypes.string
  };

  render() {
    const { 
      currentModal, 
      toggleModal, 
      modalId,
      title,
      closeModal,
      children} = this.props;
    
    return (
      <div 
        className={`modal-wrapper ${currentModal === modalId ? "visible" : "hide"} ${modalId}`}
        onClick={toggleModal}>
        <div 
          className={`modal ${currentModal === modalId ? "show" : "hide"}`} 
          role="dialog"
          aria-labelledby="dialog1Title" 
          aria-describedby="dialog1Desc">
          <div className="modal-header">
            <h2 id="dialog1Title" className="title">
              { title }
            </h2>
            <span className="btn-close" onClick={toggleModal}>
              <i class="btn-close__icon" />
            </span>
          </div>
          <div id="dialog1Desc" className="modal-body">
            { children }
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
