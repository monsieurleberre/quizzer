module.exports = {
    entry: {
        main:[
            "./main.js"
        ]
    },
    output: {
        filename: "./public/main.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    }

}