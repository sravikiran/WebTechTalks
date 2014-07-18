describe('Some sample tests', function(){
    var x, y, result;

    beforeEach(function(){
        x=1;
        y=2;
    });

    it('should have added the numbers', function(){
        result=add(x,y);
        expect(result).toBe(3);
    });

    afterEach(function(){
        result=0;
    });
});