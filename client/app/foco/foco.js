'use strict';

angular.module('focoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('foco', {
        url: '/foco/:id',
        templateUrl: 'app/foco/foco.html',
        controller: 'FocoCtrl'
      });
  });
