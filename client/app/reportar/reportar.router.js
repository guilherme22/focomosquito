'use strict';

angular.module('focoApp.reportar')
  .config(function($stateProvider) {
    $stateProvider
      .state('reportar', {
        url: '/:cidade/reportar',
        templateUrl: 'app/reportar/reportar.html',
        controller: 'ReportarCtrl',
        authenticate: 'user'
      });
 });
