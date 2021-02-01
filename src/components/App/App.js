import React, { Component } from 'react';
import GalleryModal from '../GalleryModal';
import './App.scss';

const imgUrls = [
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

export default class App extends Component {
  state = { currentIndex: null };

  renderImageContent = (src, index) => (
    <div onClick={e => this.openModal(e, index)}>
      <img src={src} key={src} />
    </div>
  );

  openModal = (e, index) => {
    this.setState({ currentIndex: index });
  };

  closeModal = e => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  };

  findPrev = e => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  };

  findNext = e => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  };

  render() {
    return (
      <div className="gallery-container">
        <h1>Photo Gallery</h1>
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          src={imgUrls[this.state.currentIndex]}
        />
      </div>
    );
  }
}
