(function () {
  'use strict';

  angular.module('app.posts')
    .controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['photoService'];
  
  function PostsCtrl(photoService) {

    var vm = this;
    vm.posts = [];
    
    photoService.all().then(function(data) {
      vm.posts = data;
    });
  }
}());