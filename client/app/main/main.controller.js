'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Auth, NgMap,$stateParams,$timeout,$window, Util) {
    this.$http = $http;
    this.NgMap = NgMap;
    this.isLoggedIn = Auth.isLoggedIn
    this.getCurrentUser = Auth.getCurrentUser;
    this.$cidade = $stateParams.cidade || $window.sessionStorage.getItem('cidade')
    this.$brasil = {
      $estados: Util.states().estados
    };

    this.$estadoSelecionado = {
        cidades: []

    };

    this.$cidadeSelecionada="";


    $http.get('/api/things/' + this.$cidade ).then(response => {
      this.focos = response.data;

      socket.syncUpdates('thing', this.focos);

    });

    // this.$http.get('/assets/json/states.json').then(response =>{
    //   this.$brasil.$estados = response.data.estados
 
    // })

    $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });

      $timeout(() => {

        if($window.sessionStorage.getItem('cidade') != $stateParams.cidade){
              $window.sessionStorage.clear();
               $scope.$watch('main.$cidadeSelecionada', (cidade, antiga) => {
                  if(cidade){
                    $window.sessionStorage.setItem('cidade', Util.urlFriendly(cidade.title));
                    $window.sessionStorage.setItem('estado', JSON.stringify(this.$estadoSelecionado));
                    $window.location.href='/'+Util.urlFriendly(cidade.title)
                  }
                })
              $('#modal-reportar').modal('show')
        }else if($window.sessionStorage.getItem('cidade') && $window.sessionStorage.getItem('estado')){
            this.$cidadeSelecionada = $window.sessionStorage.getItem('cidade');
            this.$estadoSelecionado = JSON.parse($window.sessionStorage.getItem('estado'));
            $('#modal-reportar').modal('hide')
        }else{
           $scope.$watch('main.$cidadeSelecionada', (cidade, antiga) => {
              if(cidade){
                $window.sessionStorage.setItem('cidade', Util.urlFriendly(cidade.title));
                $window.sessionStorage.setItem('estado', JSON.stringify(this.$estadoSelecionado));
                $window.location.href='/'+Util.urlFriendly(cidade.title)
              }
            })


           $('#modal-reportar').modal('show')
         }
      
      }, 100);


   }

  changeState(estado){
    this.$estadoSelecionado.cidades = this.$estadoSelecionado.cidades.map(function(cidade){
      return {
        nome: cidade
      }
    })
    
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
