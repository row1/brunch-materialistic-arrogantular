(function () {
  'use strict'; 
  
  var dependencies = [
    'ngMaterial',
    'templates',
    'app.home'
  ];
   
  angular.module('app', dependencies)
    .config(config);
  config.$inject = ['$urlRouterProvider', '$mdThemingProvider'];
  
  function config($urlRouterProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('');
    
    $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('light-green');
  }
  
}());