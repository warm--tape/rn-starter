import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from './screens/AuthScreen';
import MainScreen from './screens/MainScreen';

// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// Create Navigators
const MainStack = createNativeStackNavigator();
// const MainStack = createStackNavigator();
// const MainBottomTabs = createBottomTabNavigator();
// const MainDrawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="AuthScreen" component={AuthScreen} />
        <MainStack.Screen name="MainScreen" component={MainScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
