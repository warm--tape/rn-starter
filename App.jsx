import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import AppNavigator from './Navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
