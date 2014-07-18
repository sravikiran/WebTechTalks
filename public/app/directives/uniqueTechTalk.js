angular.module("techTalkApp").directive('uniqueTechTalk', function (techTalkDataSvc) {
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