import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const In = () => {
    return (
        <View>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Introduction</Text>
            </View>
        </View>
    )
}

const ADT = () =>{
    return(
        <View>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Ascending and Descending Triangle</Text>
            </View>
        </View>
    )
}

const ST = () => {
    return (
        <View>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Symmetrical Triangle</Text>
            </View>
        </View>
    )
}

const HNS = () =>{
    return(
        <View>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Head And Shoulders</Text>
            </View>
        </View>
    )
}

const DT = () => {
    return (
        <View>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Double Top And Bottom</Text>
            </View>
        </View>
    )
}

const TT = () =>{
    return(
        <View>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Triple Top And Bottom</Text>
            </View>
        </View>
    )
}

const BP = () => {
    return (
        <View>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Bearish And Bullish Pennant</Text>
            </View>
        </View>
    )
}

const BR = () =>{
    return(
        <View>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Bearish And Bullish Rectangle</Text>
            </View>
        </View>
    )
}

const RW = () =>{
    return(
        <View>
            <View style={styles.TitleContainer}>
                <Text style={styles.Title}>Rising And Falling Wedge</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TitleContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
    },
    Title:{
        fontSize:24,
    },
})

export {In,ADT,ST,HNS,DT,TT,BP,BR,RW};
