import { defaultTheme } from 'vuepress'

export default {
  base: '/cungee/',
  lang: 'zh-CN',
  title: 'CUNGEE',
  description: 'This is a zero-based advanced guide, aiming to pass the national postgraduate examination (408 direction)',
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/qyingkou/cungee',
    navbar: [
      {
        text: 'foo',
        link: '/',
      },
      {
        text: 'bar',
        children: ['/group/foo.md', '/group/bar.md', '/group/see.md'],
      }
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