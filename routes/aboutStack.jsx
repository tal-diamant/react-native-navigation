// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import { headerOptions } from './shared/headerOptions';
import Header from './shared/Header';

const Stack = createStackNavigator();

export default function({navigation}) {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: props => <Header {...props} navigation={navigation} title='About'/>
        }}
      />
    </Stack.Navigator>
  );
}