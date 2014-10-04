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
        data: {
          model: obj.model,
          style: obj.style,
          size: obj.size,
          color: obj.color,
          price: obj.price
        },
        headers: {
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