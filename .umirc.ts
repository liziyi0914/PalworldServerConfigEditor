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
  },
  headScripts: [
    {
      content: `(function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments);};
                    t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, 'clarity', 'script', 'krcmv2bfkv');`,
    },
  ],
});

