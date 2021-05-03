import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation, title}) {
    const pressHandler = () => {
        navigation.toggleDrawer();
    }
    
    return (
        <ImageBackground source={require('../../assets/game_bg.png')} style={styles.header}>
            <TouchableOpacity style={styles.icon} onPress={pressHandler}>
                <MaterialIcons name='menu' size={28} />
            </TouchableOpacity>
            <View style={styles.content}>
                <Image source={require('../../assets/heart_logo.png')} style={styles.image} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 0,
    },
    image: {
        width: 26,
        height: 26,
        marginRight: 10,
    },
    content: {
        flexDirection: 'row',
    }
});