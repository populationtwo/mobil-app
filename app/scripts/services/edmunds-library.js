'use strict';

angular.module( 'edmundsLibrary', [] )
  .constant( 'EDM_API_PREFIX', 'https://api.edmunds.com/api/vehicle/v2' )
  .constant( 'APP_API', 'mn6kkxnjuhzzf3c5nuku3h28' )
  .constant( 'EDM_MAKES_BY_CONDITION', '/makes?state={{condition}}&fmt=json&api_key=' )

  .factory( 'edmundsLibFactory', function ($http, $q, $interpolate, EDM_MAKES_BY_CONDITION, APP_API, EDM_API_PREFIX) {

    return {
      // Get car makes by condition
      getCarMakes: function (condition) {
        var d = $q.defer();
        var path = $interpolate( EDM_MAKES_BY_CONDITION )( {
          condition: condition
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
            //Creating a car makes and id value pair,

            console.log( data );
            d.resolve( data );
          }
        } ).error( function (data, status) {
          window.alert( status + ' error attempting to access edmunds.com.' );
          d.reject();
        } );
        return d.promise;
      }

    };
  } );
