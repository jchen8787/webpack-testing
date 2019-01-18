var HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'webpack testing',
            template: 'src/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        }
    }
}
