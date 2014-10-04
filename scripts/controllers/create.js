app.controller('CreateController', ['$scope', 'tShirt', function ($scope, tShirt) {
	$scope.success = false;
	$scope.error = false;

    $scope.create = function(obj) {
		tShirt.create(obj).then(
			function(data) {
				console.log(data);
				$scope.success = true;
    		},
    		function(data) {
    			$scope.error = true;
    		});
	}
}]);