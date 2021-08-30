import React,{useState,useEffect} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

const cryptos = (props) => {

    const [line,setLine]=useState([]);

    useEffect(() => {
    }, [])

    return (    
            <View style={styles.MainContainer}>
                <View style={styles.container}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                        uri:props.crypto.image,
                        }}
                    />
                    <View style={styles.symbolContainer}>
                        <Text style={styles.symbol}>{props.crypto.name}</Text>
                        <Text style={{textTransform:'uppercase',color:'grey'}}>{props.crypto.symbol}</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.price}>$ {[props.crypto.current_price]}</Text>
                    {props.crypto.price_change_percentage_24h.toString().charAt(0)=='-'?
                    <Text style={{color:'red'}}>{props.crypto.price_change_percentage_24h}%</Text>:
                    <Text style={{color:'green'}}>{props.crypto.price_change_percentage_24h}%</Text>
                    }
                </View>
            <View style={styles.hr}></View>
            </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop:30,
        marginLeft:20,
        flex:1,
        flexDirection:'row',
    },
    symbolContainer:{
        flexDirection:'column',
        paddingLeft:20,
    },
    container2:{
        display:'flex',
        alignItems:'flex-end',
        marginRight:10,
        marginTop:30,
        flex:1,
    },
    priceContainer:{
        paddingRight:10,
    },
    container3:{
        marginLeft:100,
    },
    MainContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:5,
        paddingHorizontal:10,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    symbol:{
        fontSize:16,
        fontWeight:'bold'
    },
    price:{
        fontSize:16,
        fontWeight:'bold'
    },
    hr:{
        paddingTop:10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
    }
})

export default cryptos
