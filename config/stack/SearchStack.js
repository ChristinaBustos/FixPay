import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Rent from '../../modules/search/adapters/screens/Buscar'

const Stack = createNativeStackNavigator()

export default function () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#ff5a60' }
            }}>
            <Stack.Screen
                name='rentStack'
                options={{ title: 'Buscar' }}
                component={Rent}
            />
        </Stack.Navigator>
    )
}