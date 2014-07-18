angular.module("techTalkApp").controller("AddTalkCtrl", function ($scope, $window, techTalkDataSvc, staticValues) {
    $scope.categories = staticValues.categories;
    $scope.levels = staticValues.levels;
    $scope.ratings = staticValues.ratings;

    $scope.addTalk = function () {

        techTalkDataSvc.addTalk($scope.newTalk).then(function () {
            $scope.newTalk = {};
            $scope.newTalkForm.$setPristine();
            redirectToList();
        }, function (err) {
            $window.alert(err);
        });
    };

    $scope.cancelAddingTalk = function () {
        $scope.newTalk = {};
        $scope.newTalkForm.$setPristine();
    };

    function redirectToList() {
        $window.location.href = "#/list";
    };

    $scope.integerval = /^\d*$/;
});
