var path = require('path');

module.exports = {
    context: path.resolve(__dirname,'./src'),
    entry: {
        app: './index'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: ['babel-loader']
            }
        ]
    }
}