import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import React from 'react';
import Categories from '../Categories/Categories';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Categories}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="rowing" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Categories}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="rowing" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
