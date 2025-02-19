const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        main: './src/main.js',
        sub: './src/sub.js',
        gunchim: './src/gunchim.js'    
    },
    output: {
        //기본값으로 설정되는 옵션이 있긴함
        //dist : distribution의 약자
        //path: path.resolve(__dirname, 'dist'),
        clean:true
    }, // 출력
    module: {
        rules: [
          {
            test: /\.s?css$/,
            use: [
              // 순서 중요!
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.jsx?$/,
            use: 'swc-loader'
          },
          {
            test: /\.(png|jpe?g|svg|gif|webp)$/i, // i 옵션 - 대소문자 구분 없음
            type: 'asset/resource' // type을 통해 Webpack에 내장된 로더(Builtin Loader) 명시
          }
        ]
      },
      plugins: [
        new HtmlPlugin({
          template: './src/index.html'
        }),
        new CopyPlugin({
          patterns: [{ from: 'static' }]
        })
      ]
  }