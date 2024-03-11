import React, { useState } from 'react';
import { FaqNav, GameMainNav, SettingsNav } from '.';

export enum GameRoutes {
  gameMainNav = '/gameMainNav',
  settings = '/settings',
  faq = '/faq',
}

export const Navigation = () => {
  const [currentNav, setCurrentNav] = useState<GameRoutes>(GameRoutes.gameMainNav);

  const navToRender = () => {
    switch (currentNav) {
      case GameRoutes.gameMainNav:
        return <GameMainNav />;
      case GameRoutes.settings:
        return <SettingsNav />;
      case GameRoutes.faq:
        return <FaqNav />;
      default:
        return <h1>Navigation not found. Please Navigation.tsx file.</h1>; // or handle default case
    }
  };
  return navToRender();
};
