import React from 'react';
import {ImageBackground} from 'react-native';

export const headerOptions = {
    // headerStyle: {backgroundColor: 'pink'},
    headerTintColor: 'black',
    headerTitleStyle: {
        // fontWeight: 'bold',
        // alignSelf: 'center',
    },
    // headerTitleAlign: 'center',
    headerBackground: () => (
        <ImageBackground 
            source={require('../../assets/game_bg.png')}
            style={{
                width: '100%',
                height: '100%',
            }}
        />
        ),
}