import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import * as PoiretOne from './../assets/fonts/PoiretOne-Regular.ttf'

import TimeSpanButton from './../components/button';
import Graph from './../components/graph';
const { width } = Dimensions.get('window');

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
          <View style={styles.graphHolder}>
          <Graph />
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
    height: 70,
    backgroundColor: "#ffffff",
  },
  timeSpan: {
    top: 20,
    left: 20,
    width: 200, 
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    fontFamily: 'space-mono',
  },
  bigDate: {
    fontWeight: '900',
    color: '#00C2A8',
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
  moneyStats: {
    flex: 1,
    height: 50,
    backgroundColor: '#ffffff',
  },
  totalMoney: {
    top: 25,
    left: 250, 
    fontStyle: 'italic',
  },
  graphHolder: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
  }
});
