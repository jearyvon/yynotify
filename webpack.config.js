var webpack =require('webpack')
var path = require('path')

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var packCSS = new ExtractTextPlugin('./dist/css/[name].min.css');
module.exports={
    entry:'./src/js/notify.js',
    output:{
        path: BUILD_PATH,
        library:'YYNotify',
        libraryTarget:'umd',
        publicPath: '/dist/',
        filename:'[name].notify.js'
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                loaders:ExtractTextPlugin.extract(["style-loader", "css-loader"])
            },
            {
                test: /\.scss$/,
                include:path.resolve(__dirname, "./src/sass/"),
                loaders:["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/sass/")]
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    plugins: [
        packCSS
    ],
    devtool: '#source-map'
}
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ])
}