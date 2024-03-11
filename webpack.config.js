var path = require('path');

module.exports = {
    entry: ['./frontend/src/main/js/app.js', './frontend/src/main/js/client.js', './frontend/src/main/js/follow.js', './frontend/src/main/js/resources/static/main.css'],
    // devtool: 'sourcemaps',
    // cache: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './backend/src/main/resources/static/built'),
        filename: 'bundle.js'
        // path: __dirname,
        // filename: './backend/src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                // test: path.join(__dirname, '.'),
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, './frontend/src/main/js'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, './frontend/src/main/js/resources/static'), // specify the path to your CSS file
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};