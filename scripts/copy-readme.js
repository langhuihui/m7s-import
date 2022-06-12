#! node
const fs = require('fs');

const list = ['rtsp', 'rtmp', 'hdl', 'hls', 'room', 'debug', 'record', 'logrotate', 'jessica', 'webrtc', 'webtransport', 'hook', 'preview', 'snap'];
list.forEach(item => {
  fs.copyFileSync(`../plugin-${item}/README.md`, `./apps/m7s-website/src/guide/plugins/${item}.md`);
});

