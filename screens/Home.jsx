import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from "react-native";
import Card from '../components/card/Card';
import MyModal from '../components/modal/MyModal';

export default function Home({navigation}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Zelda breath of the wild', rating: 5, body: 'lorem ipsum', key: '1', name: 'Zelda'},
        {title: 'Gotta catch\'em all!', rating: 4, body: 'lorem ipsum', key: '2', name: 'Poke\'mon'},
        {title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3', name: 'FFVII'},
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews(prev => [review, ...prev]);
        setModalOpen(false);
    }

    return ( 
    <View style={styles.container}>
        <MyModal modalOpen={modalOpen} setModalOpen={setModalOpen} addReview={addReview}/>
        <FlatList
            data={reviews}
            renderItem={( {item} ) => (
                <TouchableOpacity onPress={() => navigation.navigate('Reviews',item)}>
                    <Card>
                        <Text style={styles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    titleText: {
        color: "#333",
        fontSize: 20,
    }
});