import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';

import TimeSpanButton from './../components/button';

export default class HomeScreen extends React.Component {

  componentWillMount(){
    this.statusBarHeightMargin = 0;
    if (Platform.OS === 'android'){
        this.statusBarHeightMargin = StatusBar.currentHeight;
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ marginTop: this.statusBarHeightMargin, flex: 1, }} >
        <ScrollView style={styles.container} >
          <View style={styles.topView}>
            <View style={styles.timeSpan}>
                <Text style={styles.bigDate}>
                  November
                </Text>
                <Text style={styles.smallDate}>
                  20th-31st
                </Text>
            </View>
            <TimeSpanButton />
          </View>
        
        </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  topView: {
    flex: 1,
    height: 120,
    backgroundColor: '#ffffff',
    borderBottomColor: '#536878',
    borderBottomWidth: 1,
  },
  timeSpan: {
    top: 20,
    left: 20,
    width: 200, 
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  bigDate: {
    fontWeight: '900',
    color: '#109689',
    height: 20,
    flex: 1,
    fontSize: 18,
  },
  smallDate: {
    fontWeight: '900',
    flex: 1,
    fontSize: 14,
    color: '#b2b8b8'
  },
});
