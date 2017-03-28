angular.module('userProfiles').controller('MainController', function($scope, mainService) {

    $scope.thisAppIsBroken = "This angular app is working Nick Celaya";

    console.log($scope.thisAppIsBroken);




    $scope.getUsers = function() {
        $scope.users = mainService.getUsers();
    }
    $scope.getUsers();

    // The above function is a way to get data to the view, only when invoked

    $scope.users = mainService.getUsers();

    // $scope.users will automatically put the data on view

    $scope.toggleFavorite = mainService.toggleFavorite;






    // end of controller
});
