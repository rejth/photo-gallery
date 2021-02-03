import React, { Component } from 'react';
import GalleryModal from '../GalleryModal';
import Album from '../Album';
import './App.scss';

export default class App extends Component {
  imgUrls = [
    'https://source.unsplash.com/PC_lbSSxCZE/800x600',
    'https://source.unsplash.com/lVmR1YaBGG4/800x600',
    'https://source.unsplash.com/5KvPQc1Uklk/800x600',
    'https://source.unsplash.com/GtYFwFrFbMA/800x600',
    'https://source.unsplash.com/Igct8iZucFI/800x600',
    'https://source.unsplash.com/M01DfkOqz7I/800x600',
    'https://source.unsplash.com/MoI_cHNcSK8/800x600',
    'https://source.unsplash.com/M0WbGFRTXqU/800x600',
    'https://source.unsplash.com/s48nn4NtlZ4/800x600',
    'https://source.unsplash.com/E4944K_4SvI/800x600',
    'https://source.unsplash.com/F5Dxy9i8bxc/800x600',
    'https://source.unsplash.com/iPum7Ket2jo/800x600',
  ];

  state = {
    currentIndex: null,
    isOpenModal: false,
    isOpenAlbum: false,
  };

  renderImageContent = arr =>
    arr.map((src, index) => (
      <div key={index} onClick={() => this.openModal(index)}>
        <img src={src} key={index} />
      </div>
    ));

  openModal = index => {
    this.setState({
      currentIndex: index,
      isOpenModal: true,
    });
  };

  openAlbum = index => {
    this.setState({
      currentIndex: index,
      isOpenAlbum: true,
    });
  };

  closeModal = () => {
    this.setState({
      currentIndex: null,
      isOpenModal: false,
    });
  };

  closeAlbum = () => {
    this.setState({
      currentIndex: null,
      isOpenAlbum: false,
    });
  };

  findPrev = () => {
    this.setState(({ currentIndex }) => ({
      currentIndex: currentIndex - 1,
    }));
  };

  findNext = () => {
    this.setState(({ currentIndex }) => ({
      currentIndex: currentIndex + 1,
    }));
  };

  render() {
    const items = this.renderImageContent(this.imgUrls);

    const modal = this.state.isOpenModal ? (
      <GalleryModal
        closeModal={this.closeModal}
        findPrev={this.findPrev}
        findNext={this.findNext}
        hasPrev={this.state.currentIndex > 0}
        hasNext={this.state.currentIndex + 1 < this.imgUrls.length}
        src={this.imgUrls[this.state.currentIndex]}
      />
    ) : null;

    const album = this.state.isOpenAlbum ? (
      <Album closeAlbum={this.closeAlbum} data={this.imgUrls} />
    ) : null;

    const albumTile = !this.state.isOpenAlbum ? (
      <React.Fragment>
        <h1>Photo Gallery</h1>
        <div className="gallery-grid">{items}</div>
        {modal}
      </React.Fragment>
    ) : null;

    return (
      <div className="gallery-container">
        {albumTile}
        {album}
      </div>
    );
  }
}
