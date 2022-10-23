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
global: #全局配置
    console: # 远程控制台配置
        server: console.monibuca.com:4242 # 远程控制台地址
        secret: "" # 远程控制台密钥，需要在console.monibuca.com登录后创建实例时获取到
        publicaddr: "" # 实例公网地址，用于在远程打开实例的某些页面（例如预览、日志等）
        publicaddrtls: "" # 实例公网地址（https），用于在远程打开实例的某些页面（例如预览、日志等）
    publish: # 发布者配置（可被插件中相同的配置项覆盖）
        pubaudio: true # 是否发布音频
        pubvideo: true # 是否发布视频
        kickexist: false # 是否提出已经存在的发布者
        publishtimeout: 10 # 发布者无数据10秒后自动发布失败
        delayclosetimeout: 0 # 当无人订阅时延迟关闭时间，单位秒，0表示不延迟关闭
        waitclosetimeout: 0 # 当发布者下线后延迟关闭流时间（用于等待重连上线），0代表使用订阅者的waittimeout，单位秒
    subscribe: # 订阅者配置（可被插件中相同的配置项覆盖）
        subaudio: true # 是否订阅音频
        subvideo: true # 是否订阅视频
        iframeonly: false # 是否只订阅关键帧
        waittimeout: 10 # 订阅后N秒后仍然无发布者，则订阅失败
    http: # web server配置项（可被插件中相同的配置项覆盖）
        listenaddr: :8080 # 默认开启的http端口
        listenaddrtls: "" # https端口
        certfile: "" # https用到的证书
        keyfile: "" # https用到的证书的key
        cors: true # 开启自动添加CORS头
        username: "" # 基本身份认证的用户名
        password: "" # 基本身份认证的密码
    rtpreorder: false # 是否开启rtp包乱序重排功能
    enableavcc: true # 是否开启avcc格式缓存
    enablertp: true # 是否开启rtp包格式缓存
    enableflv: true # 是否开启flv格式缓存
    loglevel: info # 日志级别
    rtpreorderbufferlen: 50 # rtp乱序重排缓存长度
```

## 插件配置

请查看插件文档
