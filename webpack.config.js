var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/app.js',
	output: {
		path: 'public/js',
		filename: 'bundle.js'
	},
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
};