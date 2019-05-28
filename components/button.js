import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class button extends React.Component {
render() {
    return (
        <View style={ styles.timeSpanButton }>
            <Text style={{color: 'white', flex: 3, marginTop: 10, fontWeight: '900', }}>Yesterday</Text>
            <Ionicons name='ios-arrow-down' size={15} color='white' style={{flex: 1, marginTop: 12,}} />
        </View>
    )
}
}

const styles = StyleSheet.create({
    timeSpanButton: {
        flexDirection: 'row',
        top: -24,
        left: 280,
        width: 120, 
        height: 45,
        justifyContent: 'center',
        backgroundColor: '#00C2A8',
        textAlign: 'center',
        borderRadius: 30,
        paddingLeft: 15,
        // borderWidth: 2,
        borderColor: '#b2b8b8',
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 4.35,
        shadowOffset: {
            height: 9,
            width: 0,
        },
        elevation: 60,
    }
    });

    // gradient color = #6DEAC3