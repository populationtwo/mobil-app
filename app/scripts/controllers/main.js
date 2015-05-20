'use strict';

/**
 * @ngdoc function
 * @name mobilAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobilAppApp
 */
angular.module('mobilAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
