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
		//'ngRoute',
		'ngSanitize',
		'ngTouch',
		'edmundsLibrary',
		'ui.bootstrap',
		'ui.router'
	] )
	.config( function ($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise( '/' );
		//
		// Now set up the states
		$stateProvider
			.state( 'home', {
				url        : '/',
				templateUrl: 'views/main.html'
			} )
			.state( 'about', {
				url        : '/about',
				templateUrl: 'views/about.html',
				controller : 'AboutCtrl'
			} )
			.state( 'compare-landing', {
				url        : '/compare',
				//templateUrl: 'views/compare.html',
				views: {
					'pageheader': {
						templateUrl: 'views/partials/header.html'
					},
					'content': {
						templateUrl: 'views/compare.html'
					}
				}
			} )
			.state( 'compare', {
				url        : '/compare/model',
				views: {
					'pageheader': {
						templateUrl: 'views/partials/header.html'
					},
					'content': {
						templateUrl: 'views/compare-model.html'
					}
				}
			} );
	} );
