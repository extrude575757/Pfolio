const path = require('path');
///console.log('yonigga'+path.join(__dirname, 'public'));
/// Whenever you see a file that ends in .js run it threw babel & ignore the node_modules folder
// sass-loader uses node-sass to run the scss file
// the ? mark is used to make the s optional and it so test looks for css or scss files
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/ 
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]  
    },  
    devtool: 'cheap-module-eval-source-map', // Source maps help webpack find where the error was in the code instead of where it was in webpack// With devtool's source maps it makes debugging much faster 
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }                        

   };    