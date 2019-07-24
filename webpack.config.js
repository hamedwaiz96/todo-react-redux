var path = require('path');

module.exports = {
<<<<<<< HEAD
    context: __dirname,
    entry: './frontend/todo_redux.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
=======
    entry: './frontend/todo_redux.jsx',
    output: {
        filename: './bundle.js'
>>>>>>> 2ebbabe2f7236bffd53229544ffe7f56bec869e1
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
}