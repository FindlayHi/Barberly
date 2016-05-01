'use strict';

describe('Controller: AppointmentViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AppointmentViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointmentViewCtrl = $controller('AppointmentViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AppointmentViewCtrl.awesomeThings.length).toBe(3);
  });
});
