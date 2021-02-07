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

  // обновляем плитку альбомов
  updateAlbumTiles = () => {
    this.fakeApiService
      .getAllAlbums(this._userId)
      .then(albums => this.setState({ albums }))
      .catch(() => this.setState({ error: true }));
  };

  // обновляем список фотографий альбома
  updatePhotosList = albumId => {
    this.fakeApiService
      .getAllPhotos(albumId)
      .then(photos => this.setState({ photos }))
      .catch(() => this.setState({ error: true }));
  };

  // обновляем количество фотографий в альбоме
  updateCountPhotos = albumId => {
    this.fakeApiService
      .getCountPhotos(albumId)
      .then(count => this.setState({ countPhotos: count }))
      .catch(() => this.setState({ error: true }));
  };

  componentDidMount() {
    this.updateAlbumTiles();
  }

  // рендер плитки альбомов
  renderAlbumTiles(tiles) {
    if (tiles) {
      return tiles.map(({ src, id, title, countPhotos }) => (
        <div className="album" key={id}>
          <img
            className="cover-image"
            src={src}
            key={id}
            alt="Image: cover image"
          />
          <div className="album-info">
            <span>
              <strong>Album: </strong>
              {title}
            </span>
            <span>
              <strong>Count: </strong>
              {countPhotos}
            </span>
          </div>
          <div className="button-block">
            <Button text={'Аlbum'} onAction={() => this.openAlbum(id)} />
            <Button text={'Preview'} onAction={() => this.openModal(id)} />
          </div>
        </div>
      ));
    }
  }

  // функция открытия альбома
  openAlbum = id => {
    this.updatePhotosList(id);
    this.setState({ isOpenAlbum: true });
  };

  // функция открытия модального окна
  openModal = id => {
    this.updatePhotosList(id);
    this.setState({
      currentPhotoId: id,
      isOpenModal: true,
    });
  };

  // функция закрытия альбома
  closeAlbum = () => {
    this.setState({
      photos: null,
      isOpenAlbum: false,
    });
  };

  // функция закрытия модального окна
  closeModal = () => {
    this.setState({
      photos: null,
      isOpenModal: false,
    });
  };

  // функция перелистывания фотографий назад
  findPrevPhoto = e => {
    e.preventDefault();
    this.setState(({ currentPhotoId }) => ({
      currentPhotoId: currentPhotoId - 1,
    }));
  };

  // функция перелистывания фотографий вперед
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

    // сообщение об ошибке
    const errorMessage = error ? <ErrorIndicator /> : null;

    // массив альбомов юзера
    const albumItems = this.renderAlbumTiles(albums);

    // модальное окно с фотографиями
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

    // альбом с фотографиями
    const album =
      isOpenAlbum && photos ? (
        <Album closeAlbum={this.closeAlbum} data={photos} />
      ) : null;

    // плитка со всеми альбомами юзера
    const albumTiles = !isOpenAlbum ? (
      <React.Fragment>
        <h1>Photo Gallery</h1>
        <section className="gallery-grid">{albumItems}</section>
        {modal}
      </React.Fragment>
    ) : null;

    return (
      <section className="gallery-container">
        {albumTiles}
        {album}
        {errorMessage}
      </section>
    );
  }
}
