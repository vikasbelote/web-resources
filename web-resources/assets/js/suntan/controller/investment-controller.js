suntanApp.controller('AddInvestmentController', function($scope, $http, $rootScope, $routeParams, NotificationService) {
    
    if ($routeParams.investmentId) {  
        
        var res = $http.get('/investment-service/get-investment?investmentId=' + $routeParams.investmentId);
        res.success(function(data, status, headers, config) {
            $scope.investment = data;
		});
		res.error(function(data, status, headers, config) {
            NotificationService.danger();
		});
    }

    $scope.saveInvestment = function(investment) {
        console.log("Investment controller");
        console.log(investment)
        console.log(JSON.stringify(investment));

        investment.personId = $rootScope.userData.personModel.personId;
        //console.log(investment);

        var res = $http.post('/investment-service/add-investment', investment);
		res.success(function(data, status, headers, config) {
            $scope.message = data;
            //console.log(data)
            NotificationService.success();
		});
		res.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
            NotificationService.danger();
		});
    }
});

suntanApp.controller('MyInvestmentController', function($scope, $http, $rootScope) {
    $scope.init = function() {
        var personId =  parseInt($rootScope.userData.personModel.personId);
        var res = $http.get('/investment-service/my-investments?personId=' + personId);
		res.success(function(data, status, headers, config) {
            //console.log(data)
            $scope.investments = data;
		});
		res.error(function(data, status, headers, config) {
            NotificationService.danger();
        });
        //TableManageDefault.init();
    }
    $scope.init();
});