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
    if (e.keyCode === 27) this.props.closeModal(e);
  };

  handleClickOutsideModal = e => {
    if (e.target.matches('.modal-overlay')) {
      this.props.closeModal(e);
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
              onClick={e => closeModal(e)}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrevPhoto && (
              <a
                href="#"
                className="modal-prev"
                onClick={findPrevPhoto}
              >
                &lsaquo;
              </a>
            )}
            {hasNextPhoto && (
              <a
                href="#"
                className="modal-next"
                onClick={findNextPhoto}
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
  loading: PropTypes.bool,
  src: PropTypes.string,
};

GalleryModal.defaultProps = {
  src: 'https://via.placeholder.com/600/92c952',
};
