(function () {

  'use strict';
  angular.module('app.home', ['ui.router'])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('home', {
      url: '',
      views: {
        'main': {
          controller: 'HomeCtrl',
          controllerAs: 'homeCtrl',
          templateUrl: 'app/home/home.tpl.html'
        }
      },
      data: {
        pageTitle: 'Home'
      }
    });
  }
}());