'use strict';

describe('Controller: AppointmentsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AppointmentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointmentsCtrl = $controller('AppointmentsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AppointmentsCtrl.awesomeThings.length).toBe(3);
  });
});
