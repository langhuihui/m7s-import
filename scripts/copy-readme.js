#! node
const fs = require('fs');

const list = ['rtsp', 'rtmp', 'hdl', 'hls', 'debug', 'record', 'logrotate', 'jessica', 'webrtc', 'webtransport'];
list.forEach(item => {
  fs.copyFileSync(`../plugin-${item}/README.md`, `./apps/m7s-website/src/guide/plugins/${item}.md`);
});

