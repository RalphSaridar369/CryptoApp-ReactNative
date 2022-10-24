import React from 'react';
import {View, Text, TextInput, Button,
     ScrollView, StyleSheet, ImageBackground, Alert
    ,Dimensions,
    TouchableOpacity} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import {apiCalc} from './map';

import BG from '../assets/backgroundCalculator2.jpg';


const ValidateCalculus = yup.object({
    numbercoins:yup.string().required()
    .test('bigger-than-0','Input must be greater than 0'
    ,(val)=>{
        return parseInt(val)>0;
    }),
    pricecoin:yup.string().required()
    .test('bigger-than-0','Input must be greater than 0'
    ,(val)=>{
        return parseInt(val)>0;
    }),
    rate:yup.string().required()
    .test('bigger-than-0','Input must be greater than 0'
    ,(val)=>{
        return parseInt(val)>0;
    }),
})

const Calc=(val)=>{
    var coins = parseFloat(val.numbercoins);
    var investment = parseFloat(val.pricecoin) * coins;
    var rate = parseFloat(val.rate)/100;
    console.log(investment," initial investment");
    var calc = investment*Math.pow((1+(rate/12)),12);
    var calcCoins = coins*Math.pow((1+(rate/12)),12);
    var diffPrice = calc - investment;
    var diffCoins = calcCoins - coins;
    console.log("total: ",calc, "difference: ",diffPrice," coins: ",calcCoins," diffCoins: ",diffCoins);
    return [calc.toFixed(3),diffPrice.toFixed(3),calcCoins.toFixed(3),diffCoins.toFixed(3)];
}

const SIZE = Dimensions.get('window').height;
const calculateAPY = () => {

    return (
        <ImageBackground source={BG} resizeMode="cover" style={styles.image}>
                <Formik
                validationSchema={ValidateCalculus}
                initialValues={{numbercoins:'', pricecoin:'', rate:'', result:'', totalresult:'',coinsprofit:'',totalcoinsprofit:''}}
                onSubmit={(values, actions)=>{
                  var table = Calc(values);
                  Alert.alert("Balance",`Total Profit:  $${table[0]}\nProfit:  $${table[1]}\nTotal Coins:  ${table[2]}\nCoins Gained:  ${table[3]}\n`);
                }}>
                    {(formikProps)=>(
                        <View
                        style={styles.Container}>
                         {apiCalc.map((item,index)=><>
                                 <TextInput
                                 key={index}
                                 style={styles.Inputs}
                                 placeholder={item.placeholder}
                                 keyboardType={item.keyboardType}
                                 onChangeText={formikProps.handleChange(item.value)}
                                 value={formikProps.values[item.value]}
                                 onBlur={formikProps.handleBlur(item.value)}
                                 />
                                 <Text style={styles.error}>{formikProps.touched[item.value] && formikProps.errors[item.value]}</Text>
                            </>)}
                            <TouchableOpacity style={styles.ButtonStyled} onPress={formikProps.handleSubmit}>
                                <Text style={styles.StyledText}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>)}
                </Formik>
        </ImageBackground>
    );
}

const styles= StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },
    Container:{
        height:SIZE,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    Inputs:{
        backgroundColor:'#fff',
        paddingVertical:10,
        paddingHorizontal:5,
        marginVertical:10,
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:10,
        width:300,
    },
    ButtonStyled:{
        marginTop:20,
        padding:10,
        width:150,
        borderRadius:10,
        backgroundColor:'orange',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
    },
    StyledText:{
        textAlign:'center',
        color:'white'
    },
    error:{
        color:'#FF0000'
    }
})

export default calculateAPY ;
