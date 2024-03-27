const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'react-material-web',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
}
