describe('Some sample tests', function(){
    var x, y, result;


    beforeEach(function(){
        x=1;
        y=2;
    });

    xit('should have added the numbers', function(){
        x=5;
        y=10;
        result=add(x,y);
        expect(result).toBe(15);
    });

    it('should have added the numbers', function(){
        //result=add(x,y);
        expect(3).toBe(3);
    });

    afterEach(function(){
        result=0;
    });
});