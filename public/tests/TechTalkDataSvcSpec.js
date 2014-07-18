describe('techTalkDataSvc tests', function(){

    var techTalkDataSvcObj, httpBackend, q;
    var talks = [{ "title": "jQuery Awesomeness", "speaker": "John", "category": "jQuery", "duration": "2", "level": "Beginner", "rating": "Very Good" },
        { "title": "CSS3 transitions", "speaker": "Kathleen", "category": "CSS3", "duration": "3", "level": "Intermediate", "rating": "Good" },
        { "title": "Advanced JavaScript", "speaker": "Scott", "category": "JavaScript", "duration": "1", "level": "Jump Start", "rating": "Excellent" },
        { "title": "BDD in web? Yes, we can!", "speaker": "Jon", "category": "JavaScript", "duration": "2", "level": "Advanced", "rating": "Very Good" },
        { "title": "Design concepts for developers", "speaker": "Mark", "category": "CSS3", "duration": "2", "level": "Beginner", "rating": "Very Good" }];

    beforeEach(function(){
        module("techTalkApp");
    });

    beforeEach(inject(function($httpBackend, $q, techTalkDataSvc){
        httpBackend=$httpBackend;
        techTalkDataSvcObj=techTalkDataSvc;
        q=$q;
    }));

    it('should call send a request to get all talks', function(){
        var allTalks;
        techTalkDataSvcObj.getAllTalks();
        httpBackend.expectGET("api/techTalks").respond(talks);

        httpBackend.flush();
    });

    it('should respond with data when API call is successful', function(){
        var allTalks;
        techTalkDataSvcObj.getAllTalks().then(function(data){
            allTalks=data;
        });
        httpBackend.expectGET("api/techTalks").respond(talks);

        httpBackend.flush();

        expect(allTalks.length).not.toBe(0);
        expect(allTalks).toEqual(talks);
    });

    it('should respond with an error text when API call fails', function(){
        var allTalks, msg="";
        techTalkDataSvcObj.getAllTalks().then(function(data){
            allTalks=data;
        },function(error){
            msg=error;
        });

        httpBackend.expectGET("api/techTalks").respond(404);

        httpBackend.flush();

        expect(msg).not.toEqual("");
        expect(msg).toEqual("An error occured while fetching data");
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
});