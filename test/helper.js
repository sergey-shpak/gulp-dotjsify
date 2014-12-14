var path = require('path')
    , fs = require('fs')
    , should = require('should')
    , plugin = require('../')
    , gutil = require('gulp-util');

module.exports  = function (type, callback) {

    var stream = plugin({type:type})
        , expectedContent = fs.readFileSync(path.join('test', 'expected', type, 'template.js'), 'utf8')
        , filePath = path.join('test', 'fixtures', 'fixture.dot');

    stream.on('data', function (file) {
        var fileContent = file.contents.toString();
        should(file.isBuffer()).ok;
        fileContent.should.equal(expectedContent);
        callback();
    });

    stream.write(new gutil.File({
        path: filePath,
        cwd: path.join('test', 'fixtures'),
        base: path.dirname(filePath),
        contents: fs.readFileSync(filePath)
    }));
};
