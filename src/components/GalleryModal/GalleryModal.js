import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GalleryModal.scss';

export default class GalleryModal extends Component {
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnMount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrevPhoto) {
      this.props.findPrevPhoto(e);
    }
    if (e.keyCode === 39 && this.props.hasNextPhoto) {
      this.props.findNextPhoto(e);
    }
  };

  handleClickOutsideModal = e => {
    if (e.target.matches('.modal-overlay')) {
      this.props.closeModal();
    }
  };

  render() {
    const {
      closeModal,
      findPrevPhoto,
      findNextPhoto,
      hasPrevPhoto,
      hasNextPhoto,
      src,
    } = this.props;

    return (
      <div className="modal-overlay" onClick={this.handleClickOutsideModal}>
        <div className="modal-window">
          <div className="modal-body">
            <img src={src} alt="Image: Fake photo" />
            <a
              href="#"
              className="modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrevPhoto && (
              <a
                href="#"
                className="modal-prev"
                onClick={findPrevPhoto}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </a>
            )}
            {hasNextPhoto && (
              <a
                href="#"
                className="modal-next"
                onClick={findNextPhoto}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

GalleryModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  findPrevPhoto: PropTypes.func.isRequired,
  findNextPhoto: PropTypes.func.isRequired,
  hasPrevPhoto: PropTypes.bool.isRequired,
  hasNextPhoto: PropTypes.bool.isRequired,
  src: PropTypes.string,
};

GalleryModal.defaultProps = {
  src: 'https://via.placeholder.com/600/92c952',
};
