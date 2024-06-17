/* eslint-disable no-unused-vars */
// eslint-disable-next-line max-len
// Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler yang digunakan.

const {
  addNoteHandler, getAllNotesHandler, editNoteByIdHandler, deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
