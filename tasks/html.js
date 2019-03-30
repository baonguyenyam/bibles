module.exports = function (gulp, $, browserSync) {
    let prettify = require('gulp-html-prettify');
	gulp.task('html', function () {
        return gulp.src('./src/**/*.{html,htm}')
            .pipe(prettify({indent_char: ' ', indent_size: 2}))
            .pipe(gulp.dest('./src'))
	});
};
