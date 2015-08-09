(function () {
  'use strict'; 
  
  var dependencies = [
    'ngMaterial',
    'templates',
    'app.home',
    'app.posts'
  ];
   
  angular.module('app', dependencies)
    .config(config);
  config.$inject = ['$urlRouterProvider', '$mdThemingProvider'];
  
  function config($urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('light-green');
  }
  
}());