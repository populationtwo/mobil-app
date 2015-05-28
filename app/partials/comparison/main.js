'use strict';

/**
 * @ngdoc function
 * @name mobilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobilApp
 */
app.controller( 'MainCtrl', function ($scope, edmDataAll, edmModelByMakes, edmYearByMakesModel, $q, appData) {

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

  var toString = Object.prototype.toString;
  $q.when( appData.makes ).then( function (result) {
    if (toString.call( appData.makes ) == '[object Object]') {
      appData.makes = result.makes;
    }
    $scope.makes = appData.makes;
  } );


} )
;
