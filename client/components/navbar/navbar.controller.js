'use strict';

class NavbarController {
  //start-non-standard
 
  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $window) {
    this.menu = [{
    'title': 'Inicio',
    'href': '/' + $window.sessionStorage.getItem('cidade')
  }];

    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('focoApp')
  .controller('NavbarController', NavbarController);
