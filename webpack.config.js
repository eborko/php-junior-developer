const path = require('path');

module.exports = {
    entry: {
        AddProduct: './src/js/add-product.jsx',
        ListProducts: './src/js/list-products.jsx',
        Footer: './src/js/shared/footer.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'src/core/view/dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
