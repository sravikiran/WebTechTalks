var app = angular.module("techTalkApp", ['ngRoute', 'ngAnimate', 'myDirectives', 'myTemplates']);

app.constant('staticValues', {
    categories: ["JavaScript", "jQuery", "HTML5", "CSS3", "Design"],
    levels: ["Beginner", "Jump Start", "Intermediate", "Advanced"],
    ratings: ["Poor", "Satisfactory", "Good", "Very Good", "Excellent"]
});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/list', { templateUrl: 'public/templates/TalkList.html', controller: 'HomeCtrl' })
        .when('/add', { templateUrl: 'public/templates/AddTalk.html', controller: 'AddTalkCtrl' })
        .when('/edit/:title', { templateUrl: 'public/templates/EditTalk.html', controller: 'EditTalkCtrl' })
        .when('/directives', { templateUrl: 'public/templates/Directives.html', controller: 'DirectivesCtrl' })
        .otherwise({ redirectTo: '/list' });
});

app.filter('duration', function () {
    return function (item) {
        return item + " Hr";
    };
});
