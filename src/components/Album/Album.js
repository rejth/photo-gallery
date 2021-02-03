import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Album.scss';

export default class Album extends Component {
  render() {
    return <Tiles images={this.props.data} onClose={this.props.closeAlbum} />;
  }
}

class Tiles extends Component {
  renderImageContent = arr => arr.map(src => <Tile image={src} key={src} />);
  render() {
    const images = this.renderImageContent(this.props.images);
    return (
      <div className="tiles">
        <Button text={'Back'} onAction={this.props.onClose} />
        {images}
      </div>
    );
  }
}

class Tile extends Component {
  state = {
    open: false,
    mouseOver: false,
  };

  mouseEnter = e => {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      this.setState({
        mouseOver: true,
      });
    }
  };

  mouseLeave = e => {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false,
      });
    }
  };

  clickHandler = e => {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true,
      });
    } else {
      this.setState({
        open: false,
      });
    }
  };

  render() {
    const { image } = this.props;

    let tileStyle = {};

    if (this.state.open) {
      tileStyle = {
        width: '62vw',
        height: '62vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none',
      };
    } else {
      tileStyle = {
        width: '18vw',
        height: '18vw',
      };
    }

    return (
      <div className="tile">
        <img
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onClick={this.clickHandler}
          src={image}
          style={tileStyle}
        />
      </div>
    );
  }
}

Album.propTypes = {
  closeAlbum: PropTypes.func.isRequired,
  data: PropTypes.array,
  images: PropTypes.array,
};

Tiles.propTypes = {
  images: PropTypes.array,
  onClose: PropTypes.func,
};

Tile.propTypes = {
  image: PropTypes.string,
};
