- [工具](#工具)
- [路由配置](#路由配置)
- [LRU 算法](#lru-算法)
- [js快慢数组](#js快慢数组)
- [hashtable](#hashtable)
- [树](#树)
- [使用vnc访问远程系统](#使用vnc访问远程系统)
- [grpc](#grpc)
- [mac安装windows虚拟机](#mac安装windows虚拟机)
- [TS 函数重载](#ts-函数重载)
- [TS 和 JS 通信](#ts-和-js-通信)
- [HTML 元素 label 标签介绍](#html-元素-label-标签介绍)
- [css 布局之 grid](#css-布局之-grid)
- [TS 碎碎](#ts-碎碎)
  - [Element implicitly has an ‘any’ type because expression of type ‘string’ can’t be used to index type](#element-implicitly-has-an-any-type-because-expression-of-type-string-cant-be-used-to-index-type)
- [Mac 新电脑环境安装 2024.09.23](#mac-新电脑环境安装-20240923)

# 工具

- 生成随机图片

  https://picsum.photos/200/300  https://picsum.photos/

- threejs 镜头控制器

  https://yomotsu.github.io/camera-controls/

- 简单预览图片工具

  https://kirlovon.dev/zoomtastic/

- threejs editor 

  https://threejs.org/editor/index.html

# 路由配置

假设计算机上有 wifi 和 网线两种连接方式，你输入一个网址后计算机无法知道采用哪种方式解析，路由表就是告诉计算机解析方式的。
使用 `netstat -nr` 查看路由表

![image-20240923133034122](https://p.ipic.vip/y8gdzw.png)

一二行是 wifi 和 网线的解析路径，下面 **10.200.1/24** 会采用网线解析，添加路由表的命令为：


```shell
sudo -S route -n add -net 192.100.50.0 -netmask 255.255.255.0 10.200.101.1 
```

# LRU 算法
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

# js快慢数组

前端进阶算法2：从Chrome V8源码看JavaScript数组（附赠腾讯面试题: https://github.com/sisterAn/JavaScript-Algorithms/issues/2

# hashtable
没看懂 —— 关联两数三数之和

# 树
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

# 使用vnc访问远程系统
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

# grpc
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



# mac安装windows虚拟机

原本想使用 docker 安装操作系统镜像，然后使用 vnc 连接容器的，参考文章 => [把Windows 装进 Docker 容器里](https://zhuanlan.zhihu.com/p/686351917)

运行 docker compose 时报错，`no such file /dev/kvm` ，试了半天行不通，后来才知道 kvm 为内核虚拟化，**macOS 和 windows 10不支持**，可以通过 `QEMU` 工具模拟或者使用虚拟化技术来模拟一个 Linux 环境，简称套娃

后来想起来 VMWare 对个人免费了，决定使用它

需要先在 Broadcom 注册下载 VMware Fusion

在**微软官网**下载操作系统

最新的 windows 11 系统初始化引导时必须连接网络，按下 **Shift + F10** 打开命令行窗口输入 `oobe\BypassNRO` 跳过网络检查



# TS 函数重载

Ts 函数重载，第一个参数不同影响第二个参数，先把每种情况写出来，再写一个聚合的 使用 ｜



# TS 和 JS 通信

可以使用模版字符串的形式 \`` 比如可以用在 Nodejs 服务的参数校验部分



# HTML 元素 label 标签介绍

label 标签为 input 元素提供标记，类似 span 标签，区别在于它为鼠标用户改进了可用性，可以关联特定表单控件

应用场景：1. 点击 label 聚焦 input 框 2. 点击 label 选中 checkbox 3. 点击 label 上传文件。特别提下第三点，默认的上传控件需要使用 input 元素并设置 type = 'file' 属性![image-20240905100337282](/Users/zhangmo/Library/Application Support/typora-user-images/image-20240905100337282.png)无法更改按钮内部文字和右侧文字，此时就可以使用  label 关联此控件，并把 input 元素隐藏

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

# css 布局之 grid

```html
div.grid-content>(div.card>h2{some title}+p{价物那整极高根必化张社说思准华。济算日能米单传年单政公学目九青动里儿。华交线次革里林人来去出量几主酸。老示百常知亲切红改准马酸周提地头。})*10
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

```html
lorem2000 生成两千个字符
```

使用 vscode Emmet Abbreviation 语法生成节点结构



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

# TS 碎碎

## Element implicitly has an ‘any’ type because expression of type ‘string’ can’t be used to index type

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

ts 会报类似标题的错误，原因是 ts 把 letterAspectRatio 的 key 和 value 的类型也推断了，类型为 { readonly a: 0.5589996337890625...  }，如果随意传入 letter: string 它就认为是错误，很显然上面的代码是想利用 js 对象取值的逻辑如果取到返回对应值否则返回 undefined，如何避免 ts 报错呢？

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

# Mac 新电脑环境安装 2024.09.23
> 背景：最近经常换电脑，每次重新配置环境百度查教程找到的都不一样，个人筛选半天费时费力，决定自己记录下来
1. 安装 chrome, [iTerm2](https://iterm2.com/), vscode
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
