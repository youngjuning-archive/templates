import React from 'react';

import { useNavigation } from '@react-navigation/core';

import PageHome from './home';

// 这里是面板入口
const HomePage: React.FC = () => {
  const navigation = useNavigation();

  const goto = (componentName: string) => {
    navigation.navigate(componentName);
  };

  // 注入react-navigation路由
  return <PageHome navigate={goto} />;
};

export default HomePage;
