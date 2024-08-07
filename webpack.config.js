const path = require('path');

module.exports = {
    entry: {
        AddProduct: './src/js/AddProduct.tsx',
        ListProducts: './src/js/ListProducts.tsx',
        Footer: './src/js/shared/Footer.tsx',
    },
    output: {
        path: path.resolve(__dirname, './src/core/view/dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true, // Speed up compilation by skipping type checking
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
};
