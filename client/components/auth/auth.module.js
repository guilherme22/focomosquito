'use strict';

angular.module('focoApp.auth', [
  'focoApp.constants',
  'focoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
