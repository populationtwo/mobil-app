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
  } )


  .factory( 'edmundsLibFactory', function ($http, $q, APP_API, EDM_API_PREFIX) {

    return {
      getAllCarMakes    : function () {
        var d = $q.defer();
        var url = EDM_API_PREFIX + '/makes?state=new&view=basic&fmt=json&api_key=' + APP_API;
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
            data.makesObj = {};
            var i;
            for (i = 0; i < data.makes.length; i++) {
              data.makesObj[data.makes[i].name] = data.makes[i].id;
            }
            //console.log(data.makesObj);
            d.resolve( data );
          }
        } ).error( function (data, status) {
          window.alert( status + ' error attempting to access edmunds.com.' );
          d.reject();
        } );
        return d.promise;
      },
      getAllNewCarModels: function () {
        var d = $q.defer();
        var url = EDM_API_PREFIX + '/makes?state=new&view=basic&fmt=json&api_key=' + APP_API;
        $http( {
          url  : url,
          cache: true
        } ).success( function (data) {
          if (typeof data.status === 'object') {
            window.alert( 'Encountered and error requesting cars data: \r\n"' +
            data.status.message + '"' );
            d.reject( data.status );
          } else {
            var i;
            var j;
            var k=0;
            data.models = {};
            for (i = 0; i < data.makes.length; i++) {
              for (j = 0; j < data.makes[i].models.length; j++) {
                data.models[k] = {
                  'name': data.makes[i].name + ' ' + data.makes[i].models[j].name,
                  'id'  : data.makes[i].models[j].years[0].id
                };
                k++;
              }
            }
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
