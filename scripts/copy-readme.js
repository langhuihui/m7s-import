#! node
const fs = require('fs');

const list = ['rtsp', 'rtmp', 'hdl', 'hls', 'debug', 'record'];
list.forEach(item => {
  fs.copyFileSync(`../plugin-${item}/README.md`, `./apps/m7s-website/src/guide/plugin/${item}.md`);
});

