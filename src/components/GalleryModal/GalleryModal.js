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
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  };

  render() {
    const {
      closeModal,
      hasNext,
      hasPrev,
      findNext,
      findPrev,
      src,
    } = this.props;

    if (!src) {
      console.log('whut');
      console.log(src);
      return null;
    }

    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div isopen={src ? 1 : 0} className="modal">
          <div className="modal-body">
            <a
              href="#"
              className="modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrev && (
              <a
                href="#"
                className="modal-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </a>
            )}
            {hasNext && (
              <a
                href="#"
                className="modal-next"
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </a>
            )}
            <img src={src} />
          </div>
        </div>
      </div>
    );
  }
}

GalleryModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  findPrev: PropTypes.func.isRequired,
  findNext: PropTypes.func.isRequired,
  hasPrev: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
  src: PropTypes.string,
};