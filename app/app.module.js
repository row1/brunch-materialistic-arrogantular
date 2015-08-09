(function () {
  'use strict'; 
  
  var dependencies = [
    'ngMaterial',
    'templates',
    'app.home',
    'app.posts',
    'app.post'
  ];
   
  angular.module('app', dependencies)
    .config(config)
    .run(run);
  
  config.$inject = ['$urlRouterProvider', '$mdThemingProvider'];
  run.$inject = ['$rootScope', '$state', '$stateParams'];
  
  function config($urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');
    
    $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('light-green');
  }
  
  function run ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
  
}());