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

app.filter('duration', function () {
    return function (item) {
        return item + " Hr";
    };
});

