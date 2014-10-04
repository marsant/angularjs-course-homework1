app.controller('ReadController', ['$scope', 'tShirt', function ($scope, tShirt) {
	$scope.loading = true;
    $scope.success = false;
    $scope.error = false;

    tShirt.read().then(
    	function(data) {
			$scope.tShirts = data;
        	$scope.loading = false;
        	$scope.success = true;
    	},
    	function(data) {
    		$scope.loading = false;
        	$scope.error = true;
    	});
}]);