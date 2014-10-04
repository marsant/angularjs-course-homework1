app.factory('tShirt', ['$http', '$q', function($http, $q) {

  var url   = 'http://nodejs-express-crud.herokuapp.com/tshirt';
  
  return {
    read: function() {
      var defer = $q.defer();

      $http({
        method: 'GET',
        url: url
      })
      .success(function(data, status, headers, config){
        defer.resolve(data);
      })
      .error(function(data, status, headers, config){
        defer.reject(data);
      });

      return defer.promise;
    },
    create: function(obj) {
      var defer = $q.defer();

      $http({
        method: 'POST',
        url: url,
        data: obj,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Content-Type': 'application/json'
        }
      })
      .success(function(data, status, headers, config){
        defer.resolve(data);
      })
      .error(function(data, status, headers, config){
        defer.reject(data);
      });

      return defer.promise;
    }
  }
}]);