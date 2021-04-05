const loader = require("sass-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ],
    module:{
        rules:[
            {
                test: /\.js$|jsx/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "/assets/images/[name].[ext]",
                    }
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "/assets/webfonts/[name].[ext]",
                    }
                },
            },
            {
                test:/\.(s[ac]ss|css)$/i,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    }
}
