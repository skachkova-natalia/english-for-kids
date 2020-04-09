const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8080
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: ['file-loader']
            }
        ]
    }
}