/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import { Strings } from 'tuya-panel-kit';
import { useHistory } from 'umi';

// 这里监听文档发来的消息
export const useMessagePush = () => {
  const history = useHistory();
  useEffect(() => {
    const handle = event => {
      const { method, data } = event.data;
      // 文档发来路由消息
      if (method === 'navigate' && data) {
        // 判断文档的中英文
        const isEN = /^\/en/.test(data);
        // @ts-ignore
        const currentIsEN = Strings.language === 'en';
        // 如果改变了中英文，这里强制reload页面以刷新i18n渲染
        if (isEN !== currentIsEN) {
          window.location.href = `${isEN ? '/en' : ''}${data}`; // reload
          Strings.setLanguage(isEN ? 'en' : 'zh'); // 设置i18n语言
        } else {
          history.push(data); // 使用react-router-dom和文档路由同步跳转
        }
      }
    };
    window.addEventListener('message', handle);
    return () => {
      window.removeEventListener('message', handle);
    };
  }, [history]);
};
