'use strict';

describe('Controller: ReportarCtrl', function () {

  // load the controller's module
  beforeEach(module('focoApp'));

  var ReportarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportarCtrl = $controller('ReportarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
