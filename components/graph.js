import React, { Component } from 'react';
import { StyleSheet, View , SafeAreaView, Dimensions } from 'react-native';
import { Svg } from 'expo';
import { scaleTime, scaleLinear, scalePoint } from 'd3-scale';
import * as shape from 'd3-shape';
import data from './../assets/mockData.js';

const d3 = {
    shape,
};

const { G, Path, Line, Text, Defs, LinearGradient, Stop } = Svg;

let { width } = Dimensions.get('window');
width = 0.99 * width;
height = 0.525 * width;


// d3 scales
const scaleX = scaleTime().domain([ new Date(2018, 1, 1), new Date(2018, 12, 29) ]).range([0, width]);
const scaleY = scaleLinear().domain([0, 6000]).range([height , 0]);

 // d3 axes
const cashAmounts = [4000, 2000, 1000, 0];
const durationNames = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];





export default class Graph extends Component{

    line = d3.shape.line()
        .x(d => scaleX(d.x))
        .y(d => scaleY(d.y))
        .curve(d3.shape.curveBasis)
        (data);

    
    scalePoints = () => {
        // X scale point
        const xDomain = durationNames.map(item => item);
        const xRange = [0, width];
        const xScalePoint = scalePoint()
            .domain(xDomain)
            .range(xRange)
    
        // y scale point
        const yDomain = cashAmounts.map(item => item);
        const yRange = [0, height];
        const yScalePoint = scalePoint()
            .domain(yDomain)
            .range(yRange)
    
        return({
            xScalePoint, yScalePoint
    })
    }

    // The zero line and zero value
    zeroLine = (height, width) => (
        <Line  x1='0' y1={height} x2={width} y2={height} stroke="#b2b8b8" strokeWidth="0.9"/>
    );
    

cursor = React.createRef();  


    render(){
    return (
        <G>
            <View style={styles.container}>
            <Svg width={`${width}`} height={`${height}`}>
                <Text x={270} y={25} fill='#6DEAC3' fontWeight="bold" fontSize="13">
                sh.
                </Text>
                <Text x={290} y={30} fill='#6DEAC3' fontWeight="bold" fontSize="20">
                24,000
                </Text>
                <Defs>
                    <LinearGradient id="grad" x1="50%" y1="0%" x2="50%" y2="100%">
                        <Stop offset="0%" stopColor="#b6f4e1" />
                        <Stop offset="100%" stopColor="#ffffff" />
                    </LinearGradient>
                </Defs>
                <Path d={this.line} fill='transparent' stroke='#7becc9' strokeWidth={6}/>
                <Path d={`${this.line} L ${width} ${height} L 0 ${height} `} fill='url(#grad)' />

                {cashAmounts.map(item => (
                    <G key={`label' + ${item}`} >
                    <Line  x1='0' y1={this.scalePoints().yScalePoint(item)} x2={width} y2={this.scalePoints().yScalePoint(item)} stroke="#b2b8b8" strokeWidth="0.1"
                />
                </G>))
            }
            {this.zeroLine(height, width)}
            <View style={styles.cursor}/>
            </Svg>
        </View>
        <View style={{ backgroundColor:'#ffff' }}>
            <Svg width={`${width}`} height={`${20}`}>
            {durationNames.map(item => (
                    <Text
                    key={'monthName' + item}
                    fontSize="12"
                    x={this.scalePoints().xScalePoint(item)}
                    y={20}
                    textAnchor="start"
                    fill='#757575'
                    >
                    {item}
                    </Text>
                ))}
            </Svg>
        </View>
        </G>
    );
    }
}

const styles = StyleSheet.create(
    {
    container: {
        width,
        marginTop: 20,
    },
    cursor: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#2ae0a8',
        borderWidth: 3,
        backgroundColor: '#FFFFFF',
    },
    }
);

