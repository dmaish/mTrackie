import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class button extends React.Component {
render() {
    return (
        <View style={ styles.timeSpanButton }>
            <Text style={{color: '#1cc281', flex: 3, fontWeight: '900', }}>Yesterday</Text>
            <Ionicons name='ios-arrow-down' size={15} color='#1cc281' style={{flex: 1}} />
        </View>
    )
}
}

const styles = StyleSheet.create({
    timeSpanButton: {
        flexDirection: 'row',
        top: -24,
        left: 280,
        width: 125, 
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8aeecf',
        textAlign: 'center',
        borderRadius: 30,
        paddingLeft: 15,
        borderColor: '#b2b8b8',
    }
    });

    // gradient color = #6DEAC3