var app = angular.module('tshirtApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
        	controller: 'MainController',
        	templateUrl: 'views/main.html',        	
    	})
        .when('/read', {
            controller: 'ReadController',
            templateUrl: 'views/read.html'          
        })
    	.when('/create', {
        	controller: 'CreateController',
        	templateUrl: 'views/create.html'
        	
    	})
      	.otherwise({
        	redirectTo: '/'
      	});
});