const path = require('path');
const package = require('./package.json');

module.exports = {
    mode: 'production',
    entry: './src/index.ts', // 插件主入口
    output: {
        filename: `${package.name}.js`, // 输出文件名为项目名
        path: path.resolve(__dirname, 'js/plugins'),
        libraryTarget: 'window', // 让插件挂载到全局
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};