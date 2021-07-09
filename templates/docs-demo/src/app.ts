/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-shadow */
import './app.less';

import qs from 'qs';

import Strings from '@i18n';

export const locale = {
  getLocale() {
    const { search } = window.location;
    // 获取url上的locale参数
    const { locale = 'zh-CN' } = qs.parse(search, { ignoreQueryPrefix: true });
    // @ts-ignore
    Strings.setLanguage({ en: 'en', cn: 'zh', zh: 'zh' }[String(locale)] ?? 'en'); // 设置语言
    return locale;
  },
};

const isProd = process.env.NODE_ENV === 'production';
if (isProd) {
  window.console.log = () => '';
}
