var suntanApp = angular.module("suntanApp", ['ngRoute']);

suntanApp.config(function($routeProvider) {
    $routeProvider
		.when('/my-investment', {
            templateUrl: './investment/my.html',
            controller: 'MyInvestmentController'
        })
		.when('/add-investment/:investmentId?', {
			templateUrl: './investment/add.html',
			controller: 'AddInvestmentController'
		})
		.when('/edit-profile', {
			templateUrl: './profile.html',
			controller: 'ProfileController'
		})
		.when('/', {
            templateUrl: './dashboard/dashboard-content.html',
            controller: 'DashboardController'
        })
		.otherwise({
			redirectTo: '/'
		});
});