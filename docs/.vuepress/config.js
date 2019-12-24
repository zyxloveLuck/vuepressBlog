module.exports = {
  base: '/',
  title: '今天你好，明天再见！',
  description: '路漫漫其修远兮...',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/zyxloveLuck/blog-demo',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [
        { text: 'Home', link: '/' },
        { text: 'FirstBlog', link: '/blog/FirstBlog.md' }
    ],
    sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客']
    ]
  }
}