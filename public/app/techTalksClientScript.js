var app = angular.module("techTalkApp", ['ngRoute', 'ngAnimate', 'myDirectives']);

app.constant('staticValues', {
    categories: ["JavaScript", "jQuery", "HTML5", "CSS3", "Design"],
    levels: ["Beginner", "Jump Start", "Intermediate", "Advanced"],
    ratings: ["Poor", "Satisfactory", "Good", "Very Good", "Excellent"]
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/list', { templateUrl: 'templates/TalkList.html', controller: 'HomeCtrl' })
        .when('/add', { templateUrl: 'templates/AddTalk.html', controller: 'AddTalkCtrl' })
        .when('/edit/:title', { templateUrl: 'templates/EditTalk.html', controller: 'EditTalkCtrl' })
        .when('/directives', { templateUrl: 'templates/Directives.html', controller: 'DirectivesCtrl' })
        .otherwise({ redirectTo: '/list' });
});

app.directive('uniqueTechTalk', function (techTalkDataSvc) {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {

            elem.bind('blur', function (e) {
                var title = elem.val();
                techTalkDataSvc.getATalk(title).then(function (data) {
                    if (data == "null" || data == "") {
                        ctrl.$setValidity('uniqueTechTalk', true);
                    }
                    else {
                        ctrl.$setValidity('uniqueTechTalk', false);
                    }
                }, function (err) {
                    ctrl.$setValidity('uniqueTechTalk', true);
                });
            });

        }
    }
});

app.directive('busyIndicator', function () {

    return {
        restrict:'EA',
        template: '<div class="progress progress-striped active" style="width: 50%;"><div role="progressbar" class="progress-bar" style="width: 100%;"></div></div>'
    };

});

app.controller("DirectivesCtrl", function ($scope, shopping_cart_operations) {
    $scope.date = "01/22/2013";
    $scope.someVal = 2;
    $scope.text = "Ravi";

    $scope.increment = function () {
        $scope.someVal++;
    };

    $scope.items = shopping_cart_operations.items;
    $scope.item = {};

    $scope.addItem = function (item) {
        shopping_cart_operations.addItem(item);
        $scope.item = {};
        $scope.itemForm.$setPristine();
    };

    $scope.totalPrice = shopping_cart_operations.totalPrice;

    $scope.removeItem = function (index) {
        shopping_cart_operations.removeItem(index);
    };

    $scope.mySortFunction = function (item) {
        if (isNaN(item[$scope.sortExpression]))
            return item[$scope.sortExpression];
        return parseInt(item[$scope.sortExpression]);
    };

    $scope.name = /^[a-zA-Z ]*$/;

    $scope.integerval = /^\d*$/;
});

app.factory("techTalkDataSvc", function ($http, $q) {
    var apiPath = "api/techTalks";

    getAllTalks = function () {
        var deferred = $q.defer();

        $http.get(apiPath).success(function (data) {
            deferred.resolve(data);
        }).error(function (err) {
            deferred.reject("An error occured while fetching data");
        });

        return deferred.promise;
    };

    getATalk = function (title) {
        var deferred = $q.defer();

        $http.get(apiPath + "/" + title).success(function (data) {
            deferred.resolve(data);
        }).error(function (err) {
            deferred.reject("An error occured while fetching data");
        });

        return deferred.promise;
    };

    addTalk = function (talk) {
        var deferred = $q.defer();

        $http.post(apiPath, talk).success(function () {
            deferred.resolve();
        }).error(function (err) {
            deferred.reject(err);
        });

        return deferred.promise;
    };

    editTalk = function (talk) {
        var deferred = $q.defer();

        $http.put(apiPath + "/" + talk.title, talk).success(function () {
            deferred.resolve();
        })
            .error(function (err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    deleteTalk = function (title) {
        var deferred = $q.defer();

        $http.delete(apiPath + "/" + title).success(function () {
            deferred.resolve();
        })
            .error(function (err) {
                deferred.reject(err);
            });

        return deferred.promise;
    };

    return {
        getAllTalks: getAllTalks,
        getATalk: getATalk,
        addTalk: addTalk,
        editTalk: editTalk,
        deleteTalk: deleteTalk
    };

});

app.filter('duration', function () {
    return function (item) {
        return item + " Hr";
    };
});

app.controller("HomeCtrl", function ($scope, $window, techTalkDataSvc) {

    function getTalks() {
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

    getTalks();
});

app.controller("AddTalkCtrl", function ($scope, $window, techTalkDataSvc, staticValues) {
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

app.controller("EditTalkCtrl", function ($scope, $routeParams, $window, techTalkDataSvc, staticValues) {
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