angular.module("techTalkApp").controller("EditTalkCtrl", function ($scope, $routeParams, $window, techTalkDataSvc, staticValues) {
    $scope.categories = staticValues.categories;
    $scope.levels = staticValues.levels;
    $scope.ratings = staticValues.ratings;

    function getTalkDetails() {
        techTalkDataSvc.getATalk($routeParams.title).then(function (data) {
            $scope.talk = data;
        }, function (err) {
            $window.alert(err);
        });
    }

    $scope.editTalk = function () {
        techTalkDataSvc.editTalk($scope.talk).then(function (data) {
            redirectToList();
        }, function (err) {
            $window.alert(err);
        });
    };

    $scope.deleteTalk = function () {
        techTalkDataSvc.deleteTalk($scope.talk.title).then(function (data) {
            redirectToList();
        }, function (err) {
            $window.alert(err);
        });
    };

    function redirectToList() {
        $window.location.href = "#/list";
    };

    getTalkDetails();
});