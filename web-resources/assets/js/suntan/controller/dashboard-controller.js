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