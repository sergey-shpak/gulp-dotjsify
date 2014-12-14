var helper = require('./helper');
describe('Gulp dotjsify: ', function () {
    it('should precompile templates to amd', function (done) {
        helper('amd', done);
    });
    it('should precompile templates to cjs', function (done) {
        helper('cjs', done);
    });
    it('should precompile templates to es6', function (done) {
        helper('es6', done);
    });
});
