(function () {
  'use strict';

  angular.module('app.services')
    .service('PhotoService', PhotoService);

  PhotoService.$inject = ['$resource'];

  function PhotoService($resource) {
    this.all = all;

    var photos = $resource('http://jsonplaceholder.typicode.com/photos', {
      _limit: 11
    });

    function all() {
      return photos.query().$promise;
    }
  }
}());