describe('Photo Service', function () {
  'use strict';

  var photoService;
  var $httpBackend;

  beforeEach(function () {
    module('app.services');

    inject(function (_photoService_, _$httpBackend_) {
      photoService = _photoService_;
      $httpBackend = _$httpBackend_;
    });
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should be true', function () {
    expect(true).toBe(true);
  });

  describe('get', function () {

    it('should return a single value', function () {
      
      var expected = {
          'albumId': 1,
          'id': 5,
          'title': 'natus nisi omnis corporis facere molestiae rerum in',
          'url': 'http://placehold.it/600/f66b97',
          'thumbnailUrl': 'http://placehold.it/150/7735a'
      };
      $httpBackend.when('GET', 'http://jsonplaceholder.typicode.com/photos/5')
        .respond(200, expected);
      
      var actual;
      photoService.get(5).then(function(data) {
        actual = angular.extend({}, data);
        delete actual.$promise;
        delete actual.$resolved;
      });

      $httpBackend.flush();

      expect(actual).toEqual(expected);
    });
  });

});