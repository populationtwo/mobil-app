'use strict';

/**
 * @ngdoc function
 * @name mobilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobilApp
 */
app.controller( 'MainCtrl', function ($scope, edmDataAll, edmModelByMakes, edmYearByMakesModel) {

	edmDataAll()
		.then( function (result) {
			$scope.carMakes = result.makes;
		} );

	$scope.findModel = function (make) {
		edmModelByMakes( make )
			.then( function (result) {
				$scope.carByModels = result.models;
			} );
	};

	$scope.findYears = function (make, model) {

		edmYearByMakesModel( make, model )
			.then( function (result) {
				$scope.carByMakeModels = result.years;
			} );
	};

} );
