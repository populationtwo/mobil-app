'use strict';

/**
 * @ngdoc function
 * @name mobilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mobilApp
 */
angular.module( 'mobilApp' )
	.controller( 'MainCtrl', function ($scope, edmMakesFactory) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		//edmMakesFactory()
		//	.then( function (carMakesXhr) {
		//		$scope.carMakes = carMakesXhr.data;
		//	} );
		edmMakesFactory()
			.then( function (result) {
				$scope.carMakes = result.makes;
			} );

	} );
