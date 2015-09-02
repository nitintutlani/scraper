var gulp = require('gulp');

var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function () {
	var tsResult = tsProject.src()
		.pipe(ts(tsProject));
	return tsResult.js.pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
});

var mocha = require('gulp-mocha');

gulp.task('test', function () {
    return gulp.src(tsProject.config.compilerOptions.outDir + '/**/*.spec.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['build', 'test'], function() {
	gulp.watch(tsProject.config.files, ['build', 'test']);
});
