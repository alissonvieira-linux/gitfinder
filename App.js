import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigations/BottomTab';

import FavoritesProvider from './src/contexts/FavoritesContext';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <FavoritesProvider>
        <Navigation />
      </FavoritesProvider>
    </NavigationContainer>
  );
}
