/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/components/Navigation/Navigation';
import AppHeader from './src/components/AppHeader/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: () => React$Node = () => {
    return (
        <SafeAreaProvider>
            <AppHeader title={'Timer'} />
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({});

export default App;
