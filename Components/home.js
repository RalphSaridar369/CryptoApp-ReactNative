import React, {useEffect,useState,useRef} from 'react';
import Cryptos from './cryptos';
import { Swipeable } from 'react-native-gesture-handler';
import { FlatList, TouchableOpacity, View, ActivityIndicator, Dimensions, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import axios from 'axios';

const home = (props) => {
    const fetchMore = async() =>{
        setIndex(index+50);
        const data = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${index}&page=1&sparkline=true`)
        .then(res =>{
            setData(res.data)
        })
    }
    const height = Dimensions.get('screen').height;
    const [index, setIndex] = useState(50);
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const dataRef = useRef();
    
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

    useEffect(()=>{
            try{
                axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true').then(res=>{

                    dataRef.current = res.data;
                    //console.log(dataRef);
                    setData(res.data);   
                    setLoading(false);     

                //    console.log(res.data);
                    })
            }
            catch(e){
                console.log("error");
            }
    },[]);

    if(loading){
        return(
            <View>
                <ActivityIndicator size="large" color="orange" style={{marginTop:height/3}}/>
            </View>
        )
    }

    return (
            <View>{/*
                <GestureRecognizer
                    config={config}
            onSwipeLeft={() => props.navigation.navigate('news')}>*/}
                <FlatList
                data={data}
                onEndReached={fetchMore}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>{props.navigation.setOptions({ title: item.title});props.navigation.navigate("detailed",item)}}>
                        <Cryptos crypto={item}/>
                    </TouchableOpacity>
                    )
                }
                />
                {/*</GestureRecognizer>*/}
            </View>
    )
}

export default home
