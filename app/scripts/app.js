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
var app= angular
  .module('mobilApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'edmundsLibrary'
	])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
