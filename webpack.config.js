var webpack =require('webpack')
var path = require('path')

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');


module.exports={
    entry:'./src/js/YYNotify.js',
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
                test: /\.js$/,
                include:path.resolve(__dirname, "./src/sass/"),
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
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
        })
    ])
}