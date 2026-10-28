import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { TransactionProvider } from './src/context/TransactionContext';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <TransactionProvider>
          <NavigationContainer>
            <StatusBar style="dark" backgroundColor="#F4FAF7" />
            <RootNavigator />
          </NavigationContainer>
        </TransactionProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
