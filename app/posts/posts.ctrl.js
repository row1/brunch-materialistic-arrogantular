(function () {
  'use strict';

  angular.module('app.posts')
    .controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['PhotoService'];
  
  function PostsCtrl(PhotoService) {

    var vm = this;
    vm.posts = [];
    
    PhotoService.all().then(function(data) {
      vm.posts = data;
    });
  }
}());