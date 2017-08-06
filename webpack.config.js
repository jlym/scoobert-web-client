var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    // The entry point of the application. Webpack uses this information to create the dependency
    // tree which is used to bundle the scripts.
    entry: ["./src/index.tsx"],

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Scoobert',
            template: 'public/index.hbs'
        })
    ],
    // This information is used to give the name of the bundled file and the location of the
    // bundled file.
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // The extensions which will be imported or required in the application scripts.
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
        }, { 
            enforce: "pre", 
            test: /\.js$/, 
            loader: "source-map-loader" 
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },

    // When importing a module whose path matches one of the following, just assume a 
    // corresponding global variable exists and use that instead. This is important because 
    // it allows us to avoid bundling all of our dependencies, which allows browsers to cache 
    // those libraries between builds.
    /*
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/
};
module.exports = config;
