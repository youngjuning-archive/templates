/* eslint-disable no-restricted-globals */
import { useHistory } from 'umi';

import Strings from '@i18n';

// 这里用于和文档路由事件绑定
export const usePostedPush = () => {
  const history = useHistory();

  const push = (href: string) => {
    history.push(href);
    const currentIsEN = Strings.language === 'en';
    // 当demo执行push时，将path发送给文档
    // 这里会处理多语言前缀，默认中文、英文为 /、/en
    // 这里会处理通知文档前往首页，文档首页应为/getting-started （这里暂时写死，有需求可以更改指向）
    if (top !== self) {
      top.postMessage(
        {
          method: 'navigate',
          data: `${currentIsEN ? '/en' : ''}/docs${href === '/' ? '/getting-started' : href}`,
        },
        '*'
      );
    }
  };

  return push;
};
