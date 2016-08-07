var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task("default", function () {
	return gulp.src('app/app.js')
		.pipe(webpack({
			output: {
				filename: 'bundle.js'
			},
			watch: true,
			module: {
				loaders: [
					{
						test:   /\.js$/,
						loader: 'babel',
						include: __dirname + '/app',
						query: {
							presets: ['es2015', 'react']
						}
					},

					{
						test: /\.json/,
						loader: 'json',
						include: __dirname + '/app'
					}
				]
			}
		}))
		.pipe(gulp.dest('public/js/'));
});