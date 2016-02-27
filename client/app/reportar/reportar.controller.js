'use strict';

angular.module('focoApp')
  .controller('ReportarCtrl', function ($scope,$http,Auth, $stateParams) {
  		$scope.$cidade = $stateParams.cidade

  		$scope.position = {};

  		$scope.foco = {
		        descricao: '',
		        lat: '',
		        lng: '',
		        rua: '',
		        user: '',
		        foto:{

		        }
		 }

		$scope.addThing = function() {

		    if ($scope.foco.descricao) {


		        var focoDengue = {
		          descricao: $scope.foco.descricao,
		          lat: $scope.position.geometry.location.lat(),
		          lng: $scope.position.geometry.location.lng(),
		          rua: $scope.position.formatted_address,
		          user: Auth.getCurrentUser()._id,
		          foto: $scope.foco.foto.base64 ? 'data:'+ $scope.foco.foto.filetype + ';base64,' + $scope.foco.foto.base64 : '' 

		        }  

		      $http.post('/api/things/' +$scope.$cidade, focoDengue).then(function callback(result){
			        $scope.foco = {
					        descricao: '',
					        lat: '',
					        lng: '',
					        rua: '',
					        user: '',
					        foto:{

					        }
					 }
					 toastr.success('Logo notificaremos a prefeitura de sua denúncia:)', 'Obrigado por colaborar!')
			        $scope.position = {}
		      });

		    }
		  }
  		
  });
