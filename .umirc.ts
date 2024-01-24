import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    {
      path: '/',
      component: './Index',
    },
  ],
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    baseSeparator: '-',
  },
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
  npmClient: 'yarn',
  history: {
    type: 'hash',
  },
  analytics: {
    ga_v2: 'G-9TP8M46FT5',
  }
});

