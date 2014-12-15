gulp-dotjsify
====================

Gulp plugin for pre-compiling doT.js templates

Usage
====================
Installing ``` gulp-dotjsify ```

```
npm install gulp-dotjsify --save-dev
```

Options
====================

###options.type

Type: ``` String ```

This options specifies the output type that will be used. Available types
* ``` amd ``` - AMD modules
* ``` cjs ``` - CJS modules
* ``` es6 ``` - ES6 modules

####usages

You can use the plugin in your ```gulpfile.js```

```javascript
var gulp = require('gulp');
var dotjsify = require('gulp-dotjsify');

gulp.task('default', function () {
  gulp.src('./path/to/dotjs/templates/*.dot')
    .pipe(dotjsify({
      type: 'cjs'
    }))
    .pipe(gulp.dest('./precompiled/result'));
});
```