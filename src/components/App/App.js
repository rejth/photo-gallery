import React, { Component } from 'react';
import FakeApiService from '../../services/service';
import GalleryModal from '../GalleryModal';
import Album from '../Album';
import Button from '../Button';
import ErrorIndicator from '../ErrorIndicator';
import './App.scss';

export default class App extends Component {
  _userId = 1;

  state = {
    albums: null,
    photos: null,
    countPhotos: null,
    currentPhotoId: null,
    isOpenModal: false,
    isOpenAlbum: false,
    error: null,
  };

  fakeApiService = new FakeApiService();

  updateAlbumTiles = () => {
    this.fakeApiService
      .getAllAlbums(this._userId)
      .then(albums => this.setState({ albums }))
      .catch(() => this.setState({ error: true }));
  };

  updatePhotosList = albumId => {
    this.fakeApiService
      .getAllPhotos(albumId)
      .then(photos => this.setState({ photos }))
      .catch(() => this.setState({ error: true }));
  };

  updateCountPhotos = albumId => {
    this.fakeApiService
      .getCountPhotos(albumId)
      .then(count => this.setState({ countPhotos: count }))
      .catch(() => this.setState({ error: true }));
  };

  componentDidMount() {
    this.updateAlbumTiles();
  }

  renderAlbumTiles(tiles) {
    if (tiles) {
      return tiles.map(({ src, id, title }) => {
        this.updateCountPhotos(id);
        <div className="album" key={id}>
          <img
            className="cover-image"
            src={src}
            key={id}
            alt="Image: cover image"
          />
          <div className="album-info">
            <span>Альбом: {title}</span>
            <span>Количество фото: {this.state.countPhotos}</span>
          </div>
          <div className="button-block">
            <Button text={'Аlbum'} onAction={() => this.openAlbum(id)} />
            <Button text={'Preview'} onAction={() => this.openModal(id)} />
          </div>
        </div>;
      });
    }
  }

  openAlbum = id => {
    this.updatePhotosList(id);
    this.setState({ isOpenAlbum: true });
  };

  openModal = id => {
    this.updatePhotosList(id);
    this.setState({
      currentPhotoId: id,
      isOpenModal: true,
    });
  };

  closeAlbum = () => {
    this.setState({
      photos: null,
      isOpenAlbum: false,
    });
  };

  closeModal = () => {
    this.setState({
      photos: null,
      isOpenModal: false,
    });
  };

  findPrevPhoto = e => {
    e.preventDefault();
    this.setState(({ currentPhotoId }) => ({
      currentPhotoId: currentPhotoId - 1,
    }));
  };

  findNextPhoto = e => {
    e.preventDefault();
    this.setState(({ currentPhotoId }) => ({
      currentPhotoId: currentPhotoId + 1,
    }));
  };

  render() {
    const {
      albums,
      photos,
      currentPhotoId,
      isOpenModal,
      isOpenAlbum,
      error,
    } = this.state;

    const errorMessage = error ? <ErrorIndicator /> : null;

    const albumItems = this.renderAlbumTiles(albums);

    const modal =
      isOpenModal && photos ? (
        <GalleryModal
          closeModal={this.closeModal}
          findPrevPhoto={this.findPrevPhoto}
          findNextPhoto={this.findNextPhoto}
          hasPrevPhoto={currentPhotoId > 0}
          hasNextPhoto={currentPhotoId + 1 < photos.length}
          src={photos[currentPhotoId].url}
        />
      ) : null;

    const album =
      isOpenAlbum && photos ? (
        <Album closeAlbum={this.closeAlbum} data={photos} />
      ) : null;

    const albumTiles = !isOpenAlbum ? (
      <React.Fragment>
        <h1>Photo Gallery</h1>
        <div className="gallery-grid">{albumItems}</div>
        {modal}
      </React.Fragment>
    ) : null;

    return (
      <div className="gallery-container">
        {albumTiles}
        {album}
        {errorMessage}
      </div>
    );
  }
}
