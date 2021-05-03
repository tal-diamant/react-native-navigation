import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from '../../screens/ReviewForm';

export default function MyModal({modalOpen,setModalOpen, addReview}) {
    return (
        <View>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <TouchableOpacity
                            onPress={() => setModalOpen(false)}
                            style={styles.closeBtnContainer}
                        >
                            <MaterialIcons 
                                name='close'
                                size={24}
                                style={[styles.toggle, styles.close]}
                            />
                        </TouchableOpacity>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
    
            <TouchableOpacity
                onPress={() => setModalOpen(true)}
                style={styles.openBtnContainer}
            >
                <MaterialIcons
                    name='add'
                    size={24}
                    style={styles.toggle}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    closeBtnContainer: {
        marginTop: 20,
        width: 44,
        height: 47,
        alignSelf: 'center',
    },
    openBtnContainer: {
        marginBottom: 10,
        width: 44,
        height: 47,
        alignSelf: 'center',
    },
    toggle: {
        borderWidth: 1,
        borderColor: '#9f9f9f',
        padding: 10,
        borderRadius: 24,
    },
    close: {
        marginBottom: 0,
    },
    content: {
        flex: 1,
    }
});