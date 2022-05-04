# 配置

v4 默认支持零配置启动，即无需配置文件即可运行。如果有配置文件则配置文件中配置将会覆盖默认配置。
:::tip 配置缓存文件
调用部分API会导致产生缓存配置文件，存放于.m7s目录下。例如调用了拉流转发后，会保存配置到该目录下，启动实例时会合并缓存中的配置信息和配置文件的配置信息。 
:::

## 全局配置

以下是全局配置的全部配置项，以及对应的默认值：
```yaml
global: #全局配置
    publish: # 发布者配置（可被插件中相同的配置项覆盖）
        pubaudio: true # 是否发布音频
        pubvideo: true # 是否发布视频
        kickexist: false # 是否提出已经存在的发布者
        publishtimeout: 10 # 发布者无数据10秒后自动发布失败
        waitclosetimeout: 0 # 当无人订阅时N秒后自动关闭流，0代表不关闭
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
    consoleurl: wss://console.monibuca.com:8080 # 远程管理界面地址
    secret: "" # 远程管理的密钥
```

## 回调格式



## 插件配置

请查看插件文档