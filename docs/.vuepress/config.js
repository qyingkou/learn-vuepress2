import { defaultTheme } from 'vuepress'

export default {
  theme: defaultTheme({
    base: '/cungee/',
    logo: '/images/logo.png',
    notFound: ["啥也没有", "空空如也", "这是未开垦的荒地", "一片荒芜之地"],
    // backToHome: "回去",
    lastUpdated: true,
    repo: 'https://github.com/qingkooo/CUNGEE',
    navbar: [
      {
        text: 'foo',
        link: '/',
      },
      {
        text: 'bar',
        children: ['/group/foo.md', '/group/bar.md', '/group/see.md'],
      },
      '/bar/README.md',
    ],
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
  }),
}