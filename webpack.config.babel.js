const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ENV = process.env.NODE_ENV || 'development';

const CSS_MAPS = ENV!=='production';

module.exports = {
  mode : ENV,
  optimization: {
			minimizer: [
				new TerserPlugin(),
			],
	},
	context: path.resolve(__dirname, "src"),
	entry: './index.js',

	output: {
		path: path.resolve(__dirname, "pkg"),
		publicPath: '/',
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.jsx', '.js'],
		modules: [
			path.resolve(__dirname, "src/lib"),
			path.resolve(__dirname, "node_modules"),
			'node_modules'
		],
		alias: {
			components: path.resolve(__dirname, "src/components"),    // used for tests
			style: path.resolve(__dirname, "src/style"),
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: path.resolve(__dirname, 'src'),
				enforce: 'pre',
				use: 'source-map-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},

	stats: { colors: true }
};
