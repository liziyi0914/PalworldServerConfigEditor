"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[717],{93421:function(z,c,n){n.r(c),n.d(c,{default:function(){return F}});var g=n(5574),v=n.n(g),x=n(68400),j=n.n(x),l=n(62435),r=n(9361),C=n(28459),k=n(97475),Z=n(85576),M=n(14726),u=n(16945),a=n(26229),y=n(72203),A=n(10739),S=n(40547),p=n(9685),t=n(86074),f,D=r.Z.useToken,E={"zh-CN":"\u7B80\u4F53\u4E2D\u6587","en-US":"English"},L=function(){var s=D(),o=s.token;return(0,t.jsx)("div",{style:{backgroundColor:o.colorBgLayout},className:"".concat((0,p.iv)(f||(f=j()([`
          & {
              min-height: 100vh;
              min-height: calc(var(--vh, 1vh) * 100);
          }

          /* \u8BBE\u7F6E\u6EDA\u52A8\u6761\u7684\u6837\u5F0F */

          *::-webkit-scrollbar {
              width: 6px;
              height: 6px;
          }

          /* \u6EDA\u52A8\u69FD */

          *::-webkit-scrollbar-track {
              border-radius: 6px;
          }

          /* \u6EDA\u52A8\u6761\u6ED1\u5757 */

          *::-webkit-scrollbar-thumb {
              border-radius: 6px;
              background: `,`;
          }

          *::-webkit-scrollbar-thumb:window-inactive {
              background: `,`;
          }

      `])),o.colorFillContentHover,o.colorFillContent)),children:(0,t.jsx)(a.Outlet,{})})},T=function(){var s=(0,a.useModel)("themeModel"),o=s.isDark,O=s.setIsDark,i=(0,a.useIntl)(),P=(0,l.useState)(!1),h=v()(P,2),b=h[0],d=h[1],B=(0,l.useState)([]),m=v()(B,2),H=m[0],N=m[1];return(0,l.useEffect)(function(){N((0,a.getAllLocales)())},[]),(0,t.jsxs)(C.ZP,{theme:{algorithm:o?r.Z.darkAlgorithm:r.Z.defaultAlgorithm,token:{fontFamily:"MiSans, system-ui, sans-serif"}},children:[(0,t.jsx)(a.Helmet,{children:(0,t.jsx)("title",{children:"Palworld Server Config Editor"})}),(0,t.jsxs)(k.Z,{children:[(0,t.jsx)(Z.Z,{destroyOnClose:!0,title:i.formatMessage({id:"language"}),footer:!1,open:b,onCancel:function(){return d(!1)},children:H.map(function(e){return(0,t.jsx)(M.ZP,{type:"text",block:!0,onClick:function(){(0,a.setLocale)(e,!1),d(!1)},children:E[e]},e)})}),(0,t.jsxs)(u.Z.Group,{children:[(0,t.jsx)(u.Z,{tooltip:i.formatMessage({id:"language"}),icon:(0,t.jsx)(y.Z,{}),onClick:function(){d(!0)}}),(0,t.jsx)(u.Z,{tooltip:i.formatMessage({id:"darkMode"}),icon:o?(0,t.jsx)(A.Z,{}):(0,t.jsx)(S.Z,{}),onClick:function(){O(!o)}})]}),(0,t.jsx)(L,{})]})]})},F=T}}]);
