'use strict';

angular.module( 'edmundsLibrary', [] )
	.constant( 'EDM_API_PREFIX', 'https://api.edmunds.com/api/vehicle/v2' )
	.constant( 'APP_API', 'mn6kkxnjuhzzf3c5nuku3h28' )
	.constant( 'EDM_ALL_MAKES', '/makes?fmt=json&api_key=' )

	.factory( 'edmRequest', function ($http, $q, EDM_API_PREFIX, APP_API) {
		return function (path) {
			var defer = $q.defer();
			$http.get( EDM_API_PREFIX + path + APP_API )
				.success( function (data) {
					defer.resolve( data );
				} );
			return defer.promise;
		};
	} )

	//Get all car makes
.factory( 'edmMakesFactory', function (edmRequest, EDM_ALL_MAKES) {
		return function () {
			return edmRequest( EDM_ALL_MAKES );
		};
	} );