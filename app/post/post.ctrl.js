(function () {
  'use strict';

  angular.module('app.post')
    .controller('PostCtrl', PostCtrl);

  PostCtrl.$inject = ['photoService', '$stateParams'];
  
  function PostCtrl(photoService, $stateParams) {
    var vm = this;
    vm.post = undefined;
    
    photoService.get($stateParams.id).then(function(data) {
      vm.post = data;
    });
  }
}());