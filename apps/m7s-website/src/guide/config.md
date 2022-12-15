# 配置

v4 默认支持零配置启动，即无需配置文件即可运行。如果有配置文件则配置文件中配置将会覆盖默认配置。
:::tip 配置缓存文件
调用部分API会导致产生缓存配置文件，存放于.m7s目录下。例如调用了拉流转发后，会保存配置到该目录下，启动实例时会合并缓存中的配置信息和配置文件的配置信息。 
:::

## 全局配置

以下是全局配置的全部配置项，以及对应的默认值：
:::tip 注意
下面是默认配置项，所以不需要复制到配置文件中去，只需要把需要修改的部分填写到配置文件中即可覆盖默认配置。 
:::
```yaml
global:
  loglevel: info # 日志级别，可选值：debug,info,warn,error,panic,fatal
  http:
    listenaddr: :8080 # 网关地址，用于访问API
    listenaddrtls: ""  # 用于HTTPS方式访问API的端口配置
    certfile: ""
    keyfile: ""
    cors: true  # 是否自动添加cors头
    username: ""  # 用户名和密码，用于API访问时的基本身份认证
    password: ""
  publish:
      pubaudio: true # 是否发布音频流
      pubvideo: true # 是否发布视频流
      kickexist: false # 剔出已经存在的发布者，用于顶替原有发布者
      publishtimeout: 10 # 发布流默认过期时间单位秒，超过该时间发布者没有恢复流将被删除
      delayclosetimeout: 0 # 自动关闭触发后延迟的秒数(期间内如果有新的订阅则取消触发关闭)，0为关闭该功能，保持连接。
      waitclosetimeout: 0 # 发布者断开后等待时间，超过该时间发布者没有恢复流将被删除，0为关闭该功能，由订阅者决定是否删除
  subscribe:
      subaudio: true # 是否订阅音频流
      subvideo: true # 是否订阅视频流
      iframeonly: false # 只订阅关键帧
      waittimeout: 10 # 等待发布者的秒数，用于订阅尚未发布的流
  rtpreorder : true # 启用RTP包乱序重排
  enableavcc : true  # 启用AVCC格式缓存，用于rtmp协议
  enablertp : true # 启用rtp格式缓存，用于rtsp、websocket、gb28181协议
  enableauth: true # 启用鉴权,详细查看鉴权机制
  enablesubevent: true # 启用订阅事件，用于订阅者上下线事件,关闭可以提高性能
  rtpreoderbufferlen: 50 # rtp乱序重排缓存长度
  speedlimit: 0 # 限速超时时间（毫秒）0为不限速，对于读取文件这类流需要限速，否则读取过快
  eventbussize: 10 # 事件总线缓存大小，事件较多时容易堵阻塞线程，需要增大缓存
  console: 
    server : console.monibuca.com:4242 # 连接远程控制台的地址
    secret: "" # 远程控制台的秘钥
    publicaddr: "" # 实例公网地址，提供远程控制台访问的地址，不配置的话使用自动识别的地址
    publicaddrtls: "" # 实例公网地址，提供远程控制台访问的地址，不配置的话使用自动识别的地址（https）
```

## 插件配置

请查看插件文档
