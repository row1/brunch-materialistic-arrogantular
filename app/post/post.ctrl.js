(function () {
  'use strict';

  angular.module('app.post')
    .controller('PostCtrl', PostCtrl);

  PostCtrl.$inject = ['PhotoService'];
  
  function PostCtrl(PhotoService) {

  }
}());