var assert = require("assert");
var chai_1 = require("chai");
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
            assert.equal(1, [1, 2, 3].indexOf(2));
            assert.equal(2, [1, 2, 3].indexOf(3));
        });
    });
});
describe('Simple expect', function () {
    it('string match', function () {
        chai_1.expect('nitin').to.be.equal('nitin');
    });
});
