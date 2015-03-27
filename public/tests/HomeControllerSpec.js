describe('HomeController Tests', function(){
    //Mocks
    var techTalksDataMock, windowMock, controller, scope, statics;
    var talks = [{ "title": "jQuery Awesomeness", "speaker": "John", "category": "jQuery", "duration": "2", "level": "Beginner", "rating": "Very Good" },
        { "title": "CSS3 transitions", "speaker": "Kathleen", "category": "CSS3", "duration": "3", "level": "Intermediate", "rating": "Good" },
        { "title": "Advanced JavaScript", "speaker": "Scott", "category": "JavaScript", "duration": "1", "level": "Jump Start", "rating": "Excellent" },
        { "title": "BDD in web? Yes, we can!", "speaker": "Jon", "category": "JavaScript", "duration": "2", "level": "Advanced", "rating": "Very Good" },
        { "title": "Design concepts for developers", "speaker": "Mark", "category": "CSS3", "duration": "2", "level": "Beginner", "rating": "Very Good" }];

    //Data
    var techTalks, q, passPromise;

    beforeEach(function () {
        module("techTalkApp");
    });

    beforeEach(inject(function ($rootScope, $controller, $q) {
        controller = $controller;

        scope = $rootScope;

        techTalks = talks;
        q=$q;

        windowMock = {
            alertMessage: "",
            alert: jasmine.createSpy('alert').and.callFake(function (msg) {
                this.alertMessage = msg;
            })
        };

        techTalksDataMock = {
            getAllTalks: jasmine.createSpy('getAllTalks').and.callFake(function(){
                if(passPromise){
                    return q.when(talks);
                }
                else{
                    return q.reject("Promise failed!!!");
                }
            })
        };

    }));

    describe('HomeCtrl', function () {
        var homeScope, homeCtrl;

        function createController() {
            homeScope = scope.$new();
            homeCtrl = controller('HomeCtrl', { $scope: homeScope, $window: windowMock, techTalkDataSvc: techTalksDataMock });
            controller('AddTalkCtrl',{ $scope: homeScope, $window: windowMock, techTalkDataSvc: techTalksDataMock });
        }

        beforeEach(function () {
            createController();
        });

        afterEach(function () {
            windowMock.alertMessage = "";
        });

        it("Should call getAllTalks function on creation of controller", function () {
            expect(techTalksDataMock.getAllTalks).toHaveBeenCalled();
        });

        it("should set talks when promise passes", function(){
            passPromise=true;
            homeScope.getTalks();
            homeScope.$digest();

            expect(homeScope.talks.length).not.toBe(0);
            expect(homeScope.talks).toEqual(talks);
        });

        it('Should alert the error message to the user if call to service is failed', function () {
            passPromise=false;
            homeScope.getTalks();
            homeScope.$digest();

            expect(windowMock.alert).toHaveBeenCalled();
            expect(windowMock.alertMessage).not.toBe("");
        });

    });
});
