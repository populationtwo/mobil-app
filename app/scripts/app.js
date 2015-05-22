/* global app:true */
/* exported app */
'use strict';

/**
 * @ngdoc overview
 * @name mobilApp
 * @description
 * # mobilApp
 *
 * Main module of the application.
 */
var app = angular
	.module( 'mobilApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'edmundsLibrary',
		'ui.bootstrap'
	] )
	.config( function ($routeProvider) {
		$routeProvider
			.when( '/', {
				templateUrl: 'views/main.html',
				controller : 'MainCtrl'
			} )
			.when( '/about', {
				templateUrl: 'views/about.html',
				controller : 'AboutCtrl'
			} )
			.when( '/compare', {
				templateUrl: 'views/compare.html'
			} )
			.when( '/compare/model', {
				templateUrl: 'views/compare-model.html'
			} )
			.otherwise( {
				redirectTo: '/'
			} );
	} )

.controller('AccordionDemoCtrl', function ($scope) {
	$scope.oneAtATime = true;

	$scope.groups = [
		{
			title: 'Dynamic Group Header - 1',
			content: 'Dynamic Group Body - 1'
		},
		{
			title: 'Dynamic Group Header - 2',
			content: 'Dynamic Group Body - 2'
		}
	];

	$scope.items = ['Item 1', 'Item 2', 'Item 3'];

	$scope.addItem = function() {
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('Item ' + newItemNo);
	};

	$scope.status = {
		isFirstOpen: true,
		isFirstDisabled: false
	};
});