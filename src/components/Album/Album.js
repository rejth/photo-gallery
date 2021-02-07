import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Album.scss';

export default class Album extends Component {
  render() {
    const { data, closeAlbum } = this.props;
    return <Tiles images={data} onClose={closeAlbum} />;
  }
}

class Tiles extends Component {
  renderImageContent(arr) {
    if (arr) {
      return arr.map(({ url, id }) => <Tile image={url} key={id} />);
    }
  }
  render() {
    const { images, onClose } = this.props;
    const tiles = this.renderImageContent(images);
    return (
      <React.Fragment>
        <Button text={'Back'} onAction={onClose} />
        <div className="tiles">{tiles}</div>
      </React.Fragment>
    );
  }
}

class Tile extends Component {
  state = {
    isOpen: false,
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
    if (this.state.isOpen === false) {
      this.setState({
        isOpen: true,
      });
    } else {
      this.setState({
        isOpen: false,
      });
    }
  };

  render() {
    const { image } = this.props;

    let tileStyle = {};

    if (this.state.isOpen) {
      tileStyle = {
        position: 'absolute',
        left: '50%',
        width: '42vw',
        height: '42vw',
        margin: '0',
        marginLeft: '-25vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none',
      };
    } else {
      tileStyle = {
        width: '100%',
        height: '100%',
      };
    }

    return (
      <div className="tile">
        <img
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onClick={this.clickHandler}
          src={image}
          alt="Image: Fake photo"
          style={tileStyle}
        />
      </div>
    );
  }
}

Album.propTypes = {
  closeAlbum: PropTypes.func.isRequired,
  data: PropTypes.array,
};

Tiles.propTypes = {
  images: PropTypes.array,
  onClose: PropTypes.func.isRequired,
};

Tile.propTypes = {
  image: PropTypes.string,
};

Tile.defaultProps = {
  image: 'https://via.placeholder.com/600/92c952',
};
