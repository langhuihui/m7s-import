const data = [
  { name: '首页', url: '/' },
  {
    name: 'v3文档',
    url: 'https://docs.m7s.live'
  },
  {
    name: 'v4文档',
    activeMatch: `^/(guide)/`,
    children: [
      { name: '使用指南', url: '/guide/introduction' }
    ]
  },
  {
    name: '视频教程',
    url: 'https://www.bilibili.com/medialist/play/328443019?from=space&business=space_series&business_id=2076672&desc=0&spm_id_from=333.999.0.0'
  },
  {
    name: '不卡系列',
    children: [
      { name: 'Monibuca', url: '/' },
      { name: 'Jessibuca', url: 'https://jessibuca.com' },
      { name: 'Rebebuca', url: 'https://rebebuca.com' }
    ]
  },
  {
    name: '下载v3',
    children: [
      {
        name: 'Windows',
        url: 'https://monibuca.com/windows.tgz'
      },
      {
        name: 'Mac',
        url: 'https://monibuca.com/mac.tgz'
      },
      {
        name: 'Mac(arm64)',
        url: 'https://monibuca.com/mac_arm64.tgz'
      },
      {
        name: 'Linux',
        url: 'https://monibuca.com/linux.tgz'
      },
      {
        name: 'Linux(arm64)',
        url: 'https://monibuca.com/linux_arm64.tgz'
      }
    ]
  },
  {
    name: '下载v4',
    children: [
      {
        name: 'Windows',
        url: 'https://m7s.live/bin/m7s_windows_amd64.tar.gz'
      },
      {
        name: 'Mac',
        url: 'https://m7s.live/bin/m7s_darwin_amd64.tar.gz'
      },
      {
        name: 'Mac(arm64)',
        url: 'https://m7s.live/bin/m7s_darwin_arm64.tar.gz'
      },
      {
        name: 'Linux',
        url: 'https://m7s.live/bin/m7s_linux_amd64.tar.gz'
      },
      {
        name: 'Linux(arm64)',
        url: 'https://m7s.live/bin/m7s_linux_arm64.tar.gz'
      }
    ]
  },
  {
    name: '控制台',
    url: 'https://console.monibuca.com'
  },
  {
    name: '关于',
    activeMatch: `^/(about)/`,
    children: [
      { name: 'FAQ', url: '/about/faq' },
      { name: '开发团队', url: '/about/team' },
      { name: '诞生故事', url: '/about/born' },
    ]
  }
]

export const menu = data.slice(1).map(item => {
  const result = {
    name: item.name,
    url: item.url + ".html",
    children: item.children?.map(child => ({ name: child.name, url: child.url + ".html" }))
  }
  return result
})
export const nav = data.map(item => {
  const result = {
    text: item.name,
    link: item.url,
    items: item.children?.map(child => ({ text: child.name, link: child.url }))
  }
  return result
})
