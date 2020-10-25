'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './app/initialize.js',

    output: {
	path: path.join(__dirname, '/output'),
	filename: 'bundle.js',
    },

    module: {
	rules: [
	    {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: {
		loader: "babel-loader"
		}
	    },
	    {
		test: /\.html$/,
		use: [
		{
		    loader: "html-loader"
		}
		]
	    },
	    {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
		    "file-loader"
		]
	    },
	    {
		test: /\.css$/,
		use: [
		    "style-loader",
		    'css-loader'
		]
	    }
	]
    },
    plugins: [
	new HtmlWebpackPlugin({
	    template: "./app/assets/index.html"
	}),
	new MiniCssExtractPlugin({
	    filename: "[name].css",
	    chunkFilename: "[id].css"
	})
    ]
};
