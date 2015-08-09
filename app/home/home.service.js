(function () {
  'use strict';

  angular.module('app.home')
    .service('HomeService', HomeService);

  HomeService.$inject = ['$resource'];

  function HomeService($resource) {
    this.allPhotos = allPhotos;

    var photos = $resource('http://jsonplaceholder.typicode.com/photos', {
      _limit: 11
    });

    function allPhotos() {
      return photos.query().$promise;
    }
  }
}());