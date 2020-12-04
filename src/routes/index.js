import React from 'react';
import { StyleSheet, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home/index';
import Produto from '../pages/Produto';
import Pedidos from '../pages/Pedidos';
import EditarPedido from '../pages/EditarPedido';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5',
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Pedidos" component={Pedidos} />
                <Stack.Screen name="Produto" component={Produto} />
                <Stack.Screen name="EditarPedido" component={EditarPedido} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;