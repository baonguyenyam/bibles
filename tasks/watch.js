module.exports = function (gulp, $, browserSync) {
	gulp.task('watch', function () {
		gulp.watch("./src/**/*.*").on('change', browserSync.reload);
	});
};
