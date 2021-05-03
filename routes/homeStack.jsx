// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { headerOptions } from './shared/headerOptions';
import Home from '../screens/Home';
import Reviews from '../screens/Reviews';
import Header from './shared/Header';

const Stack = createStackNavigator();

export default function({navigation}) {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: props => <Header {...props} navigation={navigation} title='Home'/>
      }}
      />
      <Stack.Screen
      name="Reviews"
      component={Reviews}
      options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
}