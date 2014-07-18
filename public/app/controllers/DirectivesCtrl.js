angular.module("techTalkApp").controller("DirectivesCtrl", function ($scope, shopping_cart_operations) {
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