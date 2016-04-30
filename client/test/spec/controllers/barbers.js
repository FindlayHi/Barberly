'use strict';

describe('Controller: BarbersCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BarbersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarbersCtrl = $controller('BarbersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarbersCtrl.awesomeThings.length).toBe(3);
  });
});
