'use strict';

angular.module('focoApp')
  .controller('FocoCtrl', function ($scope, $stateParams, $http, Auth) {

  		$scope.foco =  {};

  		$http.get('/api/things/'+$stateParams.id).then(function(response){

  			$scope.foco = response.data;
  		})

  });
