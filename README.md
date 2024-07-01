- [内网路由配置](#内网路由配置)
- [LRU 算法](#lru-算法)
- [js快慢数组](#js快慢数组)
- [hashtable](#hashtable)
- [树](#树)
- [使用vnc访问远程系统](#使用vnc访问远程系统)
- [grpc](#grpc)

# 内网路由配置
```shell
sudo -S route -n add -net 192.100.50.0 -netmask 255.255.255.0 10.200.101.1 
sudo -S route -n add -net 192.100.20.0 -netmask 255.255.255.0 10.200.101.1 
sudo -S route -n add -net 192.100.10.0 -netmask 255.255.255.0 10.200.101.1
sudo -S route -n add -net 192.100.60.0 -netmask 255.255.255.0 10.200.101.1
sudo -S route -n add -net 10.200.102.0 -netmask 255.255.255.0 10.200.101.1
sudo -S route -n add -net 10.200.1.0 -netmask 255.255.255.0 10.200.101.1
sudo -S route -n add -net 10.200.121.0 -netmask 255.255.255.0 10.200.101.1
sudo -S route -n add -net 10.200.115.0 -netmask 255.255.255.0 10.200.101.1
sudo route -n add -net 10.200.115.16 -netmask 255.255.255.0 10.200.101.1
sudo route -n add -net 10.200.191.0 -netmask 255.255.255.0 10.200.101.1
sudo -S route -n add -net 192.100.50.99 -netmask 255.255.255.0 10.200.101.1
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
