import React, { Component } from 'react';
import FakeApiService from '../../services/service';
import GalleryModal from '../GalleryModal';
import Album from '../Album';
import Button from '../Button';
import './App.scss';

export default class App extends Component {
  state = {
    albums: null,
    photos: null,
    currentAlbumId: null,
    isOpenModal: false,
    isOpenAlbum: false,
    error: null,
  };

  fakeApiService = new FakeApiService();

  updateAlbumTiles = () => {
    const userId = 1;
    this.fakeApiService
      .getAllAlbums(userId)
      .then(albums => this.setState({ albums }))
      .catch(() => this.setState({ error: true }));
  };

  updatePhotosList = albumId => {
    this.fakeApiService
      .getAllPhotos(albumId)
      .then(photos => this.setState({ photos }))
      .catch(() => this.setState({ error: true }));
  };

  componentDidMount() {
    this.updateAlbumTiles();
  }

  renderAlbumTiles(tiles) {
    if (tiles) {
      return tiles.map(({ src, id }) => (
        <div key={id}>
          <img src={src} key={id} />
          <div className="button-block">
            <Button text={'Аlbum'} onAction={() => this.openAlbum(id)} />
            <Button text={'Preview'} onAction={() => this.openModal(id)} />
          </div>
        </div>
      ));
    }
  }

  openAlbum = id => {
    this.updatePhotosList(id);
    this.setState({
      currentAlbumId: id,
      isOpenAlbum: true,
    });
  };

  openModal = id => {
    this.updatePhotosList(id);
    this.setState({
      currentAlbumId: id,
      isOpenModal: true,
    });
  };

  closeAlbum = () => {
    this.setState({
      photos: null,
      currentAlbumId: null,
      isOpenAlbum: false,
    });
  };

  closeModal = () => {
    this.setState({
      photos: null,
      currentAlbumId: null,
      isOpenModal: false,
    });
  };

  findPrevPhoto = e => {
    e.preventDefault();
    this.setState(({ currentAlbumId }) => ({
      currentAlbumId: currentAlbumId - 1,
    }));
  };

  findNextPhoto = e => {
    e.preventDefault();
    this.setState(({ currentAlbumId }) => ({
      currentAlbumId: currentAlbumId + 1,
    }));
  };

  render() {
    const {
      albums,
      photos,
      currentAlbumId,
      isOpenModal,
      isOpenAlbum,
    } = this.state;

    console.log(photos);

    const items = this.renderAlbumTiles(albums);

    const modal = isOpenModal ? (
      <GalleryModal
        closeModal={this.closeModal}
        findPrevPhoto={this.findPrevPhoto}
        findNextPhoto={this.findNextPhoto}
        hasPrevPhoto={currentAlbumId > 0}
        hasNextPhoto={currentAlbumId + 1 < albums.length}
        src={albums[currentAlbumId].src}
      />
    ) : null;

    const album = isOpenAlbum ? (
      <Album closeAlbum={this.closeAlbum} data={photos} />
    ) : null;

    const albumTiles = !isOpenAlbum ? (
      <React.Fragment>
        <h1>Photo Gallery</h1>
        <div className="gallery-grid">{items}</div>
        {modal}
      </React.Fragment>
    ) : null;

    return (
      <div className="gallery-container">
        {albumTiles}
        {album}
      </div>
    );
  }
}
