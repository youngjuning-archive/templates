import Strings from '@i18n';

// basic
import BrickButton from './pages/basic/brick-button';
import Button from './pages/basic/button';

export const routes = [
  // basic
  {
    name: Strings.getLang('brick_button'),
    href: '/basic/brick-button',
    component: BrickButton,
  },
  {
    name: Strings.getLang('button'),
    href: '/basic/button',
    component: Button,
  },
];
