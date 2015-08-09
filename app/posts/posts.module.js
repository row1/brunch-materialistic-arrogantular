(function () {

  'use strict';
  angular.module('app.posts', ['ui.router', 'app.services'])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider.state('posts', {
      url: '/posts',
      views: {
        'main': {
          controller: 'PostsCtrl',
          controllerAs: 'postsCtrl',
          templateUrl: 'app/posts/posts.tpl.html'
        }
      },
      data: {
        pageTitle: 'Posts',
        viewClass: 'posts'
      }
    });
  }
}());