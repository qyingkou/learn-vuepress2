import { defaultTheme } from 'vuepress'

export default {
  base: '/learn-vuepress2/',
  lang: 'zh-CN',
  // title: '',
  description: '',
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/qyingkou/learn-vuepress2',
    // navbar: [
    //   {
    //     text: 'foo',
    //     link: '/',
    //   },
    //   {
    //     text: 'bar',
    //     children: ['/group/foo.md', '/group/bar.md', '/group/see.md'],
    //   }
    // ],
    sidebar: [
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          {
            text: 'github',
            link: 'https://github.com',
            children: ["1", "2"],
          },
          {
            text: 'gitlab',
            link: 'https://gitlab.com',
            children: [],
          },
        ],
      },
      {
        text: 'Bar',
        link: '/bar/',
        children: [
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          {
            text: 'gitlab',
            link: 'https://gitlab.com',
            children: [],
          },
        ],
      },
    ],
    footer: 'footer!!!!!!'
  }),
}