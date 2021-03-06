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
    'ngSanitize',
    'ngTouch',
    'edmundsLibrary',
    'ui.bootstrap',
    'ui.router'
  ] )
  .config( function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise( '/' );

    // Now set up the states
    $stateProvider

      .state( 'home', {
        url        : '/',
        templateUrl: '../partials/comparison/main.html',
        controller : 'MainCtrl'
      } )
      .state( 'compare', {
        url        : '/compare',
        templateUrl: '../partials/result/compare-result.html'
      } )
      .state( 'about', {
        url        : '/about',
        templateUrl: '../partials/about/about.html',
        controller : 'AboutCtrl'
      } );
  } )
  .factory( 'appData', ['edmundsLibFactory',
    function (edmundsLibFactory) {
      var Data = {};
      Data.getCarMakes = edmundsLibFactory.getCarMakes;
      Data.getCarModels = edmundsLibFactory.getCarModels;
      Data.getCarModelYear = edmundsLibFactory.getCarModelYear;

      return Data;
    }] );

