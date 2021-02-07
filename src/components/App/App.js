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
    loading: true,
    error: false,
  };

  fakeApiService = new FakeApiService();

  updateAlbumTiles = () => {
    const userId = Math.floor(Math.random() * 10);
    this.fakeApiService
      .getAllAlbums(userId)
      .then(albums => this.setState({ albums, loading: false }))
      .catch(() => this.setState({ error: true, loading: false }));
  };

  updatePhotosList = index => {
    const albumId = index++;
    this.fakeApiService
      .getAllPhotos(albumId)
      .then(photos => this.setState({ photos, loading: false }))
      .catch(() => this.setState({ error: true, loading: false }));
  };

  componentDidMount() {
    this.updateAlbumTiles();
  }

  renderAlbumTiles = tile =>
    tile.map((album, index) => (
      <div key={index}>
        <img src={album.src} key={index} />
        <div className="button-block">
          <Button text={'Аlbum'} onAction={() => this.openAlbum(index)} />
          <Button text={'Preview'} onAction={() => this.openAlbum(index)} />
        </div>
      </div>
    ));

  openAlbum = index => {
    this.updatePhotosList(index);
    this.setState({
      currentAlbumId: index,
      isOpenAlbum: true,
    });
  };

  closeAlbum = () => {
    this.setState({
      photos: null,
      currentAlbumId: null,
      isOpenAlbum: false,
    });
  };

  findPrevPhoto = () => {
    this.setState(({ currentAlbumId }) => ({
      currentAlbumId: currentAlbumId - 1,
    }));
  };

  findNextPhoto = () => {
    this.setState(({ currentAlbumId }) => ({
      currentAlbumId: currentAlbumId + 1,
    }));
  };

  render() {
    const { albums, photos, currentAlbumId } = this.state;
    const items = this.renderAlbumTiles(albums);

    const modal = this.state.isOpenModal ? (
      <GalleryModal
        closeModal={this.closeAlbum}
        findPrevPhoto={this.findPrevPhoto}
        findNextPhoto={this.findNextPhoto}
        hasPrevPhoto={currentAlbumId > 0}
        hasNextPhoto={currentAlbumId + 1 < albums.length}
        src={albums[currentAlbumId].src}
      />
    ) : null;

    const album = this.state.isOpenAlbum ? (
      <Album closeAlbum={this.closeAlbum} data={photos} />
    ) : null;

    const albumTiles = !this.state.isOpenAlbum ? (
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
