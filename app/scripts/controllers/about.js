'use strict';

/**
 * @ngdoc function
 * @name mobilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mobilApp
 */
angular.module('mobilApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
