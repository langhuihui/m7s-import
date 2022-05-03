---
sidebarDepth: 3
---
# API

Monibuca提供HTTP形式的API调用，方便用户对Monibuca实例进行信息的读取和指令下达。
> API的地址都是全小写，请注意，但是参数包含大小写

## 全局API

:::tip SSE
部分API默认以SSE（[Server-Sent Events](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events)）形式返回信息，通常是那些需要每隔几秒就刷新的数据，通过对API附加json=1来改变返回的形式，成为一次返回json格式的方式。
:::

###  `/api/summary?json=1` 
获取采样数据,包括CPU、内存、网卡数据、以及流信息

```json
{
    "Address": "",
    "Memory": {
        "Total": 16329,
        "Free": 7245,
        "Used": 9084,
        "Usage": 55
    },
    "CPUUsage": 18.489583333333336,
    "HardDisk": {
        "Total": 118,
        "Free": 81,
        "Used": 36,
        "Usage": 31.09762681009245
    },
    "NetWork": [
        {
            "Name": "以太网",
            "Receive": 11320054840,
            "Sent": 1410319631,
            "ReceiveSpeed": 0,
            "SentSpeed": 0
        },
        {
            "Name": "Loopback Pseudo-Interface 1",
            "Receive": 0,
            "Sent": 0,
            "ReceiveSpeed": 0,
            "SentSpeed": 0
        },
        {
            "Name": "vEthernet (Default Switch)",
            "Receive": 0,
            "Sent": 2895541,
            "ReceiveSpeed": 0,
            "SentSpeed": 0
        }
    ],
    "Streams": [
        {
            "StartTime": "0001-01-01T00:00:00Z",
            "WaitTimeout": 10000000000,
            "PublishTimeout": 10000000000,
            "WaitCloseTimeout": 0,
            "Path": "live/test",
            "Publisher": {
                "ID": "",
                "Type": "RTMPReceiver",
                "StartTime": "2022-05-03T13:00:22.5353264+08:00",
                "Args": {},
                "StreamID": 1
            },
            "State": 1,
            "Subscribers": [
                {
                    "ID": "",
                    "Type": "RTSPSubscriber",
                    "StartTime": "2022-05-03T13:00:23.8753554+08:00",
                    "Args": {}
                }
            ],
            "Tracks": {
                "aac": {
                    "Name": "aac",
                    "BPS": 72480,
                    "SampleRate": 44100,
                    "SampleSize": 16,
                    "CodecID": 10,
                    "Channels": 2,
                    "AVCCHead": "rwE=",
                    "Profile": 2
                },
                "h264": {
                    "Name": "h264",
                    "BPS": 2226142,
                    "SampleRate": 90000,
                    "SampleSize": 0,
                    "CodecID": 7,
                    "SPSInfo": {
                        "ProfileIdc": 66,
                        "LevelIdc": 31,
                        "MbWidth": 80,
                        "MbHeight": 45,
                        "CropLeft": 0,
                        "CropRight": 0,
                        "CropTop": 0,
                        "CropBottom": 0,
                        "Width": 1280,
                        "Height": 720
                    },
                    "GOP": 27
                }
            },
            "AppName": "live",
            "StreamName": "test"
        }
    ]
}
```

###  `/api/sysinfo` 
系统信息，包含版本号（Version）和启动时间（StartTime）两个字段

###  `/api/stopstream?streamPath=xxx`
终止某一个流，入参是流标识（streamPath）
> 返回200代表成功，404代表不存在这个流，400代表没有传入入参

###  `/api/getconfig` 
获取配置文件信息，可以加参数name=xxx，获取xxx插件的配置信息（不加参数则获取全局配置信息）
> 返回404代表没有这个插件
```json
{
    "consoleurl": "wss://console.monibuca.com:8080",
    "enableavcc": true,
    "enableflv": true,
    "enablertp": true,
    "http": {
        "certfile": "",
        "cors": true,
        "keyfile": "",
        "listenaddr": ":8080",
        "listenaddrtls": "",
        "password": "",
        "username": ""
    },
    "publish": {
        "kickexist": false,
        "pubaudio": true,
        "publishtimeout": 10,
        "pubvideo": true,
        "waitclosetimeout": 0
    },
    "rtpreorder": false,
    "secret": "",
    "subscribe": {
        "iframeonly": false,
        "subaudio": true,
        "subvideo": true,
        "waittimeout": 10
    }
}
```
###  `/api/modifyconfig`
修改配置信息，可以加参数name=xxx，代表修改xxx插件的配置信息（不加参数则修改全局配置信息）
> 返回404代表没有这个插件

修改的配置信息通过请求的body（JSON格式）提交

###  `/api/updateconfig`
热更新配置信息，可以加参数name=xxx，代表热更新xxx插件的配置信息（不加参数则热更新全局配置信息）
> 返回404代表没有这个插件
> 热更新只是调用了插件的OnEvent函数，具体如何更新取决于插件实现的逻辑

## 插件API

请参考各插件说明文档