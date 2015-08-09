(function () {

  'use strict';
  angular.module('app.post', ['ui.router', 'app.services'])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('post', {
      url: '/posts/{id:[0-9]+}',
      views: {
        'main': {
          controller: 'PostCtrl',
          controllerAs: 'postCtrl',
          templateUrl: 'app/post/post.tpl.html'
        }
      },
      data: {
        pageTitle: 'Post'
      }
    });
  }
}());