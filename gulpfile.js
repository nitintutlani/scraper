var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean:build', function () {
  return del([
    tsProject.config.compilerOptions.outDir + '/*',
	tsProject.config.compilerOptions.outDir + '/.*'
  ]);
});

gulp.task('compile', function () {
	var tsResult = tsProject.src()
		.pipe(ts(tsProject));
	return tsResult.js.pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
});

gulp.task('test', function () {
    return gulp.src(tsProject.config.compilerOptions.outDir + '/**/*.spec.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('build:incremental', ['compile'], function() {
	gulp.start('test');
});

gulp.task('build:clean', ['clean:build'], function() {
	gulp.start('build:incremental');
});

gulp.task('watch', function() {
	gulp.watch(tsProject.config.files, ['build:incremental']);
});

gulp.task('default', ['build:clean'], function() {
	gulp.start('watch');
});
