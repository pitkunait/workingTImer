import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import React from 'react';
import Categories from '../Categories/Categories';
import Timer from '../Timer/Timer';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Categories"
                component={Categories}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name="format-list-bulleted"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Timer"
                component={Timer}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="timer" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;
