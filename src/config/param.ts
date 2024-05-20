  export const appName = 'Arvin'
export const appDescription = 'Arvin Web App'

export const navFilter = [
  { label: '首页', route: '/', children: [] },
  { label: '文章', route: '/blog', children: [] },
  { label: '项目', route: '/project', children: [] },
]

export const SITE = {
  title: '博客',
  author: 'Moon',
  description: '记录 Moon 的不枯燥生活',
  profileContent: '我是Moon，是一位普通大学生，一重山有一重山的错落，我有我的平仄。',
  keywords: 'HTML,Blog,前端,博客',
  coordinate: [113.6401, 34.72468],
  icon: 'https://picture.cmymoon.com/head/favicon.png',
  pic: 'https://picture.cmymoon.com/head/favicon.png',
  cv: 'https://www.cmymoon.com/',
  juejin: '',
  mail: 'mailto:moon@cmymoon.com',
  homePage: '/',
  profilePage: '/profile',
  twitterId: 'yux1033582',
  twitterUrl: 'https://twitter.com/yux1033582',
  githubId: 'Monthpity',
  githubHome: 'https://github.com/Monthpity',
  weeklyUrl: 'https://cmymoon.com/',
  repo: 'pinky-pig/what-is-my-astro-blog',
  notion: 'https://cmymoon.notion.site/Notion-8ca6a45ea23447b6b6d96eb2ed8c8aa9?pvs=74',
  consoleColorFulOutput: '%cDon\'t ignore your dreams \nDon\'t work too much \nsay what you think \ncultivate friendships \nbe happy~ ',
}

/**
 * 首页 Bento 通用组件布局
 */
export const bentoCommonComponentsCfg = [
  { id: 'Profile', x: 0, y: 0, width: 2, height: 2, index: 0 },
  { id: 'Weekly', x: 2, y: 0, width: 2, height: 1, index: 0 },
  { id: 'Mapbox', x: 0, y: 1, width: 2, height: 1, index: 0 },
  { id: 'Dark', x: 3, y: 1, width: 1, height: 1, index: 0 },
  { id: 'CountDown', x: 3, y: 1, width: 2, height: 1, index: 0 },
  { id: 'Twitter', x: 4, y: 1, width: 1, height: 1, index: 0 },
  { id: 'PlaneView', x: 0, y: 2, width: 1, height: 2, index: 0 },
  { id: 'DragMotion', x: 3, y: 2, width: 1, height: 1, index: 0 },
  { id: 'Notion', x: 3, y: 2, width: 1, height: 1, index: 0 },
  { id: 'PageTransition', x: 4, y: 2, width: 1, height: 1, index: 0 },
]

/**
 * 首页 Bento 自定义组件布局
 */
export const bentoCustomComponentsCfg = [
  { id: 'StrokeText', x: 2, y: 2, width: 1, height: 1, index: 0 },
  { id: 'Sticker8', x: 3, y: 3, width: 1, height: 1, index: 0 },
  { id: 'Cover', x: 0, y: 2, width: 1, height: 2, index: 0 },
]

/**
 * 项目的内容
 */
export const PROJECTS = [
  {
    name: 'Moon',
    desc: '个人网站',
    cover: 'https://picture.cmymoon.com/else/blog.webp',
    demoUrl: 'https://cmymoon.com/',
    repoUrl: 'https://github.com/Monthpity/Monthpity.github.io',
  },
  {
    name: 'Moonの小屋',
    desc: '收集的一些有趣的单页',
    cover: 'https://picture.cmymoon.com/else/room.webp',
    demoUrl: 'https://room.cmymoon.com/',
    repoUrl: 'https://github.com/Monthpity/Moon-room',
  },
  {
    name: 'MoonのGPT',
    desc: '利用ChatGPT-Next-Web项目搭建',
    cover: 'https://picture.cmymoon.com/else/chatgpt.webp',
    demoUrl: 'https://chat.cmymoon.com/',
    repoUrl: 'https://github.com/Monthpity/Moon-ChatGPT',
  },
]

export const giscusSetting = {
  'data-repo': 'pinky-pig/Arvin',
  'data-repo-id': 'R_kgDOLC_KIQ',
  'data-category': 'General',
  'data-category-id': 'DIC_kwDOLC_KIc4CexE9',
  'data-mapping': 'og:title',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'bottom',
  'data-lang': 'zh-CN',
  'data-loading': '',
  'crossorigin': 'anonymous',
}

export enum MapboxSetting {
  token = 'pk.eyJ1IjoicGlua3ktcGlnIiwiYSI6ImNsZnJvZ2Q1cDAwZ3ozcG56bXFwbjAzZjAifQ.eEOFvRbKqZHQ3OxeqPBsXw',
  mapLightStyle = 'mapbox://styles/pinky-pig/clgc32u1e004g01n2bitvj86a',
  mapDarkStyle = 'mapbox://styles/pinky-pig/clft35kll000o01osk8svnlfg',
}
