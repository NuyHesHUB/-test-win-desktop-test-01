import React, { Component } from "react";
import { render } from "react-dom";
// import Proptypes from 'prop-types';
import Box from "./Box";
import Modal from "./Modal";
import "./styles.css";

const ESCAPE_KEY = 27;
class App extends Component {
  state = {
    currentModal: ""
  };
  
  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }

  toggleModal = modalId => {
    if (modalId) {
      this.setState(({ currentModal }) => {
        return { currentModal: modalId };
      });
    } else {
      this.setState(({ currentModal }) => {
        return { currentModal: "" };
      });
    }
  };

  handleKeyDown = (event) => {
      switch( event.keyCode ) {
          case ESCAPE_KEY:
              this.toggleModal('');
              break;
          default: 
              break;
      }
  }

  render() {
    const { currentModal } = this.state;
    return (
      <div className="body-wrapper">
        <div
          className={`container ${currentModal.length > 0 ? "modal-open" : ""}`}
        >
          <Box
            title="this is title"
            cover="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
            toggleModal={this.toggleModal}
            modalId="modalOne"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            nostrum aliquid quibusdam hic ut totam dolorum distinctio est quam
            illo ipsa reiciendis provident placeat, nemo sunt? Laboriosam
            excepturi aspernatur quo!
          </Box>
          <Box
            title="this is title"
            cover="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
            toggleModal={this.toggleModal}
            modalId="modalTwo"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            nostrum aliquid quibusdam hic ut totam dolorum distinctio est quam
            illo ipsa reiciendis provident placeat, nemo sunt? Laboriosam
            excepturi aspernatur quo!
          </Box>
          <Box
            title="this is title"
            cover="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg"
            toggleModal={this.toggleModal}
            modalId="modalThree"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            nostrum aliquid quibusdam hic ut totam dolorum distinctio est quam
            illo ipsa reiciendis provident placeat, nemo sunt? Laboriosam
            excepturi aspernatur quo!
          </Box>
        </div>
        <Modal
          currentModal={currentModal}
          toggleModal={this.toggleModal}
          modalId="modalOne"
          title="Modal One"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dolor iste amet error natus in quos harum eligendi perspiciatis cum,
          qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.
        </Modal>
        <Modal
          currentModal={currentModal}
          toggleModal={this.toggleModal}
          modalId="modalTwo"
          title="Modal Two"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dolor iste amet error natus in quos harum eligendi perspiciatis cum,
          qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.
        </Modal>
        <Modal
          currentModal={currentModal}
          toggleModal={this.toggleModal}
          modalId="modalThree"
          title="Modal Three"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dolor iste amet error natus in quos harum eligendi perspiciatis cum,
          qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.
        </Modal>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
