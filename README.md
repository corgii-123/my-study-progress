# 桩筒复合基础课题进展

> 为了更好地记录本人硕士阶段的课题“桩筒复合基础的结构设计与承载特性研究”，于是编写此项目，不仅能将课题进展情况统一起来，而且方便日后查看及向导师汇报工作进展。

**使用的技术栈**: Vue3 + TypeScript + Vite + Sass + Element Plus。

项目进展: 
1. 项目初始化配置：使用Vite安装Vue3和TypeScript，依照Element Plus官方文档配置按需导入和中文语言。
2. UI组件的编写，主要是调样式，使用媒体查询和flex布局完成响应式布局的`css`样式编写: `@media screen and (max-width: 500px)`，对于某些特殊情况如果要兼容移动端则需要使用: `window.innerwidth < 500`的变量进行判断。
3. Header组件、Main组件的编写，不需要采用`vue-router`的原因在于`elementUI`内置的tab组件可以达到单页面的切换效果，而且需要切换的tab栏并不多，所以不使用。
4. 后端部分的代码需要考虑到使用了静态资源服务器，所以express设置`app.use(express.static('./dist'))`才可开启对index.html的访问。
5. 完成了部分前端工作后尝试初次使用Vite打包代码会发现一些坑。首先是`ElementUI`中的类型声明不够完善，因此打包的时候需要打开`skipLibCheck: true`；其次由于使用了`vite-plugin-style-import`插件，生产环境下的`ElementUI`的国际化应该使用`locale.use(lang)`；由于Vite本身不像Webpack那样使用`html-loader`对`<img />`中的url进行静态资源打包，所以Vite中需要使用模块化的方式`import xx from `图片资源，再交给`<img />`使用。