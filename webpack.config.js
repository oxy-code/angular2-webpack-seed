var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: {
		'app': './src/main.ts',
		'polyfills': [
			'core-js/es6',
			'core-js/es7/reflect',
			'zone.js/dist/zone'
		]
	},
	output: {
		path: './dist',
		filename: '[name].[hash].js'
	},
	module: {
		loaders: [
			{test: /\.component.ts$/, loader: 'ts!angular2-template'},
			{test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts'},
			{test: /\.html$/, loader: 'raw'},
      		{test: /\.css$/, loader: 'raw' },
      		{test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
		]
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.html', '.css']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'polyfills'
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.DefinePlugin({
			app: {
				environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
			}
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			Hammer: "hammerjs/hammer"
		})
	]
	
};