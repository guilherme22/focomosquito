'use strict';

angular.module('focoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reportar', {
        url: '/reportar',
        templateUrl: '../ /reportar/reportar.html',
        controller: 'ReportarCtrl'
      });
  });
