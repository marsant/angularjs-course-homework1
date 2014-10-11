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
    create: function(formData) {
      var defer = $q.defer();

      $http({
        method: 'POST',
        url: url,
        // data: formData,
        data: $.param(formData),
        /*data: {
          model: formData.model,
          style: formData.style,
          size: formData.size,
          color: formData.color,
          price: formData.price
        },*/
        headers: {
          /*'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json'*/
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
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