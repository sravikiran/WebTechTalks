angular.module("techTalkApp").directive('busyIndicator', function () {

    return {
        restrict:'EA',
        template: '<div class="progress progress-striped active" style="width: 50%;"><div role="progressbar" class="progress-bar" style="width: 100%;"></div></div>'
    };

});