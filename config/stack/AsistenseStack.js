import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsistensScreen from '../../modules/ai/adapters/screens/AsistensScreen'


const Stack = createNativeStackNavigator()

export default function () {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#098B67' }
            }}>
            <Stack.Screen
                name='asistenseStack'
                options={{ title: 'Asistente' }}
                component={AsistensScreen}
            />
        </Stack.Navigator>
    )
}