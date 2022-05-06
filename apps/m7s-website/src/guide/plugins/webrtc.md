# WebRTC 插件

提供通过网页发布视频到monibuca，以及从monibuca拉流通过webrtc进行播放的功能

## 插件地址

https://github.com/Monibuca/plugin-webtrc

## 插件引入
```go
    import (  _ "m7s.live/plugin/webrtc/v4" )
```

# 基本原理

通过浏览器和monibuca交换sdp信息，然后读取rtp包或者发送rtp的方式进行

# API
- /webrtc/api/play?streamPath=live/rtc
用于播放live/rtc的流，需要在请求的body中放入sdp数据，这个接口会返回服务端的sdp数据
- /webrtc/api/publish?streamPath=live/rtc
同上