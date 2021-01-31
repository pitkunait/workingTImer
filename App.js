/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/components/Navigation/Navigation';
import AppHeader from './src/components/AppHeader/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store';

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <AppHeader title={'Timer'} />
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;
