const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const  CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const { Template } = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    
    plugins: [new HtmlWebpackPlugin({title: "My Webpack App", template: "src/index.html"}),
                new MiniCssExtractPlugin(),
                new CopyWebpackPlugin({
                    patterns: [
                      { from: "./src/Assets/Images/", to: "Assets/Images" },
                    ],
                }),
            ],
    devServer: {
        watchFiles: ["src/**/*.html", "src/**/*.js", "src/**/*.scss", "src/**/*.png", "src/**/*.svg"],
        static: {
            directory: path.resolve(__dirname, './Assets'),
        }
    
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }

        ],
    } 
}; 