suntanApp.controller('DashboardController', function($scope, $http, $rootScope) {
    $scope.init = function() {
        $http.get("/user")
        .then(function(response) {
            $rootScope.userData = response.data;
        });
    }
    $scope.init();


    $scope.editProfile = function() {
        alert(1);
    }
});

suntanApp.controller('DashboardContentController', function($scope, $http, $rootScope) {

var res = $http.get('/investment-service/getDashboardContent?personId=' + $rootScope.userData.personModel.personId);
        res.success(function(data, status, headers, config) {
            $scope.investmentList = data;
            var totalInvestment=0;
            var totalProfit=0;
            for(i=0;i<$scope.investmentList.length;i++){
            totalInvestment += $scope.investmentList[i].amount;
            totalProfit += $scope.investmentList[i].outcome;
            }
            $scope.totalInvestment = totalInvestment;
            $scope.totalProfit = totalProfit;
            $scope.percentage = (Math.round(totalProfit * 100) / totalInvestment).toFixed(2);

		});
		res.error(function(data, status, headers, config) {
            NotificationService.danger();
		});


});
