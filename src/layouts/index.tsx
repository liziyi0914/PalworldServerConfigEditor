import React, { useEffect, useState } from 'react';
import { App, Button, ConfigProvider, FloatButton, Modal, theme } from 'antd';
import { Outlet } from 'umi';
import { useModel } from '@umijs/max';
import { Moon, SunOne, Translate } from '@icon-park/react';
import { css } from '@emotion/css';
import './index.less';
import { getAllLocales, Helmet, setLocale, useIntl } from '@@/exports';

const { useToken } = theme;

const langMap: Record<string, string> = {
  'zh-CN': '简体中文',
  'en-US': 'English',
};

const Page: React.FC = () => {
  const { token } = useToken();

  return (
    <div
      style={{
        backgroundColor: token.colorBgLayout,
      }}
      className={`${css`
          & {
              min-height: 100vh;
              min-height: calc(var(--vh, 1vh) * 100);
          }

          /* 设置滚动条的样式 */

          *::-webkit-scrollbar {
              width: 6px;
              height: 6px;
          }

          /* 滚动槽 */

          *::-webkit-scrollbar-track {
              border-radius: 6px;
          }

          /* 滚动条滑块 */

          *::-webkit-scrollbar-thumb {
              border-radius: 6px;
              background: ${token.colorFillContentHover};
          }

          *::-webkit-scrollbar-thumb:window-inactive {
              background: ${token.colorFillContent};
          }

      `}`}
    >
      <Outlet />
    </div>
  );
};

const Layout: React.FC = () => {
  const { isDark, setIsDark } = useModel('themeModel');
  const i18n = useIntl();

  const [openI18nModal, setOpenI18nModal] = useState(false);
  const [supportLocales, setSupportLocales] = useState<string[]>([]);

  useEffect(() => {
    setSupportLocales(getAllLocales());
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          fontFamily: 'MiSans, system-ui, sans-serif',
        },
      }}
    >
      <Helmet>
        <title>Palworld Server Config Editor</title>
      </Helmet>
      <App>
        <Modal
          destroyOnClose
          title={i18n.formatMessage({ id: 'language' })}
          footer={false}
          open={openI18nModal}
          onCancel={() => setOpenI18nModal(false)}
        >
          {supportLocales.map((lang) => (
            <Button
              key={lang}
              type="text"
              block
              onClick={() => {
                setLocale(lang, false);
                setOpenI18nModal(false);
              }}
            >
              {langMap[lang]}
            </Button>
          ))}
        </Modal>
        <FloatButton.Group>
          <FloatButton
            tooltip={i18n.formatMessage({ id: 'language' })}
            icon={<Translate />}
            onClick={() => {
              setOpenI18nModal(true);
            }}
          />
          <FloatButton
            tooltip={i18n.formatMessage({ id: 'darkMode' })}
            icon={isDark ? <Moon /> : <SunOne />}
            onClick={() => {
              setIsDark(!isDark);
            }}
          />
        </FloatButton.Group>
        <Page />
      </App>
    </ConfigProvider>
  );
};

export default Layout;
