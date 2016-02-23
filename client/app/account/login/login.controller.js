'use strict';

class LoginController {
  constructor(Auth, $state, $window) {
    this.user = {};
    this.$window = $window
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        // Logged in, redirect to home
        var city = this.$window.sessionStorage.getItem('cidade');
        this.$state.go('main', {cidade: city});
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('focoApp')
  .controller('LoginController', LoginController);
