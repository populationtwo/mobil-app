'use strict';

/**
 * @ngdoc function
 * @name mobilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobilApp
 */
app.controller( 'MainCtrl', function ($scope, $q, appData) {

  //edmDataAll()
  //  .then( function (result) {
  //    $scope.carMakes = result.makes;
  //  } );
  //
  //$scope.findModel = function (make) {
  //  edmModelByMakes( make )
  //    .then( function (result) {
  //      $scope.carByModels = result.models;
  //    } );
  //};
  //
  //$scope.findYears = function (make, model) {
  //
  //  edmYearByMakesModel( make, model )
  //    .then( function (result) {
  //      $scope.carByMakeModels = result.years;
  //    } );
  //};

  //var toString = Object.prototype.toString;
  //$q.when( appData.makes ).then( function (result) {
  //  if (toString.call( appData.makes ) == '[object Object]') {
  //    appData.makes = result.makes;
  //  }
  //  $scope.makes = appData.makes;
  //
  //
  //} );
  //
  //$q.when( appData.models ).then( function (result) {
  //  if (toString.call( appData.models ) == '[object Object]') {
  //    appData.models = result.models;
  //  }
  //  $scope.models = appData.models;
  //} );

  $scope.init = function () {
    $scope.state = 'new';
    $scope.getMakes();
  }

  $scope.getMakes = function () {
    appData.getCarMakes( $scope.state ).then( function (result) {
      $scope.makes = result.makes;
    } );
  }

  $scope.getModels = function () {
    appData.getCarModels( $scope.carMake, $scope.state ).then( function (result) {
      $scope.models = result.models;
    } );
  }

  $scope.getModelYear = function () {
    appData.getCarModelYear( $scope.carMake, $scope.state, $scope.carModel ).then( function (result) {
      $scope.years = result.years;
    } );
  }
  $scope.init();

} );

