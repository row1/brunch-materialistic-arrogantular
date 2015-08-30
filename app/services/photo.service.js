(function () {
  'use strict';

  angular.module('app.services')
    .factory('photoService', photoService);

  photoService.$inject = ['$resource'];

  function photoService($resource) {
    var photos = $resource('http://jsonplaceholder.typicode.com/photos/:id');
    
    var service = {
      all: all,
      get: get
    };
    
    return service;

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