'use strict';

describe('Controller: AppointmentEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AppointmentEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointmentEditCtrl = $controller('AppointmentEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AppointmentEditCtrl.awesomeThings.length).toBe(3);
  });
});
