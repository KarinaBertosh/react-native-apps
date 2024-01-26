import React from 'react';
import Main from './src/components/Main';
import FullInfo from './src/components/FullInfo/FullInfo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const stack = createStackNavigator()

export default function Navigate() {
    return <NavigationContainer>
        <stack.Navigator>
            <stack.Screen
                name="Main"
                component={Main}
                options={{title: 'Main'}}
            />
             <stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{title: 'FullInfo'}}
            />
        </stack.Navigator>
    </NavigationContainer>
}