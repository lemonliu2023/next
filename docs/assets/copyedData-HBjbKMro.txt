# 计算机网络

## 计算机路由配置

假设计算机上有 wifi 和 网线两种连接方式，你输入一个网址后计算机无法知道采用哪种方式解析，路由表就是告诉计算机解析方式的。
使用 `netstat -nr` 查看路由表

![image-20240923133034122](https://p.ipic.vip/y8gdzw.png)

一二行是 wifi 和 网线的解析路径，下面 **10.200.1/24** 会采用网线解析，添加路由表的命令为：


```shell
sudo -S route -n add -net 192.100.50.0 -netmask 255.255.255.0 10.200.101.1 
```

## HTTP Streaming

最近在看 The WebSocket Handbook，文章中提到了 http streaming 如下

> Also known as HTTP server push, HTTP streaming is a data transfer technique that allows a web server to continuously send data to a client over a single HTTP connection that remains open indefinitely. Whenever there’s an update available, the server sends a response, and only closes the connection when explicitly told to do so.
> HTTP streaming can be achieved by using the chunked transfer encoding mechanism available in HTTP/1.1. With this approach, the server can send response data in chunks of newline-delimited strings, which are processed on the fly by the client.

大致意思是 http 可以返回 stream 的代码块 chunk 供客户端实时处理
思考：碰到数据量级庞大的接口，服务返回十分缓慢，是否可以不等数据全部返回就处理数据，下面是具体应用
![chart-loading-gradually.gif](https://cdn.nlark.com/yuque/0/2022/gif/1620126/1666194888019-e0c59200-d52c-419c-a56b-9601c4eaa39d.gif#averageHue=%23ffffff&clientId=u3089cdd8-9b78-4&errorMessage=unknown%20error&from=ui&id=T9bgJ&originHeight=220&originWidth=820&originalType=binary&ratio=1&rotation=0&showTitle=false&size=19815&status=error&style=none&taskId=ua483e77f-5a35-49b9-bcc5-ba04d152d81&title=)

```javascript
const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const koaStatic = require('koa-static');
const app = new Koa();

app.use(koaStatic(path.resolve('./public')))

app.use(ctx => {
  if (ctx.request.url === '/data') {
    ctx.response.set('content-type', 'application/json');
    // This is where the magic happens: set a stream as the response body
    ctx.body = fs.createReadStream('./data.json');
  }
})

app.listen(3000)
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="container" style="font-size: 12px"></div>
  </body>
</html>

<script>
  const startTime = Date.now()
  fetch('http://localhost:3000/data').then(async response => {
    // response.body is a ReadableStream
    const reader = response.body.getReader()
    renderStream(reader)
  })
  var text = ''
  const textDecoder = new TextDecoder()
  const containerDOM = document.querySelector('#container')

  async function renderStream(reader) {
    const { value, done } = await reader.read()
    if (done) {
      console.log('stream解析完成', Date.now() - startTime)
      return
    }
    // stream => string
    text += textDecoder.decode(value)
    containerDOM.innerHTML = text
    await renderStream(reader)
  }
</script>
```

对`ReadableStream`的处理可以参照[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream/getReader)
查看控制台可以看到响应体返回了 Transfer-Encoding: chunked 表明此接口是 stream 代码块返回
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666195365530-2841ae59-521d-4931-9978-ec5e6ffc7c7a.png#averageHue=%23fefefe&clientId=u3089cdd8-9b78-4&errorMessage=unknown%20error&from=paste&height=279&id=RU1ta&originHeight=558&originWidth=2352&originalType=binary&ratio=1&rotation=0&showTitle=false&size=116176&status=error&style=none&taskId=ufaff2976-fb01-479d-850f-71c5f8b20b9&title=&width=1176)
如果使用 HTTP2.0 则没有这个字段

```javascript
const Koa = require('koa');
const path = require('path');
const fs = require('fs');
const http2 = require('http2');
const koaStatic = require('koa-static');
const app = new Koa();


app.use(koaStatic(path.resolve('./public')))

app.use(ctx => {
  if (ctx.request.url === '/data') {
    ctx.response.set('content-type', 'application/json');
    // This is where the magic happens: set a stream as the response body
    ctx.body = fs.createReadStream('./data.json');
  }
})

// http 2.0 代码
http2.createSecureServer(
  {
      key: fs.readFileSync(path.resolve('./config/example.com+5-key.pem')),
      cert: fs.readFileSync(path.resolve('./config/example.com+5.pem')),
  },
  app.callback(),
).listen(3000);
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666195562495-caee5581-4d2a-46ce-a846-e7b9eb7c0e08.png#averageHue=%23fcfcfc&clientId=u3089cdd8-9b78-4&errorMessage=unknown%20error&from=paste&height=445&id=A1RV4&originHeight=890&originWidth=2366&originalType=binary&ratio=1&rotation=0&showTitle=false&size=238316&status=error&style=none&taskId=ub8ed6a88-35f5-4c0b-ad08-2cea5adc0a3&title=&width=1183)
其中证书生成可以参考 [https 证书生成](#rTE3V)



## grpc

1. 什么是 grpc

- 使用Protocol Buffers作为接口定义语言（IDL），用于定义服务接口和数据结构。
- 使用HTTP/2作为传输协议，支持双向全双工通信、多路复用、标头压缩等高级功能。

2. grpc特点与优势：

- 高性能：gRPC基于HTTP/2，具有更高的传输效率和更低的延迟。其处理速度相较于JSON序列化可以快8倍，消息大小可以减少60%到80%。
- 跨平台与跨语言：gRPC支持几乎所有主流语言的实现，打破了语言隔阂，使得不同语言的服务之间可以高效通信。
- 功能丰富：支持负载平衡、跟踪、运行状况检查和身份验证等功能。
- 流式处理：内置流式处理，支持对大型数据集进行异步流式处理的请求和响应。
- 工具链成熟：代码生成便捷，开箱即用，降低了开发难度。

3. 我问文心一言：web已经支持http/2.0，为什么不能直接连接grpc？
   虽然Web已经支持HTTP/2.0，但Web浏览器和gRPC之间的连接存在一些限制和差异，导致它们不能直接进行连接。以下是主要的原因：

协议差异：
gRPC是基于HTTP/2的，但它不仅仅是HTTP/2。gRPC使用Protocol Buffers作为接口定义语言（IDL），并使用特定的序列化格式和传输机制。这与HTTP/2作为纯HTTP协议有所不同。
浏览器限制：
传统上，从browser-based应用程序使用gRPC是不可能的，因为浏览器不公开任何让JS/WASM代码直接控制HTTP/2请求的API。浏览器对HTTP/2的支持主要集中在作为HTTP协议的一部分，而不是作为gRPC的传输层。
gRPC-Web：
为了解决这个问题，gRPC社区开发了gRPC-Web，这是一个允许在浏览器中运行的客户端与gRPC服务进行通信的规范。gRPC-Web在HTTP/1.1上工作，并使用特殊的代理来将gRPC调用转换为可以在浏览器中执行的HTTP请求。
安全性考虑：
在浏览器中使用gRPC还涉及到安全性问题。由于gRPC使用Protocol Buffers作为消息格式，这可能需要特定的安全措施来确保浏览器中的代码不会被恶意消息所利用。
缺乏广泛支持：
尽管gRPC-Web提供了一种解决方案，但它尚未在所有服务器或客户端框架中得到广泛支持。这意味着不是所有的gRPC服务都可以直接与浏览器通信。
实现复杂性：
即使在服务器端和客户端都支持gRPC-Web的情况下，也需要额外的配置和设置来确保它们能够正确地通信。这增加了实现的复杂性。
综上所述，虽然Web支持HTTP/2.0，但由于协议差异、浏览器限制、安全性考虑、缺乏广泛支持以及实现复杂性等因素，浏览器不能直接连接gRPC服务。然而，通过使用gRPC-Web等技术，可以在一定程度上实现浏览器与gRPC服务之间的通信。

# HTML

## label 标签介绍

label 标签为 input 元素提供标记，类似 span 标签，区别在于它为鼠标用户改进了可用性，可以关联特定表单控件

应用场景：1. 点击 label 聚焦 input 框 2. 点击 label 选中 checkbox 3. 点击 label 上传文件。特别提下第三点，默认的上传控件需要使用 input 元素并设置 type = 'file' 属性![image-20240905100337282](https://p.ipic.vip/x6j8c7.png)无法更改按钮内部文字和右侧文字，此时就可以使用  label 关联此控件，并把 input 元素隐藏

关联方式有两种：

显式关联：label 的 for 属性指向控件的 id

```html
<label for="username">用户名</label>
<input id="username" name="username">
```

隐式关联

```html
<label>
用户名<input id="username" name="username">
</label>
```

能使用显示关联的表单元素有：
input type="text" 文本框，点击标签时关联的文本框获得焦点。
input type="checkbox" 复选框，点击标签时选中或取消选中复选框。
input type="radio" 单选框，点击标签时选中单选框。
input type="file" 文件上传，点击标签时打开文件选择对话框。
input type="password" 密码框，点击标签时密码框获得焦点。
textarea 文本域，点击标签时文本域获得焦点。
select 下拉框，点击标签时，下拉框获得焦点，不过并不展开下拉框选项。



## i和em标签的区别

![image-20240909090212773](https://p.ipic.vip/stth3f.png)

```html
<!DOCTYPE html>
<html>
<head>
	<title>b Tag</title>
	<style>
		body {
			text-align: center;
		}
		h1 {
			color: green;
		}
	</style>
</head>
<body>
	<h1>GeeksforGeeks</h1>
	<p><i>Iron Man</i> is a hero.</p>
	<p>Gfg is the <em>best</em> educational site.</p>
</body>
</html>
```

**Note:** Here, there is no added emphasis or importance on the word “Iron Man”. It just indicates here iron isn’t a mineral or metal but it refers to a character. But in the next sentence the reader will use verbal stress on the word “best”. 
**注：**在这里，没有对“钢铁侠”这个词的强调或重要性。它只是表明这里的铁不是一种矿物或金属，而是指一种性质。但在下一句中，读者会对“best”这个词使用动词重音。

```html
<!-- html5 标签 -->
<mark>This text is marked (mark tag)</mark>
<br/><br/>
<del>This text is deleted or invalid (del tag)</del>
<br/><br/>
<ins>This text is inserted (ins tag)</ins>
```



# CSS

## css 布局之 grid

```html
div.grid-content>(div.card>h2{some title}+p>lorem200)*10
```

使用 vscode Emmet Abbreviation 语法生成节点结构

期望实现效果：卡片的内容能根据屏幕宽度响应式变化，从而适应不同屏幕大小的设备

为什么使用 flexbox ? 使用 flex-wrap 会造成最后一行如果没有充满宽度那么小卡片会铺满剩余空间不符合预期

具体实现：

```css
html {
  background-color: #000;
}
.grid-content {
  display: grid;
  /* 控制列数及列的宽度 */
  /* grid-template-columns: 250px 250px 250px; */ 
  /* 上面的简写 */
  /* grid-template-columns: repeat(4, 300px); */
  /* 4 1fr 重复四次 每部分占一份 响应式 */
  /* grid-template-columns: repeat(4, 1fr); */
  /* 固定宽度 gap无法填充剩余空间 */
  /* grid-template-columns: repeat(auto-fit, 300px); */
  /* minmax 函数指定每列最小最大宽度 */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}
.card {
  padding: 2em;
  border: 1px solid rgb(75, 82, 92);
  border-radius: 10px;
  background: #222429;
  text-align: center;
  color: #fff;
}
```

![](https://p.ipic.vip/ujkpv0.gif)

## 主题切换

谈一下`prefers-color-scheme`，它可以读取系统的主题类型让我们对网站进行主题适配
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1665647972648-57cbe9f0-b853-4bd1-b9d0-22d8c1761cbb.png#averageHue=%23cbaa8d&clientId=u1e968a57-d324-4&errorMessage=unknown%20error&from=paste&height=782&id=ufff84a1c&originHeight=1564&originWidth=2656&originalType=binary&ratio=1&rotation=0&showTitle=false&size=380238&status=error&style=none&taskId=u2f3b9eca-b120-4fc8-935a-7ce6a32d820&title=&width=1328)

```css
/* default, light mode styling */
.element {
  background-color: #fff;
  color: #000;
}

/* if user switches the system settings to dark mode */
/* this media query will be applied */
@media (prefers-color-scheme: dark) {
  .element {
    background-color: #000;
    color: #fff;
  }
}
```
正常工作中为每个元素指定两种配色是十分繁琐的事情，可以采用全局变量的方式，也适用于svg元素
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    /* default, light mode styles set with variables */
    :root {
      --color-background: #f9f9f9;
      --color-default: #000;
      --color-accent-1: deepskyblue;
      --color-accent-2: violet;
    }

    body {
      background-color: var(--color-background);
    }

    /* Toggle button */
    .btn {
      background-color: var(--color-background);
      border: var(--color-default) solid 3px;
      color: var(--color-default);
    }

    /* SVG lightsabers */
    .first-blade {
      fill: var(--color-accent-1);
    }

    .second-blade {
      fill: var(--color-accent-2);
    }

    .handle {
      fill: var(--color-default);
    }
    /* 暗黑模式变量 */
    @media (prefers-color-scheme: dark) {
      :root {
        --color-background: #000;
        --color-default: #f9f9f9;
        --color-accent-1: cyan;
        --color-accent-2: magenta;
      }
    }
  </style>
  <body>
    <div class="wrapper">
      <svg class="lightsaber first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.01 97.1">
        <polygon class="handle" points="97.01 89.78 93.61 86.37 95.29 84.69 84.59 73.99 73.9 84.69 84.59 95.38 86.28 93.7 89.68 97.1 97.01 89.78" />
        <rect class="handle" x="66.92" y="72.23" width="15.13" height="4.68" transform="translate(-30.92 74.51) rotate(-45)" />
        <rect class="handle" x="60.5" y="65.81" width="15.13" height="4.68" transform="translate(-28.26 68.09) rotate(-45)" />
        <rect class="handle" x="51.88" y="59.39" width="19.53" height="4.68" transform="translate(-25.6 61.67) rotate(-45)" />
        <path class="blade first-blade" d="M59.57,54.27,6.41,1.11c-2.7-2.7-5.18.36-5.39.45A3.5,3.5,0,0,0,1,6.5L54.18,59.66Z" />
      </svg>
      <svg class="lightsaber second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.01 97.1">
        <polygon class="handle" points="97.01 89.78 93.61 86.37 95.29 84.69 84.59 73.99 73.9 84.69 84.59 95.38 86.28 93.7 89.68 97.1 97.01 89.78" />
        <rect class="handle" x="66.92" y="72.23" width="15.13" height="4.68" transform="translate(-30.92 74.51) rotate(-45)" />
        <rect class="handle" x="60.5" y="65.81" width="15.13" height="4.68" transform="translate(-28.26 68.09) rotate(-45)" />
        <rect class="handle" x="51.88" y="59.39" width="19.53" height="4.68" transform="translate(-25.6 61.67) rotate(-45)" />
        <path class="blade second-blade" d="M59.57,54.27,6.41,1.11c-2.7-2.7-5.18.36-5.39.45A3.5,3.5,0,0,0,1,6.5L54.18,59.66Z" />
      </svg>
      <button class="btn">Toggle mode</button>
    </div>
  </body>
</html>
```
**图片的处理**

1. 使用选择性加载的`picture`标签
```html
<picture>
  <source srcset="light-image.jpg" media="(prefers-color-scheme: light)" />
  <source srcset="dark-image.jpg" media="(prefers-color-scheme: dark)" />
	<!--  默认图片  -->
  <img src="light-image.jpg" />
</picture>
```

2. 给图片增加css滤镜
```css
@media (prefers-color-scheme: dark) {
  /* we are excluding SVG */
  img:not([src$=".svg"]) {
    filter: brightness(70%);
  }
}
```
`**color-scheme**`
有些系统自带的控件如表单控件、滚动条并没有完全适配主题，需要添加 color-scheme  meta 标签告诉浏览器网站支持主题切换
将以下 meta 标签添加到文档头部，content 字段制定文档支持的主题模式
```html
<meta name="color-scheme" content="light dark" />
```
或者，color-scheme可以作为 CSS 属性添加到样式表中的任何元素上。
```css
color-scheme: light dark;
```
只使用 CSS 条件规则很难实现某些需求，使用 js 如何获取媒体查询的结果？
在 window 对象中有这样一个方法：matchMedia，几乎所有浏览都支持它，因此可以放心的使用。这个方法只接受一个参数，就是媒体查询的字符串，并返回一个 MediaQueryList 对象实例。该对象有只有 3 个属性：

1. media：媒体查询，等于传入的参数。
2. matches：布尔值，表示查询结果正确与否。
3. onchange：null，允许开发者传入一个回调函数，当媒体查询的结果改变时就会被触发。
```javascript
// 本例通过设置 body 的 classname 来控制主题颜色。 
const mql = window.matchMedia(`(prefers-color-scheme: dark)`);
if(mql.matches) {
  // 当前为 dark 模式
  document.body.classList.add('dark-mode')
} else {
  // 当前为 light 模式
  document.body.classList.remove('dark-mode')
}
```
如果网站想监听系统主题切换，可以设置 onchange 回调函数
```javascript
const mql = window.matchMedia(`(prefers-color-scheme: dark)`);
mql.onchange = function(evt) {
  if(mql.matches) {
  	document.body.classList.add('dark-mode')
	} else {
  	document.body.classList.remove('dark-mode')
	}
}
```
附一键切换深色主题魔法代码
```css
.dark-mode {
  filter: invert(1) hue-rotate(180deg);
}
```
附其他几个新增 css 媒体查询，为网站增加无障碍功能

- prefers-reduced-motion 减弱动画效果
- prefers-contrast 调整内容色彩对比度
- prefers-reduced-transparency 减少透明元素
- prefers-reduced-data 减少数据传输
## css 之 filter、backdrop-filter
具体配置查看[filterMDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)、[backdrop-filterMDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter)，这里说几个采用他们实现的 css 效果
```css
filter: blur(5px);
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1665652045432-1ee0388c-6ab5-4780-afda-51e5b1c9c15d.png#clientId=ucac05d0e-eceb-4&errorMessage=unknown%20error&from=paste&height=201&id=u495b44bc&originHeight=614&originWidth=744&originalType=binary&ratio=1&rotation=0&showTitle=false&size=181199&status=error&style=none&taskId=u63a269f9-9e88-4dc5-90b3-d7932141f11&title=&width=243)
```css
backdrop-filter: saturate(50%) blur(4px);
background: rgba(255,255,255,.7);
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1665652176909-878c21b5-1f77-42e4-8e80-c1ce23ddfc6d.png#clientId=ucac05d0e-eceb-4&errorMessage=unknown%20error&from=paste&height=74&id=u962ac05f&originHeight=148&originWidth=1634&originalType=binary&ratio=1&rotation=0&showTitle=false&size=97253&status=error&style=none&taskId=u80670578-26f6-4dc1-8991-c8bf34a4153&title=&width=817)
```css
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1665652501703-338b6a37-ae38-4eb7-ac25-581971f93727.png#clientId=ucac05d0e-eceb-4&errorMessage=unknown%20error&from=paste&height=188&id=ue6fbd2c5&originHeight=376&originWidth=680&originalType=binary&ratio=1&rotation=0&showTitle=false&size=107664&status=error&style=none&taskId=u3a081c09-d266-4f71-bb70-c1c3107fe15&title=&width=340)

# JS
## 原型链

### 怎么理解原型链?

```js
function Person (name) {
  this.name = name
  this.speak = function () {
    console.log(`我叫${this.name}`)
  }
}

const zhangsan = new Person('张三')
const lisi = new Person('李四')

console.log(zhangsan.speak === lisi.speak) // false
```

每创建一个实例就会产生一个相同的函数占用内存,如何节省? js 给构造函数创建了一个"共享空间"——prototype,使用构造函数创建的实例都可以访问到共享空间的属性

```js
function Person (name) {
	this.name = name
}

Person.prototype.speak = function () {
  console.log(`我叫${this.name}`)
}

const zhangsan = new Person('张三')
const lisi = new Person('李四')

console.log(zhangsan.speak === lisi.speak) // true
```

“共享空间”本质上是一个对象,对象上的方法存在于 Object.prototype 上,Object的共享空间是 null,这个链式结构称为原型链

![image.png](https://cdn.nlark.com/yuque/0/2024/png/1620126/1705382673326-cd74c7ee-4dd4-4d6b-aade-e2d1e6985372.png#averageHue=%23fbfbfb&clientId=u9c6baa41-c8ca-4&from=paste&height=1150&id=u9a96e646&originHeight=2300&originWidth=2680&originalType=binary&ratio=2&rotation=0&showTitle=false&size=769575&status=done&style=none&taskId=udbb98fe5-692c-49fb-a26c-d321b1d7748&title=&width=1340)

### 手写 new

```js
//Fun为构造函数, args表示传参
function myNew(Fun, ...args) {
    // 1.在内存中创建一个新对象
    let obj = {};
    // 2.把新对象的原型指针指向构造函数的“共享空间“
    obj.__proto__ = Fun.prototype;
    // 3.改变this指向，并且执行构造函数内部的代码（传参）
    let res = Fun.apply(obj, args);
    // 4.判断函数执行结果的类型
    if (res instanceof Object) {
        return res;
    } else {
        return obj;
    }
}

let obj = myNew(One, "XiaoMing", "18");
```

## js快慢数组

[前端进阶算法2：从Chrome V8源码看JavaScript数组](https://github.com/sisterAn/JavaScript-Algorithms/issues/2)

总结：v8 封装底层数组自动扩容减容，减少开发者认知负担

# TS

## TS 函数重载

Ts 函数重载，第一个参数不同影响第二个参数，先把每种情况写出来，再写一个聚合的 使用 ｜



## TS 和 JS 通信

1. 可以使用模版字符串的形式 \``
2. 映射

```ts
type JSTypeMap = {
  number: number;
  string: string;
  symbol: Symbol;
  function: Function;
};

type JSTypes = keyof JSTypeMap;

type ArgsType<T extends JSTypes[]> = {
    [K in keyof T]: JSTypeMap[T[K]]
}

type RulesType<T extends Record<string, JSTypes>> = {
  [K in keyof T]: JSTypeMap[T[K]];
};

declare function addImpl<T extends JSTypes[]>(...args: [
    ...T,
    (...args: ArgsType<T>) => any
]): any


addImpl('string', 'function', (a, b) => {})

declare function validate<T extends Record<string, JSTypes>>(
  rules: T,
  obj: any
): RulesType<T>;

const res = validate(
  {
    a: 'string',
    b: 'number',
  },
  { a: '1', b: 2 }
);

const a = res.a; // string
const b = res.b; // number
```



## 模糊TS的推断

Let’s say you have a piece of typescript code like below:

```ts
const letterAspectRatio = {
  a: 0.5589996337890625,
  A: 0.6569992065429687,
} as const
const getLetterWidth = (letter: string, fontSize: number) => {
  return letterAspectRatio[letter] || 1
}
getLetterWidth('foo')
```

ts 会报类似`Element implicitly has an ‘any’ type because expression of type ‘string’ can’t be used to index type`的错误，原因是 ts 把 letterAspectRatio 的 key 和 value 的类型也推断了，类型为 { readonly a: 0.5589996337890625...  }，如果随意传入 letter: string 它就认为是错误，很显然上面的代码是想利用 js 对象取值的逻辑如果取到返回对应值否则返回 undefined，如何避免 ts 报错呢？

查询 stackoverflow 大部分人的思路是欺骗 ts，虽然能避免编辑器飘红，但逻辑上说不通，letter 传入到下面就是 string 类型，不应直接断言为 letterAspectRatio 的 key

```ts
const getLetterWidth = (letter: string, fontSize: number) => {
  return letterAspectRatio[letter as keyof typeof letterAspectRatio] || 1
}
```

我的想法是在 letterAspectRatio 上加一个类型声明，模糊ts推断，只推断 letter 的类型为 string。注意这个常量一般会被导出，所以不应直接修改它的类型而是重新声明一个变量

```ts
const letterAspectRatio = {
  a: 0.5589996337890625,
  A: 0.6569992065429687,
} as const
const letterAspectRatioCache: Record<string, number> = letterAspectRatio
const getLetterWidth = (letter: string, fontSize: number) => {
  return letterAspectRatioCache[letter] || 1
}
getLetterWidth('foo')
```





# 代码格式化
## eslint
对于 js 代码格式化，有 tslint、eslint、prettier 工具，每个功能基本差不多，我见到的很多项目都使用了两个或者三个工具。那么项目中的代码规范到底是什么呢，除了潦草几句 README 里的规范，其他的就只能在写代码的时候见真章了
你应该见过在 终端 里见到的代码格式错误，比如 xxx is not defined... 这个是通过 eslint-loader 实现，eslint-loader 依赖 eslint；你也见过在 IDE 上标红标黄的 lint 错误，这个是通过 tslint/eslint/prettier 实现的，鼠标 hover 住，可以看到具体是哪个工具的哪个 rule 出错了
我不喜欢 prettier，虽然他支持多语言 html、js、css ... 的格式化，不到五分钟集成 Prettier，让你的代码变得更漂亮。但是他太严格了，比如 `printWidth` 规则，规定代码的最大长度，试想一下，你在字符串里添加几个字母，prettier 会让你强制换行，这样对于 git diff  极其不友好，无法清楚知道你修改了什么；对于对象，你肯定见过以下代码
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666019148087-e7293546-f9dd-4185-bcf9-9a1a33345a7d.png#averageHue=%23faf9f9&clientId=uec498795-f9b2-4&errorMessage=unknown%20error&from=paste&height=357&id=uc80d1908&originHeight=732&originWidth=1922&originalType=binary&ratio=1&rotation=0&showTitle=false&size=147004&status=error&style=none&taskId=ue6a28fb4-94f8-44e4-b710-06b9d4c8243&title=&width=938)
左右两部分代码哪个漂亮十分明显，而想要禁用他的规则是十分困难的，唯一能做的是使用 `**// prettier-ignore**`
从上面分析可以看出，eslint 可以满足两个功能，为什么项目中不只用 eslint 呢？答案是可以的。
eslint 有很多预设，还有很多公司开发的规范插件，比如 airbnb。里面具体的规则是什么呢，你可能需要从 node_modules 中去查看，对于大部分人来说，很少有人关心里面的具体 rules，只要在项目中的 eslint 配置中修改相应 rules 就可以了，下面记录下贴合我代码规范的 rules
```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.css']
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
}

```

- no-multi-spaces  不能使用多余空格

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666020754543-8565c297-e169-481c-8df3-7750a59f9733.png#averageHue=%23262422&clientId=uec498795-f9b2-4&errorMessage=unknown%20error&from=paste&height=73&id=u24282283&originHeight=146&originWidth=740&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38539&status=error&style=none&taskId=ue502c6fd-c3e6-489c-a1d9-9c7118a6122&title=&width=370)

- react/react-in-jsx-scope react 在 jsx 中可以不声明

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666020800955-ea2ab1c0-a647-47a5-9759-b5240c6ac16d.png#averageHue=%2320201f&clientId=uec498795-f9b2-4&errorMessage=unknown%20error&from=paste&height=201&id=ue1360b2b&originHeight=402&originWidth=758&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48639&status=error&style=none&taskId=u1359d4d5-a144-4015-a091-cdb57fcfe0a&title=&width=379)

- quotes  单引号替代双引号
- semi 不使用分号
- react/jsx-indent-props JSX中的props缩进

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666020958532-6ab3a1d5-55b7-41b8-8f5b-e23ccd6a774c.png#averageHue=%2321201f&clientId=uec498795-f9b2-4&errorMessage=unknown%20error&from=paste&height=128&id=u7540bde1&originHeight=256&originWidth=748&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46708&status=error&style=none&taskId=u060e09fd-94d9-414f-a658-eb78a076dc7&title=&width=374)

- react/no-deprecated 不使用弃用的方法
- react/self-closing-comp  jsx 自闭标签位置，没有 children 要使用自闭合标签

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666021246983-c20aac80-7526-4b17-a895-704cfb556ca2.png#averageHue=%23242320&clientId=uec498795-f9b2-4&errorMessage=unknown%20error&from=paste&height=146&id=u8355aa00&originHeight=292&originWidth=804&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55826&status=error&style=none&taskId=u76949e1a-7178-4efb-901d-1d6363668e8&title=&width=402)

- react/jsx-closing-bracket-location 在JSX中验证右括号位置

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666021305056-2277c44d-811f-4f9c-ba9b-37e415d2b8d3.png#averageHue=%23a9aaa8&clientId=uec498795-f9b2-4&errorMessage=unknown%20error&from=paste&height=136&id=ufee7e7e9&originHeight=272&originWidth=1210&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58697&status=error&style=none&taskId=u80e35782-7165-4c73-bd23-33881f20928&title=&width=605)

- react/jsx-indent JSX 缩进

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666021357706-1ba7e54f-015b-466d-a15a-2891dc78b59f.png#averageHue=%23a9a989&clientId=uec498795-f9b2-4&errorMessage=unknown%20error&from=paste&height=281&id=u3c07c7b9&originHeight=562&originWidth=1254&originalType=binary&ratio=1&rotation=0&showTitle=false&size=129638&status=error&style=none&taskId=ue46cf04d-089d-42ad-bc24-b94c2c8e22e&title=&width=627)
持续更新...
## Vetur
使用 vetur 插件格式化 vue 文件时，template 代码经常被格式化成预期之外的样式，如下
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666706628419-b75f3a9d-4fb1-4cc7-9e74-745e469201cd.png#averageHue=%23222121&clientId=uca69dff7-dab1-4&from=paste&height=51&id=u9fcf8eff&originHeight=102&originWidth=882&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25350&status=done&style=none&taskId=ufcdf545a-fbec-4d92-8744-835bdc42a15&title=&width=441)
vetur 默认格式化 template 的插件是 prettier，需要改下 vscode 配置
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1666706778540-4232bac5-f71e-40be-b1a3-f12e92e61d5e.png#averageHue=%23282727&clientId=uca69dff7-dab1-4&from=paste&height=606&id=ub74becd4&originHeight=1212&originWidth=1762&originalType=binary&ratio=1&rotation=0&showTitle=false&size=182168&status=done&style=none&taskId=u3fa089d1-cb79-4572-87f6-9f97601c8a4&title=&width=881)

# 算法
## 从交集时间中获取空闲时间段
**业务背景**
质检员需要质检客服和用户的通话录音，为了提高其工作效率，业务希望可以把客服用户都没说话且时长大于一秒的录音片段跳过，称为跳过空白录音功能
AI 侧返回一段客服和用户语音通话识别的文本，里面有开始时间结束时间，需要计算出两人都未说话时长大于一秒的片段，数据结构如下
```json
{
  kefuAsrData: [
    { startTime: 0.24, endTime: 2.91 },
    { startTime: 8.75, endTime: 10.01 },
    { startTime: 12.79, endTime: 14.84 },
    { startTime: 17.35, endTime: 18.5 },
    { startTime: 20.58, endTime: 24.61 },
    { startTime: 27.88, endTime: 28.67 },
    { startTime: 31.45, endTime: 35.94 },
    { startTime: 35.94, endTime: 40.11 },
    { startTime: 51.75, endTime: 55.69 },
    { startTime: 55.94, endTime: 58.64 },
    { startTime: 64.78, endTime: 69.96 },
    { startTime: 69.96, endTime: 73.12 },
    { startTime: 73.12, endTime: 76.02 },
    { startTime: 76.06, endTime: 80.15 },
    { startTime: 82.67, endTime: 91.28 },
    { startTime: 93.57, endTime: 95.58 },
    { startTime: 97.13, endTime: 98.05 }
  ],
  userAsrData: [
    { startTime: 3.45, endTime: 5.09 },
    { startTime: 5.09, endTime: 7.61 },
    { startTime: 15.29, endTime: 16.55 },
    { startTime: 25.38, endTime: 26.45 },
    { startTime: 38.09, endTime: 41.19 },
    { startTime: 41.19, endTime: 50.35 },
    { startTime: 57.11, endTime: 62.98 },
    { startTime: 80.67, endTime: 81.97 },
    { startTime: 92, endTime: 93.17 },
    { startTime: 95.85, endTime: 96.66 }
  ]
}
```
**场景扩展**
字节跳动二面算法题Input:
有两名员工A和B，
A的上班时间为
A’s available time is from 8:00 to 19:00,
A在上班时间内有会议的时间段分别为：
schedule is [8:30, 11:30], [12:30, 14:00], [17:00, 18:00]
B的上班时间为
B’s available time is from 10:00 to 20:00,
B在上班时间内有会议的时间段分别为：
schedule is [10:00, 11:00], [13:00, 14:30]
现在C找A，B两人有事要开会，请问所有的可选时间段有哪些？
try to find out A&B common available time.
Output:
[11:30, 12:30], [14:30, 17:00], [18:00, 19:00]
**思路**
数据中存在有A、B同时说话的情况，也存在一方说话的情况，把所有说话的时间段合并起来，剩余的时间段就是两人都没说话的时间，从中找到间隔大于一秒的即可
合并过程并不是很容易，网上推荐使用双指针，一个读数据，一个描绘时间轴，比较难理解。结合实际情况，可以将两份数据合并后按开始时间从小到大排列，再定义一个最大值，如果最大值小于片段的结束时间就捕捉，并将改时间赋给最大值
```javascript
// 将通话数据从小到大排序
const asrSortData = [...kefuAsrData, ...userAsrData].sort((a, b) => {
  return a.start_t - b.start_t
})
// 交集时间
const rectifyData = []
// 空白时间
const silentData = []
// 最大时间
let maxTime = 0;
// 当前会话的开始时间比上一会话的结束时间大1s 此部分为空白时间
asrSortData.forEach(item => {
  if (item.endTime > maxTime) {
    rectifyData.push(item)
    maxTime = item.endTime
  }
})
// 取出大于一秒的时间
rectifyData.reduce((pre, cur) => {
  if (cur.startTime - pre > 1) {
    silentData.push([pre, cur.startTime]);
  }
  return cur.endTime;
}, 0);

console.log(silentData)
```

## ListToTree
```typescript
type Item = {
  parentId: number, id: number, text: string, children?: Item[]
}
function listToTree(list: Item[]) {
  const map: Record<string, Item> = {}

  list.forEach(item => {
    const { id } = item
    map[id] = item
  })

  const tree: Item[] = []

  for (const id in map) {
    if (Object.prototype.hasOwnProperty.call(map, id)) {
      const { parentId } = map[id];
      if (map[parentId]) {
        if (map[parentId].children && Array.isArray(map[parentId].children)) {
          map[parentId].children?.push(map[id])
        } else {
          map[parentId].children = [map[id]]
        }
      } else {
        tree.push(map[id])
      }
    }
  }
  return tree
}
```
## LRU 

```js
// 实现 LRU 算法
var LRUCache = function(capacity) {
    this.cache = new Map()
    this.capacity = capacity
}

LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        // 存在即更新
        let temp = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, temp)
        return temp
    }
    return -1
}

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        // 存在即更新（删除后加入）
        this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
        // 不存在即加入
        // 缓存超过最大值，则移除最近没有使用的
        this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
}
```

## hashtable

没看懂 —— 关联两数三数之和

## 认识树

- 树
- 二叉树
  - 平衡二叉树
  - 满二叉树
  - 完全二叉树
- 遍历
  - 顺序
    - 前、中、后
  - 代码封装
    - 递归
    - 迭代查询（不会）

# Docker

项目中的模块可以通过 npm 管理，任何一个项目都可以下载 npm 包；项目中的环境依赖比如 nodejs、nginx等可以通过 docker 来管理，只需要从 [docker hub](https://hub.docker.com/) 中下载对应的镜像即可。甚至，我们整个项目都可以通过 docker 来管理，编写一些配置文件，其他设备克隆下来，执行命令就可以运行，适合于私有部署，不用关心宿主系统的环境问题。
**镜像 image 和 容器 container 的关联**
容器是在镜像的最上面加了一层读写层，镜像里面的文件改动时，它不会直接改动镜像，而是将要改动的文件拷贝到读写层，如果容器删除了，最上面的读写层也就删除了，改动也就丢失了，所以无论多少个容器共享一个镜像，所做的写操作都是从镜像的文件系统中复制过来操作的，并不会修改镜像的源文件，这种方式提高了磁盘的利用率。如果想持久化这些改动，可以通过docker commit将容器保存成一个新镜像。
## 使用 docker 作为开发环境
每次入职一家新公司都需要重新配置开发环境，如前端需要安装 node、git、brew等等，如果遇到项目依赖不同 node 版本还需要下载 nvm 管理，久而久之开发环境会十分混乱
下面是 nodejs 环境的安装过程
```powershell
# 拉取 node 镜像，silm 是纯净版，只有 node 没有 git 和一些系统命令行工具
docker pull node:slim
# 列出镜像列表
docker images
# 使用镜像启动容器
# –detach	-d	在后台运行容器，并且打印容器id。
# –interactive	-i	即使没有连接，也要保持标准输入保持打开状态，一般与 -t 连用。
# –tty	-t	分配一个伪tty，一般与 -i 连用。
# 09090ad34b55 是镜像id，/bin/bash 是终端类型
docker run -it --name my_container 09090ad34b55 /bin/bash
# 列出运行中的容器列表 或者使用 docker ps
docker container ls
# 列出所有容器列表 all
docker container ls -a
# 使用容器名称启动
docker start my_container
# 或者使用容器id启动，id 只需输入前几位，docker 会自动识别
docker start 8ceb4
```
在 vscode 中下载 docker 扩展，可以使用 vscode 操作容器文件、命令行
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1665934183787-a3ac07c1-0266-487e-8ffa-808c6e85aa51.png#averageHue=%2326272a&clientId=ubf39f0c3-91a9-4&errorMessage=unknown%20error&from=paste&height=77&id=ueeee1ed5&originHeight=154&originWidth=968&originalType=binary&ratio=1&rotation=0&showTitle=false&size=31057&status=error&style=none&taskId=u9c870b8b-b31d-4c18-8825-f1935d3c099&title=&width=484)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1620126/1665934214060-aa48745d-bd9a-4bfb-a8c1-25d9d6e1fe43.png#averageHue=%236eb57c&clientId=ubf39f0c3-91a9-4&errorMessage=unknown%20error&from=paste&height=900&id=u06ae3bfd&originHeight=1800&originWidth=2880&originalType=binary&ratio=1&rotation=0&showTitle=false&size=730949&status=error&style=none&taskId=u658fddc6-f90f-4257-ac5b-5024b0db5b7&title=&width=1440)
选择运行的容器即可
**复用开发环境**
上面已经下载了 nodejs 环境，比如你还可以使用 npm 下载一些全局的包如 vue、nrm等等，这样我们就创建了一个开发环境，为了复用这个开发环境需要将其打包成镜像推送到 docker hub 上
```powershell
# 登录 docker
docker login
# 将容器打包成镜像 docker container commit [容器名称] [镜像名称]
docker container commit fed fed
# 为镜像打 tag，因为镜像推送到 docker hub 中，要用 tag 来区分版本，这里我们先设置为 latest。tag 名称加上了用户名做命名空间，防止与 docker hub 上的镜像冲突。
docker tag fed huangzhaoping/fed:latest
# 将 tag 推送至 docker hub。
docker push huangzhaoping/fed:latest
```
## 使用 docker 私有部署项目
上面章节中，在开发环境创建项目推送到 docker hub，其他人从 docker hub 下载镜像就能开发项目了。但是不建议这样使用，镜像一般作为通用开发环境，不应该将代码放到上面
**部署单个项目**
在项目根目录创建 `Dockerfile` 描述配置
```dockerfile
# FROM [base镜像] 必须放在Dockerfile的第一行，表示从哪个baseimage开始构建
FROM node:slim

# MAINTAINER: 可选的，用来标识image作者的地方

# ADD & COPY
# 当在源代码构建的方式下，可以通过ADD和COPY的方式，把host上的文件或者目录复制到image中
# ADD和COPY的源必须在context路径下
# 当src为网络URL的情况下，ADD指令可以把它下载到dest的指定位置，这个在任何build的方式下都可以work
# ADD相对COPY还有一个多的功能，能够进行自动解压压缩包
COPY ./ /usr/local/app

# 用来指定当前工作目录（或者称为当前目录） 当使用相对目录的情况下，采用上一个WORKDIR指定的目录作为基准
WORKDIR /usr/local/app

# 一个Dockerfile中可以包含多个RUN，按定义顺序执行 每一个RUN指令都会是在一个新的container里面运行，并提交为一个image作为下一个RUN的base
RUN npm i

# CMD: 
# CMD的作用是作为执行container时候的默认行为（容器默认的启动命令）
# 当运行container的时候声明了command，则不再用image中的CMD默认所定义的命令
# 一个Dockerfile中只能有一个有效的CMD，当定义多个CMD的时候，只有最后一个才会起作用

# ENV key value
# 用来设置环境变量，后续的RUN可以使用它所创建的环境变量
ENV NODE_ENV dev

# EXPOSE <端口1> [<端口2>...]。
# EXPOSE 指令是声明运行时容器提供服务端口，这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务。在 Dockerfile 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 docker run -P 时，会自动随机映射 EXPOSE 的端口。
EXPOSE 8090

# HEALTHCHECH 健康检查
# HEALTHCHECK CMD curl --fail http://localhost:5000/fundation || exit 1
```
写完整个项目后打包镜像
```powershell
# -t --tag 标识镜像名称 .代表 Dockerfile 路径
docker build -t mynodejsproject .
```
**部署多个项目**
当部署一个前后端项目时，需要 mysql redis nginx 等依赖，需要使用 `docker-compose`
在项目根目录新建 `docker-compose.yml` 文件
```yaml
# 版本
version: '3'
# 依赖的服务列表
services:
  nginx:
    # base镜像
    image: nginx:latest
    # 将服务的80端口映射宿主机的8080端口，使用-80可以将服务的80端口映射到宿主机的一个随机的端口上
    ports:
      - 8080:80
    # 出错重启
    restart: always  
    volumes:
    # 文件映射
      - ./nginx/conf.d:/etc/nginx/conf.d
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - /tmp/logs:/var/log/nginx

  redis-server:
    image: redis:latest
    ports:
      - 6479:6379
    restart: always

  app:
    # 服务路径
    build: ./
    volumes:
      - ./:/usr/local/app
    restart: always  
    working_dir: /usr/local/app
    command: node server/server.js
    # 通过depends_on告诉docker-compose当前服务启动之前先要把depends_on指定的服务启动起来才行。
    depends_on:
      - redis-server
    links:
    # links的目的是把一个服务的名称在当前服务里面创建一个别名，此时在app中的redis的ip为rd
      - redis-server:rd

      
```
```powershell
# -detach	-d	在后台运行容器
docker-compose up -d
```
代码仓库：[https://github.com/lemonliu2022/docker-web-example](https://github.com/lemonliu2022/docker-web-example)
# Nginx
## nginx托管静态资源出现的问题
```powershell
docker pull nginx
# eeb9db34b331
docker run -it --name nginx -p 9527:9527 -v /Users/didi/Desktop/temp:/etc/nginx/conf.d -v /Users/didi/Desktop/logs:/var/log/nginx eeb9db34b331 /bin/bash
```
> docker 命令解释
> -p 宿主机port:容器port 端口映射
> -v 宿主机目录:容器目录 磁盘目录映射 ⚠️**首次**是宿主机目录映射到容器，如果宿主机目录下无文件，容器中的文件也会被清除；采用此命令是官方nginx镜像中没有 vi、vim 命令，目录映射方便改动容器内的文件。也可以采用 vscode 左下角连接容器的方法改动容器内文件

```markdown
|-- /Users/didi/Desktop/temp
    |-- server.conf
    |-- foo
        |-- index.html
```
```nginx
server {
    listen       9527;
    listen  [::]:9527;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location /foo {
      root   /etc/nginx/conf.d;
      index  index.html index.htm;
    }
    
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```
### 利用索引查找静态资源时会出现 301 重定向
使用浏览器访问下面两个地址，通过 nginx 配置的映射都可以找到 index.html 页面
http://localhost:9527/foo
查找名字为 foo 的资源，没有找到；但存在 foo 目录，nginx 会重定向查询此目录下是否含有 index.html的默认页面，产生 301 状态码
![image.png](https://cdn.nlark.com/yuque/0/2023/png/1620126/1681099000786-3fdedeca-dcbc-4dc8-b7cc-6d7180eedc4d.png#averageHue=%23f1f1ef&clientId=u3067532b-493c-4&from=paste&height=304&id=ue0c67d6a&originHeight=608&originWidth=2390&originalType=binary&ratio=2&rotation=0&showTitle=false&size=353394&status=done&style=none&taskId=ub78351cb-2491-44a1-86e0-d166fcdc165&title=&width=1195)
http://localhost:9527/foo/
查找 foo 目录下的资源，默认为 index.html
![image.png](https://cdn.nlark.com/yuque/0/2023/png/1620126/1681099132333-66fe2594-511e-49d7-a513-b1e1c61ebbbd.png#averageHue=%23fbfbf8&clientId=u3067532b-493c-4&from=paste&height=282&id=ub4f49cc2&originHeight=563&originWidth=2380&originalType=binary&ratio=2&rotation=0&showTitle=false&size=345008&status=done&style=none&taskId=u398ff97a-6343-4fa9-8c77-d23388099d7&title=&width=1190)
### try_files
按指定顺序检查文件是否存在，并使用第一个找到的文件进行请求处理；处理在当前上下文中执行。根据root和alias指令，从file参数构造文件路径。可以通过在名称末尾指定斜杠来检查目录是否存在，例如“$uri/”。如果没有找到任何文件，则会对最后一个参数中指定的uri进行内部重定向。
```nginx
location /foo {
  root   /etc/nginx/conf.d;
  #   index  index.html index.htm;
  try_files $uri $uri/ /foo/index.html;
}
```
最后一个参数最好设置一个 403 页面 ⚠️ 最后一个参数如果设置 index.html 则走 nginx 默认路径 /etc/nginx/htmlindex.html 显然是不对的，可以变成 /index.html 或者 其他默认地址

```powershell
git aa ff # 
```
# React

## 基础语法

### 事件对象

```jsx
{ /* 第一个参数即是事件对象，无需传递 */ }
<button onClick={this.eventHandler}>按钮</button>
{ /* 需要传递其他参数 */ }
<button onClick={e => this.eventHandler('arg', e)}
{ /* 最后一个即是事件对象 */ }
<button onClick={this.eventHandler.bind(null, 'arg')}
```

### Ref

1. createRef

```jsx
class Input extends Component{
  constructor() {
    super()
    this.inputRef = React.createRef()
  }
  render() {
    return (
    	<div>
      	<input type="text" ref={this.inputRef} />
        { /* this.inputRef.current 即是 */ }
      </div>
    )
  }
}
```

2. 函数参数

```jsx
class Input extends Component{
  render() {
    return (
    	<div>
      	<input type="text" ref={input => (this.input = input)} />
        { /* this.input 即是 */ }
      </div>
    )
  }
}
```

### Hooks

> 副作用： 在组件中，只要不是将数据转换成视图的代码，都是副作用。例如：获取DOM元素，为DOM元素添加事件，设置定时器，发送Ajax等等


对函数型组件进行增强, 让函数型组件可以存储状态, 可以拥有处理副作用的能力.

让开发者在不使用类组件的情况下, 实现相同的功能. **React16.8以后推荐使用**

#### Hooks要解决的问题

1. 逻辑复用
   类组件的高阶组件增加了无实际渲染效果的组件，增加组件层级，十分臃肿，增加调试难度，运行效率降低
2. 类组件经常会变得很复杂难以维护
   将一组相干的业务逻辑拆分到了多个生命周期函数中
   在一个生命周期函数内存在多个不相干的业务逻辑
3. 类成员方法不能保证this指向的正确性

#### useState

- 普通函数在执行完成之后，内部的变量就会被释放掉，而useState内部使用闭包来保存变量
- 参数可以是一个函数，函数返回什么，初始状态就是什么，函数只会调用一次，用在初始值是动态值的情况

```jsx
function App(props) {
  // wrong
  // const propsCount = props.count | 0; // 这种方式可以定义初始状态，但是每次渲染都会调用
  
  // right
  const [count, setCount] = useState(() => {
    return props.count | 0; // 只会在第一次渲染时执行
  })
}
```

- 设置状态值方法的参数可以是一个值也可以是一个函数(函数可以操作本身数据)
- 设置状态值方法的方法本身是异步的
- 原理

```jsx
let states = []
let setters = []
let stateIndex = 0;

function createSetter(index) {
	return function (newState) { // 重点：闭包 保存index不被释放
		states[index] = newState;
		render();
	}
}

function useState(initialState) {
  states[stateIndex] = states[stateIndex] ? states[stateIndex] : initialState
  setters.push(createSetter(stateIndex))
  let value = states[stateIndex];
  let setter = createSetter(stateIndex)
  stateIndex++;
  return [value, setter]
}

function render() {
	stateIndex = 0;
	ReactDOM.render(<App />, document.getElementById('root'))
}
```

#### useReducer

1. 应用场景
   - 如果你的`state`是一个数组或者对象
   - 如果你的`state`变化很复杂，经常一个操作需要修改很多state
   - 如果你希望构建自动化测试用例来保证程序的稳定性
   - 如果你需要在深层子组件里面去修改一些状态 useReducer + useContext
   - 如果你用应用程序比较大，希望UI和业务能够分开维护

> useState 实现登录页

```jsx
function LoginPage() {
        const [name, setName] = useState(''); // 用户名
        const [pwd, setPwd] = useState(''); // 密码
        const [isLoading, setIsLoading] = useState(false); // 是否展示loading，发送请求中
        const [error, setError] = useState(''); // 错误信息
        const [isLoggedIn, setIsLoggedIn] = useState(false); // 是否登录

        const login = (event) => {
            event.preventDefault();
            setError('');
            setIsLoading(true);
            login({ name, pwd })
                .then(() => {
                    setIsLoggedIn(true);
                    setIsLoading(false);
                })
                .catch((error) => {
                    // 登录失败: 显示错误信息、清空输入框用户名、密码、清除loading标识
                    setError(error.message);
                    setName('');
                    setPwd('');
                    setIsLoading(false);
                });
        }
        return ( 
            //  返回页面JSX Element
        )
    }
```

> useReducer 开发登录页

```jsx
// useReducer 实现登录页
    const initState = {
        name: '',
        pwd: '',
        isLoading: false,
        error: '',
        isLoggedIn: false,
    }
    function loginReducer(state, action) {
        switch(action.type) {
            case 'login':
                return {
                    ...state,
                    isLoading: true,
                    error: '',
                }
            case 'success':
                return {
                    ...state,
                    isLoggedIn: true,
                    isLoading: false,
                }
            case 'error':
                return {
                    ...state,
                    error: action.payload.error,
                    name: '',
                    pwd: '',
                    isLoading: false,
                }
            default: 
                return state;
        }
    }
    function LoginPage() {
        const [state, dispatch] = useReducer(loginReducer, initState);
        const { name, pwd, isLoading, error, isLoggedIn } = state;
        const login = (event) => {
            event.preventDefault();
            dispatch({ type: 'login' });
            login({ name, pwd })
                .then(() => {
                    dispatch({ type: 'success' });
                })
                .catch((error) => {
                    dispatch({
                        type: 'error'
                        payload: { error: error.message }
                    });
                });
        }
        return ( 
            //  返回页面JSX Element
        )
    }
```

#### useContext

1. 应用场景
   组件之间共享状态, 简化了context提供的Consumer组件

```jsx
// 定义 context函数
    const LoginContext = React.createContext();
    function LoginPage() {
        const [state, dispatch] = useReducer(loginReducer, initState);
        const { name, pwd, isLoading, error, isLoggedIn } = state;
        const login = (event) => {
            event.preventDefault();
            dispatch({ type: 'login' });
            login({ name, pwd })
                .then(() => {
                    dispatch({ type: 'success' });
                })
                .catch((error) => {
                    dispatch({
                        type: 'error'
                        payload: { error: error.message }
                    });
                });
        }
        // 利用 context 共享dispatch
        return ( 
            <LoginContext.Provider value={{dispatch}}>
                <...>
                <LoginButton />
            </LoginContext.Provider>
        )
    }
    function LoginButton() {
        // 子组件中直接通过context拿到dispatch，出发reducer操作state
        const dispatch = useContext(LoginContext);
        const click = () => {
            if (error) {
                // 子组件可以直接 dispatch action
                dispatch({
                    type: 'error'
                    payload: { error: error.message }
                });
            }
        }
    }
```

#### useEffect

1. 执行时机
   - useEffect(() => {})             =>     componentDidMount, componentDidUpdate
   - useEffect(() => {}, [])         =>     componentDidMount
   - useEffect(() => () => {})     =>     componentWillUnMount
2. 解决的问题
   - 按照用途将代码进行分类 (将一组相干的业务逻辑归置到了同一个副作用函数中)
   - 简化重复代码, 使组件内部代码更加清晰
3. 结合异步函数

```jsx
useEffect(() => {
  (async ()=> {
    	await axios.get()
  })()
})

// wrong
useEffect(async () => {
  // 改变了原有函数的返回值
})
```

4. 原理

```jsx
function render() {
	stateIndex = 0;
	effectIndex = 0;
	ReactDOM.render(<App />, document.getElementById('root'))
}

let prevDepsAry = []
let effectIndex = 0

function useEffect(callback, depsAry) {
	// 判断callback是不是函数
	if(Object.prototype.toString.call(callback) === '[object Function]') throw new Error()
	// 判断depsAry有没有被传递
	if(typeof depsAry === 'undefined') {
		// 没有传递
		callback()
	} else {
		// 判断depsAry是不是数组
		if(Object.prototype.toString.call(callback) === '[object Array]') throw new Error()
		// 获取上一次状态值
		let prevDeps = prevDepsAry[effectIndex]
		//将当前依赖值和上一次依赖值做对比 如果有变化 调用callback
		let hasChanged = prevDeps ? depsAry.every((dep, index) => dep === prevDeps) === false : true;
		if(hasChanged) {
			callback();
		}
		prevDeps[effectIndex] = depsAry;
		effectIndex++;
	}
}
```

#### useMemo

> useMemo 的行为类似Vue中的计算属性, 可以监测某个值的变化, 根据变化值计算新值.
> useMemo 会缓存计算结果. 如果监测值没有发生变化, 即使组件重新渲染, 也不会重新计算. 此行为可以有助于避免在每个渲染上进行昂贵的计算.


#### momo

性能优化, 如果本组件中的数据没有发生变化, 阻止组件更新. 类似类组件中的 PureComponent 和 shouldComponentUpdate

#### useCallback

性能优化, 缓存函数, 使组件重新渲染时得到相同的函数实例,保证传入子组件的函数相同,不重新渲染。

## 性能优化之useMemo、useCallback
[「好文翻译」为什么你可以删除 90% 的 useMemo 和 useCallback ？ - 掘金](https://juejin.cn/post/7251802404877893689)
总结：页面主要耗时发生在「大计算+重渲染」如长列表重排序，其他情况一般无需考虑缓存，反而会降低代码可读性
## 性能优化之key
[「好文翻译」React key属性：高性能列表的最佳实践 - 掘金](https://juejin.cn/post/7257022428194521145)
总结：列表变更会经历节点 unmount => mount => re-render，列表重排序使用 id 为 key 只会 re-render 优化性能。在表格分页场景下 index 作为 key 可能比 id 性能更好（个人测试生产环境偶尔比开发环境要好，但交互是点击按钮后还显示原来图片，过几秒才变化）
## Ref 原理解读
[react框架ref系列API的用法及原理解析 - 掘金](https://juejin.cn/post/7282290326068052023)
[「好文翻译」React 中的 Refs，从操作 DOM 到指令式 API - 掘金](https://juejin.cn/post/7291186330911326266)

# 杂七杂八

## 使用vnc访问远程系统

1. 首先远程要有个 vnc 服务，这里使用 tigervnc-server

```shell
docker pull centos
docker run --name centos-desktop-gnome --privileged -d -p 9527:5901 --ulimit memlock=-1 -td centos /usr/sbin/init	# 启动容器, 并暴露端口，远程桌面端口是5901
# 安装并使用图形界面
yum group install -y "GNOME Desktop"
systemctl set-default graphical.target # 系统的默认运行级别设置为图形界面(GUI)模式
lsb_release -a # 查看操作系统版本
yum install -y tigervnc-server # 安装vnc服务
# 开机启动 noVnc
systemctl enable novnc@:1.service
systemctl start novnc@:1.service
# 关闭防火墙
systemctl disable firewalld # 重启不恢复
systemctl stop firewalld
# 查看防火墙状态
firewall-cmd --state
```

2. 给 vnc 服务设置访问密码

```shell
vncpasswd # 输入两次6位及以上密码，并询问你是否开启只读模式
```

也可以无需密码访问

```shell
vi /root/.vnc/config
```

打开securitytypes=none,tlsvnc注释并修改参数值，保存文件退出。

3. 启动 vnc 服务

```shell
vncserver :1 # 默认 :1是5901端口，:2为5902端口，以此类推
theIp=`ifconfig | grep inet | head -n1 | awk '{print $2}'` # 当前ip
echo "---------- success -------------"
echo "vnc start at ${theIp}:5901"
# 关闭服务
vncserver -kill :1
```

4. 验证是否可访问
   下载 vnc-viewer 客户端
   [vnc-viewer官网](https://www.realvnc.com/en/connect/download/viewer/)
   输入 ip + port 访问

![image-20240619094123347](https://p.ipic.vip/6zoxu2.png)

![image-20240619094417060](https://p.ipic.vip/8c8fip.png)

5. 使用 noVnc 通过浏览器访问 vnc 服务
   原理：vnc 为 tcp 服务，启动 websocket 与其连接，并将服务代理

```shell
cd /root
yum -y install git
# git clone https://github.com/novnc/noVNC.git
git clone https://github.com/novnc/noVNC.git
cd /root/noVNC/utils
# git clone https://github.com/novnc/websockify
git clone https://github.com/novnc/websockify
yum -y install python3
pip3 install numpy
# 启动 noVnc 服务
/root/noVNC/utils/novnc_proxy --vnc 127.0.0.1:5901
```

![image-20240619100113474](https://p.ipic.vip/d7hvyv.png)

![image-20240619100827810](https://p.ipic.vip/1dv2tx.png)

```shell
# mac 查看端口占用
lsof -i:[PORT]
# 杀掉进程
kill -9 [PID]
```

6. noVnc 服务如果在 electron 里可以可能需要通过端口号杀掉进程

```js
// 函数：通过端口号杀掉进程
function killProcessByPort(port, callback) {
  // 根据操作系统选择命令
  let command;
  if (process.platform === 'win32') {
    command = `netstat -ano | findstr :${port} | findstr LISTENING | %a{ for /f "tokens=5" %b in ('findstr /R /N "^"') do if /I %b LSS 50 (taskkill /PID %b /F) }`;
  } else if (process.platform === 'darwin') {
    command = `lsof -i tcp:${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`;
  } else { // Linux/Unix
    command = `lsof -i :${port} | grep LISTEN | awk '{print $2}' | xargs kill -9`;
  }
 
  // 执行系统命令
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    callback(); // 回调函数
  });
}
 
// 使用示例
killProcessByPort(8080, () => {
  console.log('端口占用进程已杀掉');
});
```

## mac安装windows虚拟机

原本想使用 docker 安装操作系统镜像，然后使用 vnc 连接容器的，参考文章 => [把Windows 装进 Docker 容器里](https://zhuanlan.zhihu.com/p/686351917)

运行 docker compose 时报错，`no such file /dev/kvm` ，试了半天行不通，后来才知道 kvm 为内核虚拟化，**macOS 和 windows 10不支持**，可以通过 `QEMU` 工具模拟或者使用虚拟化技术来模拟一个 Linux 环境，简称套娃

后来想起来 VMWare 对个人免费了，决定使用它

需要先在 Broadcom 注册下载 VMware Fusion

在**微软官网**下载操作系统

最新的 windows 11 系统初始化引导时必须连接网络，按下 **Shift + F10** 打开命令行窗口输入 `oobe\BypassNRO` 跳过网络检查

## Mac 新电脑环境安装 2024.09.23

> 背景：最近经常换电脑，每次重新配置环境百度查教程找到的都不一样，筛选半天费时费力，决定记录下来

1. 安装 chrome, [iTerm2](https://iterm2.com/), vscode，[lemon](https://lemon.qq.com/)
2. chrome 登陆账号。如果不能翻墙，使用免费的插件 [SetupVPN](https://sxkk.throat.team//public/s/browser/chrome/)
3. 安装 brew。国内镜像

```shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

4. 安装 ohmyzsh。国内镜像

```shell
sh -c "$(curl -fsSL https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh)"
```

安装成功后会生成 ~/.zshrc 用于配置

5. 安装 ohmyzsh 插件。命令高亮，自动提示

```shell
cd ~/.oh_my_zsh/plugins
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
git clone https://github.com/zsh-users/zsh-autosuggestions.git
```

编辑 ~/.zshrc

```zshrc
plugins=(
    # other plugins...
    zsh-autosuggestions
    zsh-syntax-highlighting
)
```

6. 安装 nvm。

```shell
brew install nvm
```

安装完成后把最后的一段代码复制到 ~/.zshrc 最后，然后 source 保存

```shell
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

apple 芯片安装 nvm 后无法安装 node，需配置镜像，也是在 ~/.zshrc 中添加

```shell
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/
```

## 终端代理

自用 laddervpn 翻墙，但它的功能里没有**复制终端代理命令**的选项，所以一直没用过终端代理

![image](https://p.ipic.vip/56e1l1.png)

一、首先找到代理端口，打开梯子后可以在 **wifi ->详细信息->代理**  查看

二、编辑 `.zshrc`  文件，创建两个命令

```powershell
# proxy list
alias proxy='export https_proxy=http://127.0.0.1:9090;export http_proxy=http://127.0.0.1:9090;export all_proxy=socks5://127.0.0.1:9091'
alias unproxy='unset all_proxy https_proxy http_proxy'
```

三、查看效果

![image-20240925150812700](https://p.ipic.vip/sq530d.png)

