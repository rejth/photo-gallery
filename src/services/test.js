const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users/1/albums')
  .then(response => response.json())
  .then(response => {
    response.map(album => console.log(album));
  });

// async getAllAlbums(userId) {
//   const albums = await this.getResource(`users/${userId}/albums`);
//   return albums.map((album, index) => this._transformAlbum(album, index)); // [{}, {}...]
// }

const _baseUrl = 'https://jsonplaceholder.typicode.com';

const _imgUrls = [
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
];

const getResource = async url => {
  const response = await fetch(`
    ${_baseUrl}${url}`);
  const body = await response.json();

  if (response.status !== 200) {
    throw new Error(
      `Could not fetch ${url}. Recieved status code ${response.status}`
    );
  }

  return body;
};

// добавление обложки альбома
const _addCoverImg = item => _imgUrls[item];

const _transformAlbum = (album, index) => ({
  userId: album.userId,
  id: album.id,
  title: album.title,
  src: _addCoverImg(index),
});

// получение всех альбомов конкретного юзера
const getAllAlbums = async userId => {
  const albums = await getResource(`/users/${userId}/albums`);
  return albums.map((album, index) => _transformAlbum(album, index)); // [{}, {}...]
};

getAllAlbums(1)
  .then(body => console.log(body))
  .catch(error => console.error(error));
