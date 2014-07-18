angular.module("techTalkApp").controller("HomeCtrl", function ($scope, $window, techTalkDataSvc) {

    $scope.getTalks=function() {
        $scope.isListLoaded = false;
        $scope.talks = [];
        techTalkDataSvc.getAllTalks().then(function (data) {
            $scope.talks = data;
        }, function (errMsg) {
            $window.alert(errMsg);
            $scope.error = "Some error occured";
        }).then(function () {
            $scope.isListLoaded = true;
        });
    };

    $scope.getTalks();
});
