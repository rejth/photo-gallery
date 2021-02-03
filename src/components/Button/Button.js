import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default class Button extends Component {
  render() {
    const { text, onAction } = this.props;
    return (
      <button className="gallery-button" onClick={onAction}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  onAction: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: 'Click me',
};
