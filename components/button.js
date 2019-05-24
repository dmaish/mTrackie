import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

export default class button extends React.Component {
render() {
    return (
        // <LinearGradient
        // colors={['#17d3c1', '#13afa0', '#109689']}
        // start={[0.1, 0.1]}
        // end={[0.3, 0.9]} style={{flexDirection: 'row',
        // top: -27,
        // left: 280,
        // width: 120, 
        // height: 45,
        // justifyContent: 'center',
        // borderRadius: 30,
        // paddingLeft: 15,
        // shadowColor: 'red',
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.32,
        // shadowRadius: 5.46,
        // elevation: 99,
        // }}>
        //     <Text style={{color: '#ffffff', flex: 2, marginTop: 10 }}>yesterday</Text>
        //     <Ionicons name='ios-arrow-down' size={15} color='#ffffff' style={{flex: 1, marginTop: 12 }} />
        // </LinearGradient>
        <View style={ styles.timeSpanButton }>
            <Text style={{color: 'black', flex: 2, marginTop: 10, fontWeight: '900', }}>Yesterday</Text>
            <Ionicons name='ios-arrow-down' size={15} color='black' style={{flex: 1, marginTop: 12 }} />
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
        textAlign: 'center',
        borderRadius: 30,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: '#b2b8b8',
    }
    });