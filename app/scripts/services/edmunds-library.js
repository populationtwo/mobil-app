'use strict';

angular.module( 'edmundsLibrary', [] )
	.constant( 'EDM_API_PREFIX', 'https://api.edmunds.com/api/vehicle/v2' )
	.constant( 'APP_API', 'mn6kkxnjuhzzf3c5nuku3h28' )
	.constant( 'EDM_ALL_MAKES', '/makes?state=new&fmt=json&api_key=' )
	.constant( 'EDM_MODEL_BY_MAKES', '/{{ model }}/models?state=new&fmt=json&api_key=' )
	.constant( 'EDM_YEAR_BY_MAKESMODEL', '/{{make}}/{{ model }}/years?state=new&fmt=json&api_key=' )

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

	//Get a list of all new car makes
	.factory( 'edmDataAll', function (edmRequest, EDM_ALL_MAKES) {
		return function () {
			return edmRequest( EDM_ALL_MAKES );
		};
	} )

	.factory( 'edmModelByMakes', function (edmRequest, $interpolate, EDM_MODEL_BY_MAKES) {
		return function (modelName) {
			var path = $interpolate( EDM_MODEL_BY_MAKES )( {
				model: modelName
			} );
			return edmRequest( path );
		};
	} )

	.factory( 'edmYearByMakesModel', function (edmRequest, $interpolate, EDM_YEAR_BY_MAKESMODEL) {
		return function (makeName, modelName) {
			var path = $interpolate( EDM_YEAR_BY_MAKESMODEL )( {
				make : makeName,
				model: modelName
			} );
			return edmRequest( path );
		};
	} );

