'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Mapa',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('focoApp')
  .controller('NavbarController', NavbarController);
