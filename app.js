var myApp = angular.module("myApp",[]);
myApp.controller("MyController", function($scope){
    $scope.fruitsMap = Immutable.Map({
        1:"Apple", 2:"Orange"
    });
    $scope.fruitsMap = $scope.fruitsMap.set(3, "Grapes");
});