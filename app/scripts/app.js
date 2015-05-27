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
        url  : '/',
        templateUrl: 'views/main.html'

      } )
      .state( 'compare', {
        url  : '/compare',
        templateUrl: 'views/compare-result.html'


      } )
      .state( 'about', {
        url        : '/about',
        templateUrl: 'views/about.html',
        controller : 'AboutCtrl'
      } );
  } );
