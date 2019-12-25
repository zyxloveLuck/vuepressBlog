module.exports = {
  base: '/',
  title: '今天你好，明天再见！',
  description: '路漫漫其修远兮...',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/zyxloveLuck',
    // 自定义仓库链接文字。
    repoLabel: 'My GitHub',
    nav: [
        { text: '首页', link: '/' },
        { text: 'FirstBlog', link: '/blog/FirstBlog.md' },
        {
           text: '笔记',
           items: [
             { text: 'Markdown', link: '/markdown/Markdown'},
             { text: 'vue', link: '/vue/components'},
             { text: 'js', link: '/js/js1' }
           ]
        }
    ],
    sidebar: {
      '/vue/': [
        {
          title:'前端Vue',
          collapsable: false,
          children:[
            '/vue/components',
            '/vue/test',
          ]
        },
        {
          title:'高级',
          collapsable: true,
          children:[
            '/vue/test1',
          ]
        },
      ],
      '/js/': [
        {
          title:'前端js',
          collapsable: false,
          children:[
            '/js/js1',
            '/js/js2',
          ]
        },
      ]
    }
    // sidebar: [
    //   {
    //     title: 'vue',
    //     // path: '/blog/FirstBlog',
    //     collapsable: false,
    //     children: [
    //       ['/vue/components','vue组件传值'],
    //       ['/vue/test','vuex'],
    //       ['/vue/test1','v-model原理']
    //     ]
    //   },
    //   {
    //     title: '博客',
    //     collapsable: false,
    //     children: [
    //       ['/blog/FirstBlog','记录']
    //     ]
    //   }
    // ]
  }
}