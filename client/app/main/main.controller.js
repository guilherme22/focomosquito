'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Auth, NgMap) {
    this.$http = $http;
    this.NgMap = NgMap;
    this.isLoggedIn = Auth.isLoggedIn();
    this.getCurrentUser = Auth.getCurrentUser;
    this.foco = {};

    $http.get('/api/things').then(response => {
      this.focos = response.data;

      socket.syncUpdates('thing', this.focos);

    });

    $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
   }


  addThing() {
    if (this.foco.descricao) {

        var focoDengue = {
          descricao: this.foco.descricao,
          lat: this.position.geometry.location.lat(),
          lng: this.position.geometry.location.lng(),
          user: this.getCurrentUser()._id
        }

      this.$http.post('/api/things', focoDengue);
      this.foco = {};
      this.position = '';
    }
  }

  showInfoWindow(event, foco){
     
        var infowindow = new google.maps.InfoWindow();
        var center = new google.maps.LatLng(foco.lat,foco.lng);
        infowindow.setContent('<h3> Reportado por: ' + foco.user.name + '</h3> </br> <p><strong>'+ foco.descricao +'</strong></p>');

        infowindow.setPosition(center);
        infowindow.open(this.map);
        this.map.setCenter(center);
  }

}

angular.module('focoApp')
  .controller('MainController', MainController);

})();
