import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from '../components/card/Card';
import { images } from '../styles/global';

export default function Reviews({route}) {
    const { title, rating, body } = route.params
    return (
    <View style={styles.container}>
        <Card>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <View style={styles.rating}>
                <Text>GameZone Rating:</Text>
                <Image source={images.ratings[rating]} />
            </View>
        </Card>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        // justifyContent: "center",
        // alignItems: "center",
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});