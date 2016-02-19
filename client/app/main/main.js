'use strict';

angular.module('focoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/:cidade',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
