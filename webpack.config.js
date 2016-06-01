var path = require('path');
var webpack = require('webpack')

module.exports = {
    devtool: 'eval', 
    //devtool: 'eval-source-map', 
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/main'
        ]
    },
    output: {
        path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
    },
    pulgins:[
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoErrorsPlugin()
    ],
    module:{
        loaders:[
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, "src"),
                  
                    ],
                loaders: ["react-hot","babel"]
            }
        ]
    }

}