'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Auth, NgMap,$stateParams) {
    this.$http = $http;
    this.NgMap = NgMap;
    this.isLoggedIn = Auth.isLoggedIn
    this.getCurrentUser = Auth.getCurrentUser;
    this.$cidade = $stateParams.cidade || 'lorena'


    $http.get('/api/things/' + this.$cidade ).then(response => {
      this.focos = response.data;

      socket.syncUpdates('thing', this.focos);

    });

    $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
   }


  showInfoWindow(event, foco){
     
        var infowindow = new google.maps.InfoWindow();
        var center = new google.maps.LatLng(foco.lat,foco.lng);
        infowindow.setContent('<h3> Reportado por: ' + foco.user.name + '</h3> </br> <p><strong>'+ foco.descricao +'</strong></p> <p> <a href="/' +foco.cidade+ '/'+foco._id+'">Detalhe </a></p>');

        infowindow.setPosition(center);
        infowindow.open(this.map);
        this.map.setCenter(center);
  }

}

angular.module('focoApp')
  .controller('MainController', MainController);

})();
