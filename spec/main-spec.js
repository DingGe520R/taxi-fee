const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    var kilometer = 10;
    var stoptime = 2;
    it('根据里程以及停车时间求出车费', function () {

        var result = main(kilometer, stoptime);
        expect(result).toEqual(14);
    });
});
