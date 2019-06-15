###框架使用版本
##webpack 4.34.0
##angularjs 1.7.8 + 路由@uirouter/angularjs 1.0.22 + 网络请求angular-resource 1.7.8
##bootstrap 4.3.1

**加载CSS**
npm install --save-dev style-loader css-loader
**加载图片、字体**
npm install --save-dev file-loader

//npm install --save-dev raw-loader
npm install --save-dev html-loader
**设定 HtmlWebpackPlugin**
npm install --save-dev html-webpack-plugin
**清理 /dist 文件夹  clean-webpack-plugin**
npm install clean-webpack-plugin --save-dev

**使用 source map**
devtool: 'inline-source-map',

**开发工具**
npm install --save-dev webpack-dev-server

**配置**
npm install --save-dev webpack-merge

**代码压缩**
npm install --save-dev uglifyjs-webpack-plugin


**安装angularjs**
npm install --save angular
**angularjs路由 angular-ui-router**
npm install --save @uirouter/angularjs
**angularjs http请求**
npm install --save angular-resource

**安装bootstrap**
npm install --save jquery popper.js
npm install --save-dev bootstrap
**图标**
npm install --save-dev feather-icons
**安装babel**
npm install --save-dev @babel/core @babel/cli @babel/preset-env