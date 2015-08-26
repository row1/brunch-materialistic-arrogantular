(function () {
  'use strict';

  angular.module('app.home')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['photoService'];
  
  function HomeCtrl(photoService) {

    var vm = this;
    vm.grid = [];
    
    activate();
    
    function activate() {
      photoService.all().then(createGrid);
    }
    
    function createGrid(photos){
      vm.grid.length = 0;
      
      var layouts = [
        { rs: 2, cs: 2},
        { rs: 1, cs: 2},
        { rs: 1, cs: 2}
      ];
      
      for(var i = 0; i < photos.length; i++) {
        var photo = photos[i];
        var layout = layouts[i] ? layouts[i] : { rs: 1, cs: 1};
        var title = photo.title.split(' ').slice(0, 3).join(' ');
        var gridTitle = {
          rowSpan: layout.rs,
          colSpan: layout.cs,
          imageUrl: photo.thumbnailUrl,
          title: title,
          id: photo.id
        };

        vm.grid.push(gridTitle);
      }
    }
  }
}());