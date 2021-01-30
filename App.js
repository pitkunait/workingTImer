/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Categories from './src/components/Categories/Categories';


const App: () => React$Node = () => {
  return (
      <SafeAreaProvider>

        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          <Categories/>
        </SafeAreaView>
      </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
