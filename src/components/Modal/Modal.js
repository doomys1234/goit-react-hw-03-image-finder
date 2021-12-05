import React from "react";
import s from "./Modal.module.scss";
import PropTypes from "prop-types";
class Modal extends React.Component {
  static propTypes = {
    modalImage: PropTypes.string,
    toggleModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  onBackdropClose = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    this.props.toggleModal();
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.onBackdropClose}>
        <div className={s.modal}>
          <img src={this.props.modalImage} alt="#" />
        </div>
      </div>
    );
  }
}

export default Modal;
