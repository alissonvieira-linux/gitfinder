import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigation from './Stack';
import FavoritesScreen from '../screens/Favorites';

import { FontAwesome } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export default function BottomTabStack() {
  return (
    <Navigator
      initialRouteName="StackNavigation"
      tabBarOptions={{
        activeTintColor: "#040404",
        inactiveTintColor: "#d6d6d6",
        showLabel: false,
        tabStyle: {
          backgroundColor: "#f5f5f5",
        }
      }}
    >
      <Screen 
        name="StackNavigation" 
        component={StackNavigation} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="search" size={size} color={color} />
          )
        }}
      />
      <Screen name="Favorites" component={FavoritesScreen} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="heart" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  );
}