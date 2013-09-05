'use strict';

angular.module('projectsApp', []).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'addCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
