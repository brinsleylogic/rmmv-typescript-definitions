var gulp = require("gulp")
	concat = require("gulp-concat");

gulp.task("build", function()
{
	return gulp.src("ts_definitions/**/**.d.ts")
		.pipe(concat("rmmv.d.ts"))
		.pipe(gulp.dest("build"));
});