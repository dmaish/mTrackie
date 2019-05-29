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

const { width } = Dimensions.get('window');
height = 200;


// d3 scales
const scaleX = scaleTime().domain([ new Date(2018, 1, 1), new Date(2018, 12, 29) ]).range([0, width]);
const scaleY = scaleLinear().domain([0, 6000]).range([height - 5, 5]);

 // d3 axes
const cashAmounts = [6000, 4000, 2000,1000,];
const monthNames = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];





export default class Graph extends Component{

    line = d3.shape.line()
        .x(d => scaleX(d.x))
        .y(d => scaleY(d.y))
        // .curve(d3.shape.curveBasis)
        (data);

    scalePoints = () => {
        // X scale point
        const xDomain = monthNames.map(item => item);
        const xRange = [0, width];
        const xScalePoint = scalePoint()
            .domain(xDomain)
            .range(xRange)
            .padding(0.5)
    
        // y scale point
        const yDomain = cashAmounts.map(item => item);
        const yRange = [0, height];
        const yScalePoint = scalePoint()
            .domain(yDomain)
            .range(yRange)
            .padding(0.5)
    
        return({
            xScalePoint, yScalePoint
    })
    }
    

cursor = React.createRef();  


    render(){
    return (
        <View style={styles.container}>
            <Svg {...{ width, height }}>
                <Text x={270} y={25} fill='#6DEAC3' fontWeight="bold" fontSize="13">
                sh.
                </Text>
                <Text x={290} y={30} fill='#6DEAC3' fontWeight="bold" fontSize="20">
                24,000
                </Text>
                <Defs>
                    <LinearGradient id="grad" x1="50%" y1="0%" x2="50%" y2="100%">
                        <Stop offset="0%" stopColor="#d3f8ed" />
                        <Stop offset="100%" stopColor="#ffffff" />
                    </LinearGradient>
                </Defs>
                <Path d={this.line} fill='transparent' stroke='#7becc9' strokeWidth={6}/>
                <Path d={`${this.line} L ${width} ${height} L 0 ${height} `} fill='url(#grad)' />

                {cashAmounts.map(item => (
                    <G key={`label' + ${item}`} >
                    <Text
                    fontSize="13"
                    // fontWeight="bold"
                    // fontWeight='900'
                    y={this.scalePoints().yScalePoint(item)}
                    x={50}
                    textAnchor="end"
                    fill='#b2b8b8'
                    >
                    {item}
                    </Text>
                    <Line  x1="52" y1={this.scalePoints().yScalePoint(item)} x2={width} y2={this.scalePoints().yScalePoint(item)} stroke="#b2b8b8" strokeWidth="0.2"
                />
                </G>))}
                
                {monthNames.map(item => (
                    <Text
                    key={'monthName' + item}
                    fontSize="12"
                    x={this.scalePoints().xScalePoint(item)}
                    y={height - 1}
                    textAnchor="middle"
                    fill='#9E9E9E'
                    >
                    {item}
                    </Text>
                ))}
            </Svg>
        </View>
    );
    }
}

const styles = StyleSheet.create(
    {
    container: {
        flex: 1,
        height,
        width,
        marginTop: 20,
    },
    cursor: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#367be2',
        borderWidth: 3,
        backgroundColor: '#FFFFFF',
    },
    }
);

