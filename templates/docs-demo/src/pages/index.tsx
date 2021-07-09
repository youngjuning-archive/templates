import React from 'react';

import { usePostedPush } from '@hooks';

import PageHome from './home';

// 这里是h5入口
const HomePage: React.FC = () => {
  const push = usePostedPush();

  // 注入react-router-dom路由
  return <PageHome navigate={push} />;
};

export default HomePage;
