/* eslint-disable no-unused-vars */
// eslint-disable-next-line max-len
// Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan.

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => 'HomepagSSSe',
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => 'About page',
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => 'Halaman tidak dapat diakses dengan method',
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => 'Halaman tidak ditemukan',
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'stranger' } = request.params;
      const { lang } = request.query;

      if (lang === 'id') {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}!`;
    },
  },

];

module.exports = routes;
