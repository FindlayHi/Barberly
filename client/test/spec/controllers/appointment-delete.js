'use strict';

describe('Controller: AppointmentDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AppointmentDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointmentDeleteCtrl = $controller('AppointmentDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AppointmentDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
