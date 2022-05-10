#! node
const fs = require('fs');

const list = ['rtsp', 'rtmp', 'hdl', 'hls', 'gb28181', 'debug', 'record', 'logrotate', 'jessica', 'webrtc', 'webtransport', 'hook'];
list.forEach(item => {
  fs.copyFileSync(`../plugin-${item}/README.md`, `./apps/m7s-website/src/guide/plugins/${item}.md`);
});

