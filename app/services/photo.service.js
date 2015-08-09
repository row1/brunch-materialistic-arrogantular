(function () {
  'use strict';

  angular.module('app.services')
    .service('PhotoService', PhotoService);

  PhotoService.$inject = ['$resource'];

  function PhotoService($resource) {
    this.all = all;
    this.get = get;

    var photos = $resource('http://jsonplaceholder.typicode.com/photos/:id');

    function all() {
      return photos.query({
        _limit: 11
      }).$promise;
    }
    function get(id) {
      return photos.get({id: id}).$promise;
    }
  }
}());