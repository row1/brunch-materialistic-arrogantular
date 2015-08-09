(function () {
  'use strict';

  angular.module('app.post')
    .controller('PostCtrl', PostCtrl);

  PostCtrl.$inject = ['PhotoService', '$stateParams'];
  
  function PostCtrl(PhotoService, $stateParams) {
    var vm = this;
    vm.post = undefined;
    
    PhotoService.get($stateParams.id).then(function(data) {
      vm.post = data;
    });
  }
}());