'use strict';

angular.module( 'edmundsLibrary', [] )
	.constant( 'EDM_API_PREFIX', 'https://api.edmunds.com/api/vehicle/v2' )
	.constant( 'APP_API', 'mn6kkxnjuhzzf3c5nuku3h28' )
	.constant( 'EDM_MAKES_BY_CONDITION', '/makes?state={{state}}&fmt=json&api_key=' )
	.constant( 'EDM_MODELS_BY_MAKE', '/{{make}}/models?state={{state}}&view=basic&fmt=json&api_key=' )
	.constant( 'EDM_MODEL_YEAR_BY_MODEL', '/{{make}}/{{model}}/years?state={{state}}&view=basic&fmt=json&api_key=' )

  .factory( 'edmundsLibFactory', function ($http, $q, $interpolate, EDM_MAKES_BY_CONDITION, EDM_MODELS_BY_MAKE, EDM_MODEL_YEAR_BY_MODEL, APP_API, EDM_API_PREFIX) {

		return {
			// Get car makes by state
			getCarMakes : function (state) {
				var d = $q.defer();
				var path = $interpolate( EDM_MAKES_BY_CONDITION )( {
					state: state
				} );
				var url = EDM_API_PREFIX + path + APP_API;
				$http( {
					url  : url,
					cache: true
				} ).success( function (data) {
					if (typeof data.status === 'object') {
						window.alert( 'Encountered and error requesting cars data: \r\n"' +
						data.status.message + '"' );
						d.reject( data.status );
					} else {
						d.resolve( data );
					}
				} ).error( function (data, status) {
					window.alert( status + ' error attempting to access edmunds.com.' );
					d.reject();
				} );
				return d.promise;
			},

			// Get a list of car models for a specific car make by the make's niceName.
			getCarModels: function (make, state) {
				var d = $q.defer();
				var path = $interpolate( EDM_MODELS_BY_MAKE )( {
					make : make,
					state: state
				} );
				var url = EDM_API_PREFIX + path + APP_API;
				$http( {
					url  : url,
					cache: true
				} ).success( function (data) {
					if (typeof data.status === 'object') {
						window.alert( 'Encountered and error requesting cars data: \r\n"' +
						data.status.message + '"' );
						d.reject( data.status );
					} else {
						d.resolve( data );
					}
				} ).error( function (data, status) {
					window.alert( status + ' error attempting to access edmunds.com.' );
					d.reject();
				} );
				return d.promise;
			},

      // Get a car model year details by car Make and Model niceNames.
      getCarModelYear: function (make, state, model) {
        var d = $q.defer();
        var path = $interpolate( EDM_MODEL_YEAR_BY_MODEL )( {
          make : make,
          model : model,
          state: state
        } );
        var url = EDM_API_PREFIX + path + APP_API;
        $http( {
          url  : url,
          cache: true
        } ).success( function (data) {
          if (typeof data.status === 'object') {
            window.alert( 'Encountered and error requesting cars data: \r\n"' +
            data.status.message + '"' );
            d.reject( data.status );
          } else {
            d.resolve( data );
            console.log( data );
          }
        } ).error( function (data, status) {
          window.alert( status + ' error attempting to access edmunds.com.' );
          d.reject();
        } );
        return d.promise;
      }

		};
	} );
