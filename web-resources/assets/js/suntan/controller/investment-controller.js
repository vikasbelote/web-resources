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
            //alert( "failure message: " + JSON.stringify({data: data}));
            NotificationService.danger();
		});
    }
});

suntanApp.controller('MyInvestmentController', function($scope, $http, $rootScope, NotificationService) {
    $scope.init = function() {
        var personId =  parseInt($rootScope.userData.personModel.personId);
        var res = $http.get('/investment-service/my-investments?personId=' + personId);
		res.success(function(data, status, headers, config) {
            //console.log(data)
            $scope.investments = data;
		});
		res.error(function(data, status, headers, config) {
		    //alert('not done');
            NotificationService.danger();
        });
        //TableManageDefault.init();
    }
    $scope.init();
});

suntanApp.controller('ProfileController', function($scope, $http, $rootScope, NotificationService) {
    $scope.init = function() {
        var personId =  parseInt($rootScope.userData.personModel.personId);
        var res = $http.get('/investment-service/my-profile?personId=' + personId);
		res.success(function(data, status, headers, config) {
            //console.log(data)
            $scope.personDomain = data;
		});
		res.error(function(data, status, headers, config) {
		    //alert('not done');
            NotificationService.danger();
        });
        //TableManageDefault.init();
    }
    $scope.init();

    $scope.saveProfile = function(personDomain) {
            console.log("Profile controller");
            console.log(personDomain)
            console.log(JSON.stringify(personDomain));

            //investment.personId = $rootScope.userData.personModel.personId;
            //console.log(investment);

            var res = $http.post('/investment-service/edit-profile', personDomain);
    		res.success(function(data, status, headers, config) {
                $scope.message = data;
                //console.log(data)
                NotificationService.success();
    		});
    		res.error(function(data, status, headers, config) {
                //alert( "failure message: " + JSON.stringify({data: data}));
                NotificationService.danger();
    		});
        }
});

suntanApp.filter('blankNULL', function () {
  return function (text) {

    if(text=="NULL")
        return "";

    return text;
  };
});

/*$scope.logout = function() {
    logout($scope.userData);
}
function logout(params) {
    var req = {
        method: 'DELETE',
        url: "oauth/token"
    }
    $http(req).then(
        function(data){
            $cookies.remove("access_token");
            window.location.href="login";
        },function(){
            console.log("error");
        }
    );
}*/

/*
function logout() {
    this.http.post('logout', {}).finally(() => {
        self.authenticated = false;
        this.http.post('http://localhost:8091/logout', {}, {withCredentials:true})
            .subscribe(() => {
                console.log('Logged out');
        });
    }).subscribe();
};*/
