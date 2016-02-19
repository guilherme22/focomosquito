'use strict';

angular.module('focoApp')
  .controller('FocoCtrl', function ($scope, $stateParams, $http, Auth) {

  		$scope.foco =  {};

  		google.maps.InfoWindow.prototype.close()
		   

  		$http.get('/api/things/'+$stateParams.cidade+'/'+$stateParams.id).then(function(response){
 
  			$scope.foco = response.data;
  		})

  });
