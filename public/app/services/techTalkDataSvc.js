angular.module("techTalkApp").factory("techTalkDataSvc", function ($http, $q) {
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
