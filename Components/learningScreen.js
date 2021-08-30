import React from 'react';
import {View, Text, ScrollView, Image, useWindowDimensions, TouchableOpacity} from 'react-native';

const learningScreen = ({navigation}) => {

    const titles=[
        {title:'Introduction', image:require('../Images/Intro.jpg'), componentName:'Basic Rules',},
        {title:'Ascending - Descending Triangle', image:require('../Images/AscDescTriangle.png'), componentName:'ADT'},
        {title:'Symmetrical Triangle', image:require('../Images/Sym.png'), componentName:'ST'},
        {title:'Head and Shoulders - Inverted Head and Shoulders', image:require('../Images/HAS.jpg'), componentName:'HNS'},
        {title:'Double Top - Bottom', image:require('../Images/DoubleTB.png'), componentName:'DT'},
        {title:'Tripple Top - Bottom', image:require('../Images/TTB.jpg'), componentName:'TT'},
        {title:'Bearish - Bullish Pennant', image:require('../Images/BBP.png'), componentName:'BP'},
        {title:'Bearish - Bullish Rectangle', image:require('../Images/BBR.png'), componentName:'BR'},
        {title:'Rising - Falling Wedge', image:require('../Images/RFW.jpg'), componentName:'RW'},
    ];

    const windowWidth = useWindowDimensions().width;

    return (
        <View>
            <ScrollView>
                {titles.map((item,key)=>(
                <TouchableOpacity key={key} onPress={()=>navigation.navigate(item.componentName)}>
                <View style={{marginHorizontal:20,marginVertical:40,}}>
                    <Image source={item.image} style={{width:windowWidth-40, height:160,}}/> 
                    <View style={{ display:'flex', justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{fontSize:24,paddingTop:20,}}>{item.title}</Text>
                    </View>
                </View>
                </TouchableOpacity>))}
            </ScrollView>
        </View>
    )
}

export default learningScreen;
