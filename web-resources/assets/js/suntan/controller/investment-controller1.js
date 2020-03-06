suntanApp.controller('MyInvestmentController', function($scope, $http, $rootScope, NotificationService) {
    $scope.init = function() {
        //var httpp = $injector.get('$http');
        //alert(httpp);
        var personId =  parseInt($rootScope.userData.personModel.personId);
        $http.get('/investment-service/my-investments?personId=' + personId)
                        .then(function(response){
                              alert(response.data);
                              $scope.investments = response.data;
                            }, function(error){
                              alert("Error occured ", error);
                             // alert( "failure message: " + JSON.stringify({response.data: data}));
                              NotificationService.danger();
                            });;
/*		res.success(function(data, status, headers, config) {
            alert(data);
            $scope.investments = data;
		});
		res.error(function(data, status, headers, config) {
		    alert( "failure message: " + JSON.stringify({data: data}));
            NotificationService.danger();
        });*/
        //TableManageDefault.init();
    }
    $scope.init();
});

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