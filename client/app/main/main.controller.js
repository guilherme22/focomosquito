'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Auth, NgMap,$stateParams) {
    this.$http = $http;
    this.NgMap = NgMap;
    this.isLoggedIn = Auth.isLoggedIn
    this.getCurrentUser = Auth.getCurrentUser;
    this.$cidade = $stateParams.cidade || 'lorena'
    this.foco = {};

    $http.get('/api/things/' + this.$cidade ).then(response => {
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
          rua: this.position.formatted_address,
          user: this.getCurrentUser()._id,
          foto: this.foco.foto.base64 ? 'data:'+ this.foco.foto.filetype + ';base64,' + this.foco.foto.base64 : '' 
          
        }  

        console.log(focoDengue);

      this.$http.post('/api/things/' +this.$cidade, focoDengue).then(result => {
         var index = _.findIndex(this.focos, function(foco){
            return foco._id == result.data._id;
         })

        this.focos[index] = result.data;
        this.foco = {};
        this.position = '';
        $('#modal-reportar').modal('hide');
      })


    }
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
