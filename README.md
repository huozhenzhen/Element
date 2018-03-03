# 前言
本项目使用Element组件库  旨在自己实践vue相关技术，

# 技术栈

vue2 + vuex + vue-router + webpack + ES6 + axios + sass + flex + svg + easymock


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 目录结构
```
.
├── build  ---------------------------  webpack配置文件
├── config ---------------------------  项目打包路径
├── dist   ---------------------------  打包后资源                                   
├── node_modules ---------------------  依赖模块                         
├── src ------------------------------  源码目录									 
|   |—— api  ------------------------   整合接口                               
│   ├── assets -----------------------  静态资源
│   ├── components -------------------  组件
│   ├── icons ------------------------  svg合集
│   ├── router -----------------------  路由                           
│   ├── store  -----------------------  状态管理
│   ├── style  -----------------------  全局样式
│   ├── utils  -----------------------  工具类
│   ├── views  -----------------------  业务代码
│   ├── App.vue  ---------------------  页面入口文件
│   ├── main.js  ---------------------  程序入口
│   ├── permission.js  ---------------  权限处理
.
```
## 技术细节

* #### 跨域

	cors (Cross Origin Resource Sharing) 工作量主要在后端，每一次请求浏览器必须先以 OPTIONS 请求方式发送一个预请求，从而获知服务器端对跨源请求所支持 HTTP 方法。在确认服务器允许该跨源请求的情况下，以实际的 HTTP 请求方法发送那个真正的请求。推荐的原因是只要第一次配好了，之后不管有多少接口和项目复用就可以了，一劳永逸的解决了跨域问题，而且不管是开发环境还是测试环境都能方便的使用

	前端接口使用webapck的proxy或者nginx

	<table>
		<thead>
		<tr>
		<th style="text-align:center">开发环境</th>
		<th>生成环境</th>
		</tr>
		</thead>
		<tbody>
		<tr>
		<td style="text-align:center">cors</td>
		<td>cors</td>
		</tr>
		<tr>
		<td style="text-align:center">proxy</td>
		<td>nginx</td>
		</tr>
		</tbody>
	</table>
* #### easy-mock
	用于数据模拟，看一下文档就会，非常方便。[官网](https://easy-mock.com)及[相关文章](https://juejin.im/post/58ff1fae61ff4b0066792f6e)
* #### 路由懒加载

	```
		const Foo = resolve => require(['./Foo.vue'], resolve)
		//或者
		const Foo = () => import('./Foo');
	```
* #### 兼容性问题
	如果要求兼容性，可以使用[babel-polyfill](https://babeljs.io/docs/usage/polyfill/)
* #### 权限
	想办法拿到路由表，用addRoutes动态添加
