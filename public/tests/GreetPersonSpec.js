describe('GreetPerson directive tests', function(){
    var scope, httpBackend;
    var element;

    beforeEach(module('myDirectives'));

    beforeEach(inject(function($rootScope, $compile, $httpBackend){
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        scope.text = "Some text";

        $httpBackend.when('GET','greetingTempl.html')
            .respond('<div></div>');

        element = $compile('<div greet-person="text"></div>')(scope);
        $httpBackend.flush();
        scope.$digest();
    }));

    it('should have set template inside the element', function () {
        expect(element.find('div').length).toBe(1);
    });

    it('should have set text inside directive element', function () {
        expect(element.find('div').text()).toBe(scope.text);
    });

    it('should have set changed text inside directive element', function () {
        scope.text = "Some other text";
        scope.$digest();

        expect(element.find('div').text()).toBe(scope.text);
    });
});

