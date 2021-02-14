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

// плитка фотографий + кнопка "Back"
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
        <div className="back-button">
          <Button text={'Back'} onAction={onClose} />
        </div>
        <section className="tiles">{tiles}</section>
      </React.Fragment>
    );
  }
}

// фотография
class Tile extends Component {
  state = {
    isOpen: false,
    mouseOver: false,
  };

  mouseEnter = e => {
    e.preventDefault();
    if (!this.state.mouseOver) {
      this.setState({
        mouseOver: true,
      });
    }
  };

  mouseLeave = e => {
    e.preventDefault();
    if (this.state.mouseOver) {
      this.setState({
        mouseOver: false,
      });
    }
  };

  clickHandler = e => {
    e.preventDefault();
    if (!this.state.isOpen) {
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
    // url
    const { image } = this.props;

    // стили при нажатии на фотографию
    let tileStyle = {};

    if (this.state.isOpen && document.documentElement.clientWidth > 780) {
      tileStyle = {
        position: 'absolute',
        left: '50%',
        width: '50vw',
        height: '40vw',
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
