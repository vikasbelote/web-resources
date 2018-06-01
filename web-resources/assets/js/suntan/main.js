var suntanApp = angular.module("suntanApp", ['ngRoute']);

suntanApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './dashboard/dashboard-content.html',
            controller: 'DashboardController'
        })
		.when('/add-investment/:investmentId?', {
			templateUrl: './investment/add.html',
			controller: 'AddInvestmentController'
		})
		.when('/my-investment', {
			templateUrl: '/investment/my.html',
			controller: 'MyInvestmentController'
		})
		.when('/edit-profile', {
			templateUrl: '/profile.html',
			controller: 'DashboardController'
		})
		.otherwise({
			redirectTo: '/'
		});
});