import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Album.scss';

export default class Album extends Component {
  render() {
    const { data, closeAlbum, openModal } = this.props;
    return <Tiles images={data} onClose={closeAlbum} onOpen={openModal} />;
  }
}

// плитка фотографий + кнопка "Back"
class Tiles extends Component {
  renderImageContent(arr) {
    if (arr) {
      return arr.map(({ url, id }, index) => (
        <Tile image={url} key={id} id={index} onOpen={this.props.onOpen} />
      ));
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
    this.props.onOpen(this.props.id);
  };

  render() {
    const { image } = this.props;

    return (
      <div className="tile">
        <img
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onClick={this.clickHandler}
          src={image}
          alt="Image: Fake photo"
        />
      </div>
    );
  }
}

Album.propTypes = {
  closeAlbum: PropTypes.func.isRequired,
  data: PropTypes.array,
  openModal: PropTypes.func.isRequired,
};

Tiles.propTypes = {
  images: PropTypes.array,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

Tile.propTypes = {
  image: PropTypes.string,
  onOpen: PropTypes.func.isRequired,
  id: PropTypes.number,
};

Tile.defaultProps = {
  image: 'https://via.placeholder.com/600/92c952',
};
