import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../screens/Search';
import UserProfileScreen from '../screens/UserProfile';

const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
  return (
    <Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Search" component={SearchScreen} />
      <Screen name="UserProfile" component={UserProfileScreen} />
    </Navigator>
  );
}