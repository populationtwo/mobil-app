'use strict';

/**
 * @ngdoc function
 * @name mobilAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mobilAppApp
 */
angular.module('mobilAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
