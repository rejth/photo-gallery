export default class FakeApiService {
  _baseUrl = 'https://jsonplaceholder.typicode.com';

  // обложки для альбомов
  _imgUrls = [
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

  // получение данных по API
  async getResource(url) {
    const response = await fetch(`${this._baseUrl}${url}`);
    const body = await response.json();

    if (response.status !== 200) {
      throw new Error(
        `Could not fetch ${url}. Recieved status code ${response.status}`
      );
    }

    return body;
  }

  // получение всех альбомов конкретного юзера
  async getAllAlbums(userId) {
    const albums = await this.getResource(`/users/${userId}/albums`);
    const albumProps = await Promise.all(
      albums.map(
        async (album, index) => await this._transformAlbum(album, index)
      )
    );
    return albumProps; // [{}, {}...]
  }

  // получение всех фотографий конкретного альбома
  async getAllPhotos(albumId) {
    const photos = await this.getResource(`/albums/${albumId}/photos`);
    return photos; // [{}, {}...]
  }

  // получение количества фотографий в альбоме
  async getCountPhotos(albumId) {
    const photos = await this.getResource(`/albums/${albumId}/photos`);
    return photos.length;
  }

  // добавление обложки альбома
  _addCoverImage = item => this._imgUrls[item];

  async _transformAlbum(album, index) {
    const count = await this.getCountPhotos(album.id);
    return {
      userId: album.userId,
      id: album.id,
      title: album.title,
      src: this._addCoverImage(index),
      countPhotos: count,
    };
  }
}
