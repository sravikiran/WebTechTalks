var app = angular.module("myDirectives", ['ui.bootstrap']);

app.directive("greetPerson", function ($parse) {
    return {
        templateUrl: "public/templates/greetingTempl.html",
        link: function (scope, elem, attrs, ctrl) {
            var exp = $parse(attrs.greetPerson);
            function setGreetingMessage() {
                angular.element(elem.children()[0]).text(exp(scope));
            }

            scope.$watch(exp, function () {
                setGreetingMessage();
            });
        }
    }
});

app.service('shopping_cart_operations', function () {
    var items = [
        { Name: "Soap", Price: "25", Quantity: "10" },
        { Name: "Shaving cream", Price: "50", Quantity: "15" },
        { Name: "Shampoo", Price: "100", Quantity: "5" }
    ];
    this.addItem = function (item) {
        this.items.push(item);
    };
    this.totalPrice = function () {
        var total = 0;
        for (count = 0; count < this.items.length; count++) {
            total += this.items[count].Price * this.items[count].Quantity;
        }
        return total;
    };
    this.removeItem = function (index) {
        this.items.splice(index, 1);
    };

});
app.directive('validPrice', function () {
    return {
        require: "ngModel",
        link: function (scope, elm, attrs, ctrl) {

            var regex = /^\d{2,4}(\.\d{1,2})?$/;
            ctrl.$parsers.unshift(function (viewValue) {
                var floatValue = parseFloat(viewValue);
                if (floatValue >= 50 && floatValue <= 5000 && regex.test(viewValue)) {
                    ctrl.$setValidity('validPrice', true);
                }
                else {
                    ctrl.$setValidity('validPrice', false);
                }
                return viewValue;
            });
        }
    };
});

app.directive("datePicker", function ($parse) {
    return {
        link: function (scope, elem, attrs, ctrl) {
            var expression = $parse(attrs.ngModel);
            elem.datepicker({
                dateFormat: "mm-dd-yy",
                changeYear: true,
                changeMonth: true,
                onSelect: function (val) {
                    scope.$apply(function () {
                        scope[attrs.ngModel] = val;
                    });
                }
            });
        }
    }
});
